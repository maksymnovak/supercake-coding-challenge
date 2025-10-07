import { type Pet } from "./pet";

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  pets: Pet[];
}
