export function TextArea({ id, label, placeholder, defaultValue, onChange, rows = 3, className }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label htmlFor={id} className="text-sm font-medium text-gray-700">{label}</label>}
      <textarea
        id={id}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
        rows={rows}
        className={`border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bmb-blue resize-y ${className || ""}`}
      />
    </div>
  );
}
