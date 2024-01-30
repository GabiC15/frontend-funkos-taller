const ErrorMessageForm = ({message}) => {
  return (
    <>
      <div className="">
        <p className="text-red-500 text-sm md:text-base font-sans">{message}</p>
      </div>
    </>
  );
};

export default ErrorMessageForm;
