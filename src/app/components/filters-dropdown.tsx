"use client";
import { useState } from "react";
import FilterItem from "./filter-item";
import Button from "./button";
import ChevronDownIcon from "../assets/icons/chevron-down.svg";
import DogIcon from "../assets/icons/dog.svg";
import CatIcon from "../assets/icons/cat.svg";
import BirdIcon from "../assets/icons/bird.svg";
import HamsterIcon from "../assets/icons/hamster.svg";
import RatIcon from "../assets/icons/rat.svg";

interface FiltersDropdownProps {
  appliedFilters: string[];
  onApplyFilters: (filters: string[]) => void;
}

type PetFilter = {
  name: string;
  value: string;
  Icon: React.SVGElementType;
};

const petFilters: PetFilter[] = [
  { name: "Dogs", value: "dog", Icon: DogIcon },
  { name: "Cats", value: "cat", Icon: CatIcon },
  { name: "Birds", value: "bird", Icon: BirdIcon },
  { name: "Hamsters", value: "hamster", Icon: HamsterIcon },
  { name: "Rats", value: "rat", Icon: RatIcon },
];

export default function FiltersDropdown({
  appliedFilters,
  onApplyFilters,
}: FiltersDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] =
    useState<string[]>(appliedFilters);

  return (
    <div className="relative">
      <button
        type="button"
        className={`flex items-center justify-between w-[122px] h-[40px] bg-white border border-line rounded-[12px] px-[20px] py-[11px] text-text-dark text-base font-inter font-medium focus:outline-none ${isOpen ? "bg-focus" : ""}`}
        onClick={() => {
          setSelectedFilters(appliedFilters);
          setIsOpen((prev) => !prev);
        }}
      >
        Pets
        <ChevronDownIcon />
      </button>
      {isOpen && (
        <div className="absolute z-10 w-[334px] mt-2 bg-white border border-line rounded-[12px] shadow-lg animate-[fadeIn_0.2s_ease-out_forwards]">
          <ul className="p-[16px] pt-[20px] flex flex-row gap-[8px] flex-wrap items-baseline justify-start border-b border-line">
            <FilterItem
              key="any"
              text="Any Animal"
              isActive={selectedFilters.length === 0}
              onClick={() => setSelectedFilters([])}
            />
            {petFilters.map((filter) => (
              <FilterItem
                key={filter.value}
                text={filter.name}
                Icon={filter.Icon}
                isActive={selectedFilters.indexOf(filter.value) !== -1}
                onClick={() => {
                  setSelectedFilters((prev) => {
                    const index = prev.findIndex(
                      (value) => value === filter.value
                    );
                    if (index === -1) {
                      return [...prev, filter.value];
                    }

                    const copy = [...prev];
                    copy.splice(index, 1);
                    return copy;
                  });
                }}
              />
            ))}
          </ul>
          <div className="flex justify-between p-[16px] gap-[12px] w-full">
            <Button
              variant="secondary"
              onClick={() => {
                setSelectedFilters([]);
                onApplyFilters([]);
                setIsOpen(false);
              }}
            >
              Reset
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                onApplyFilters(selectedFilters);
                setIsOpen(false);
              }}
            >
              Apply Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
