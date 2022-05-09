export const Button = ({ text, extraClasses, onClick,  extraArrowClasses }) => {
  return (
    <button
    onClick={onClick}
      className={
        "group transform rounded px-1 sm:px-4 font-playfair w-fit bg-transparent border-2 " +
        extraClasses
      }
    >
      {text}{" "}
      <div className={"right-arrow hidden group-hover:inline-block " + extraArrowClasses}></div>
    </button>
  );
};
