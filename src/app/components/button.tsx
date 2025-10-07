interface ButtonProps {
  variant: "primary" | "secondary";
  className?: string;
  onClick: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}

const PRIMARY_BUTTON_CLASSES =
  "flex-1 h-[40px] flex items-center justify-center text-white font-inter font-medium text-base rounded-[12px] bg-primary hover:bg-accent shadow-[inset_0_-5px_7px_0_rgb(17,96,201),_0_4px_4px_-1px_rgba(0,0,0,0.08),_0_1px_1px_0_rgba(0,0,0,0.12),_inset_0_4px_4px_0_rgb(22,123,255)]";
const SECONDARY_BUTTON_CLASSES =
  "flex-1 h-[40px] flex items-center justify-center text-text-dark font-inter font-medium text-base rounded-[12px] border border-line bg-white hover:bg-secondary shadow-[0_4px_4px_-1px_rgba(0,0,0,0.02),_0_1px_1px_0_rgba(0,0,0,0.06)]";

export default function Button({
  variant,
  className,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`${className ?? ""} ${variant === "primary" ? PRIMARY_BUTTON_CLASSES : SECONDARY_BUTTON_CLASSES}`}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </button>
  );
}
