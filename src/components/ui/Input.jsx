export function Input({ id, label, placeholder, value, defaultValue, disabled, onChange, onKeyPress, type = "text", required, size, className }) {
  const sizeClass = size === "small" ? "px-2 py-1 text-xs" : "px-3 py-2 text-sm";
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label htmlFor={id} className="text-sm font-medium text-gray-700">{label}</label>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={onChange}
        onKeyPress={onKeyPress}
        required={required}
        className={`border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-bmb-blue disabled:bg-gray-100 disabled:cursor-not-allowed ${sizeClass} ${className || ""}`}
      />
    </div>
  );
}
