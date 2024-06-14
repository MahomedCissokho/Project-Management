interface Props {
  label: string;
  className: string;
  onClick?: () => void;
}

function Button({ label, className = "", onClick }: Props) {
  const isBorderd = className.includes("border");
  const isRounded = className.includes("rounded-");
  const isShadow = className.includes("shadow");
  const hasBgColor = className.includes("bg-");

  return <button className={`${className} px-4 py-2 ${isRounded ? "" : "rounded-md" } ${isShadow ? "" : "shadow"} ${!isBorderd ? "border" :"" } ${hasBgColor ? "" : "bg-primary-900 text-white hover:bg-primary-600/90"}`} onClick={onClick}>{label}</button>;
}

export default Button;

