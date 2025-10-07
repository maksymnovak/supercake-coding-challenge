import SearchIcon from "../assets/icons/search.svg";

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="flex gap-[8px] items-center border rounded-[8px] bg-white focus-within:border-accent focus-within:shadow-[0_0_0_4px_rgba(41,129,244,0.25)] px-[12px] w-[312px] h-[40px]">
      <SearchIcon className="w-[20px] h-[20px] mr-[2px]" />
      <input
        type="text"
        id="search"
        value={value}
        onChange={onChange}
        className="flex-1 bg-transparent text-text-dark text-base font-inter font-normal outline-none"
        placeholder="Search by ID, name, email or phone"
      />
    </div>
  );
}
