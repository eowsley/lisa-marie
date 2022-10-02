import { Button } from "../Shared";
import { useRouter } from "next/router";
import clsx from "clsx";

export const SecondSectionWork = ({ isContentHasSpace, title, subTitle, content, id, children }) => {
  const history = useRouter();
  return (
    <div
      id={id}
      className="h-auto bg-blue-200 sm:py-8 py-4 flex flex-col sm:flex-row justify-end"
    >
      <div className="sm:w-6/12 w-full flex justify-center items-start">
        {children}
      </div>
      <div className="w-full sm:w-6/12 w-10/12 flex flex-col items-center sm:mx-auto sm:px-10 p-4">
        <h1 className="sm:self-start text-center text-2xl font-playfair mb-4 ">{title}</h1>

        <h3 className="sm:self-start text-red-400 text-xl uppercase mb-4 ">
          {subTitle}{" "}
        </h3>

        <p className={clsx("sm:self-start mb-4 text-gray-500 w-10/12 text-center sm:text-left whitespace-pre-line", {'sm:ml-10': isContentHasSpace})}>
          {content}
        </p>
        <Button
          onClick={() => history.push("/contact")}
          text="Contact Me Now"
          extraClasses="sm:self-start border-blue-400 text-blue-400 h-10"
        />
      </div>
    </div>
  );
};
