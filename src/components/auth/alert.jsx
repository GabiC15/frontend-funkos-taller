export default function Alert({ message }) {
  return (
    <>
      <div
        className="bg-red-100 border-2 border-red-400 text-red-700 px-2 py-1 rounded absolute mt-3 mx-24 bottom-4 leading-tight"
        role="alert"
      >
        <span className="block sm:inline font-medium text-sm">{message}</span>
      </div>
    </>
  );
}
