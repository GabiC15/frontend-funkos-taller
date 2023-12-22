export default function InputField({ children, id, placeholder }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-normal text-white mt-2 self-start"
      >
        {children}
      </label>
      <input
        type="text"
        id={id}
        className="bg-transparent text-sm border placeholder-white/70 placeholder:text-sm border-white focus:border-white text-white rounded-md focus:outline-none block w-full p-1.5 mt-0.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
