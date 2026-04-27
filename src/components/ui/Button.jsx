export function Button({ variation, onClick, children, style, className, disabled, type = "button", size }) {
  const base = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-bmb-blue focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
  const variants = {
    primary: "bg-bmb-blue text-white hover:bg-bmb-secundary rounded px-4 py-2",
    link: "bg-transparent text-bmb-secundary underline hover:no-underline p-0",
    default: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded px-4 py-2",
  };
  const sizes = {
    small: "text-sm px-3 py-1",
    large: "text-base px-6 py-3",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={style}
      disabled={disabled}
      className={`${base} ${variants[variation || "default"]} ${size ? sizes[size] : ""} ${className || ""}`}
    >
      {children}
    </button>
  );
}
