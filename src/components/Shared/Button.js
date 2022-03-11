export const Button = ({ text, extraClasses }) => {
  return (
    <button className={"group transform rounded px-1 sm:px-4 font-playfair w-fit bg-transparent border "+ extraClasses}>
      {text}{" "}
      <span className="hidden group-hover:inline-block"> {">"} </span>
    </button>
  );
};
