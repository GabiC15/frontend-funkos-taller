export default function Alert({ message }) {
  return (
    <>
      <div
        className="bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 rounded fixed mt-3 bottom-10 right-10 leading-tight"
        role="alert"
      >
        <span className="block sm:inline font-medium text-md">{message}</span>
      </div>
    </>
  );
}
