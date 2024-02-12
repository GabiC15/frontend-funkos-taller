export default function RadioButton({
  key,
  groupKey,
  title,
  checked,
  onClick,
}) {
  return (
    <>
      <div className="flex items-center mt-2">
        <input
          checked={checked}
          id={`default-radio-${key}`}
          type="radio"
          value=""
          name={`default-radio-${groupKey}`}
          className="form-radio w-4 h-4 mx-0.5 bg-transparent checked:bg-transparent border-[2px] border-white checked:border-[2px] checked:border-palatinateBlue checked:hover:bg-white checked:active:bg-palatinateBlue checked:focus:bg-transparent focus:bg-transparent focus:outline-none focus:ring-0"
          onChange={onClick}
        />
        <label
          forhtml={`default-radio-${key}`}
          className="ms-2 text-sm font-normal text-white"
        >
          {title}
        </label>
      </div>
    </>
  );
}
