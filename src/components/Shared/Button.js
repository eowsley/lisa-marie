export const Button = ({ text, extraClasses, onClick,  extraArrowClasses, children }) => {
  return (
    <button
    onClick={onClick}
      className={
        "group transform rounded px-1 sm:px-4 font-playfair w-fit bg-transparent border-2 " +
        extraClasses
      }
    >
      {text ? text : children}
      <div className={"right-arrow hidden group-hover:inline-block " + extraArrowClasses}></div>
    </button>
  );
};
