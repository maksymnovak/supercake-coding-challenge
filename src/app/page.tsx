"use client";
import { useState, useEffect } from "react";
import SearchInput from "./components/search-input";
import FiltersDropdown from "./components/filters-dropdown";
import Customer from "./components/customer";
import { type Customer as CustomerType } from "./types/customer";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [filters, setFilters] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [customers, setCustomers] = useState<CustomerType[]>([]);

  useEffect(() => {
    const fetchCustomers = async (searchText: string, species: string) => {
      let url = "http://localhost:3000/api/customers";
      if (searchText) {
        url += `?searchText=${searchText}`;
        if (species) {
          url += `&species=${species}`;
        }
      } else if (species) {
        url += `?species=${species}`;
      }

      return fetch(url, {
        method: "GET",
      });
    };

    setError("");
    setLoading(true);
    fetchCustomers(search, filters.join(","))
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setCustomers(data.customers);
      })
      .catch((error) => {
        setLoading(false);
        setCustomers([]);
        setError(error.message ?? error.toString());
      });
  }, [search, filters]);

  return (
    <>
      <div className="m-[54px] mb-[12px] bg-secondary px-[36px] py-[32px]">
        <h1 className="font-inter font-semibold text-xl text-text-dark mb-[16px]">
          Customers and Pets
        </h1>
        <div className="flex flex-row gap-[16px] flex-wrap">
          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FiltersDropdown
            appliedFilters={filters}
            onApplyFilters={setFilters}
          />
        </div>
      </div>

      <div className="mx-[54px] mb-[54px] flex flex-col gap-[8px]">
        {customers.map((customer) => (
          <Customer key={customer.id} customer={customer} />
        ))}
      </div>

      {error && (
        <div className="mx-[54px] bg-secondary px-[36px] py-[32px]">
          <p className="text-red font-inter text-lg">
            <span className="font-semibold">Error:</span> {error}
          </p>
        </div>
      )}

      {loading && (
        <div className="mx-[54px] bg-secondary px-[36px] py-[32px]">
          <p className="text-text-dark font-inter text-lg">Loading...</p>
        </div>
      )}
    </>
  );
}
