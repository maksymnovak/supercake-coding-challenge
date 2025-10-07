interface FilterItemProps {
  text: string;
  Icon?: React.SVGElementType;
  isActive: boolean;
  onClick: () => void;
}

export default function FilterItem({
  text,
  Icon,
  isActive,
  onClick,
}: FilterItemProps) {
  return (
    <li
      className={`flex items-center gap-[4px] px-[16px] py-[6px] text-text-dark font-inter font-medium text-base rounded-full border border-line cursor-pointer ${isActive ? "bg-primary border-primary text-white" : "hover:bg-secondary"}`}
      onClick={onClick}
    >
      {Icon && <Icon className={isActive ? "text-white" : undefined} />}
      {text}
    </li>
  );
}
