import { type Customer as CustomerType } from "../types/customer";
import { capitalize } from "../utils/capitalize";

interface CustomerProps {
  customer: CustomerType;
}

export default function Customer({ customer }: CustomerProps) {
  return (
    <div className="bg-secondary px-[36px] py-[32px] text-text-dark text-base font-inter">
      <p className="font-semibold">{customer.name}</p>
      <p>Email: {customer.email}</p>
      <p>Phone: {customer.phone}</p>
      <p>Pets:</p>
      <ul className="pl-[12px]">
        {customer.pets.map((pet) => (
          <li key={pet.id}>
            <p>
              {capitalize(pet.species)}{" "}
              <span className="font-semibold">{pet.name}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
