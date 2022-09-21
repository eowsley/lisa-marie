import { Button } from "../Shared";
import { useRouter } from "next/router";

export const SecondSectionWork = ({ url, title, subTitle, content, id }) => {
  const history = useRouter();
  return (
    <div id={id} className="h-auto bg-blue-200 py-8 flex flex-col sm:flex-row justify-end">
      <div className="sm:w-6/12 w-full flex justify-center  items-start">
        <img className="w-10/12 h-72" src={url || "/images/the_valley.webp"} />
      </div>
      <div className="w-full sm:w-6/12 w-10/12 flex flex-col items-center mx-auto px-10">
        <h1 className="self-start text-2xl font-playfair mb-4 ">{title}</h1>

        <h3 className="self-start text-red-400 text-xl uppercase mb-4 ">
          {subTitle}{" "}
        </h3>

        <p className="self-start  mb-4 text-gray-500 w-10/12 text-center sm:text-left">
          {content}
        </p>
        <Button
          onClick={() => history.push("/contact")}
          text="Contact Me Now"
          extraClasses="self-start border-blue-400 text-blue-400 h-10"
        />
      </div>
    </div>
  );
};
