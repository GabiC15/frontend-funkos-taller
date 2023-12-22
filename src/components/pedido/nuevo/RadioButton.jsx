export default function RadioButton({
  children,
  id,
  groupKey,
  checked,
  onClick,
}) {
  return (
    <>
      <div className="flex items-center">
        <input
          checked={checked}
          onChange={onClick}
          id={`default-radio-${id}`}
          type="radio"
          value=""
          name={`default-radio-${groupKey}`}
          className="form-radio w-4 h-4 bg-transparent checked:bg-transparent border-[2px] border-white checked:border-[2px] checked:border-white checked:hover:bg-white checked:active:bg-palatinateBlue checked:focus:bg-transparent focus:bg-transparent focus:outline-none focus:ring-0"
        />
        <label
          forhtml={`default-radio-${id}`}
          className="ms-2 text-sm font-normal text-white"
        >
          {children}
        </label>
      </div>
    </>
  );
}
