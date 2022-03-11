import { Button } from "../Shared";

export const SecondSection = () => {
  return (
    <div className="h-auto bg-blue-200 py-8 flex flex-col sm:flex-row justify-end">
      <div className="sm:w-6/12 w-full flex justify-center  items-start">
        
        <h1 className="w-10/12">I’m calling time on the idea that you’re broken. It’s bullshit.</h1>

      </div>
      <div className="w-full sm:w-6/12 w-10/12 flex flex-col items-center mx-auto px-10">
        <h1 className="self-start font-playfair text-blue-400 mb-4 ">
          An extraordinary life <br />{" "}
          <span className="italic">starts with self care.</span>{" "}
        </h1>

        <p className="self-start mb-4 font-playfair text-blue-400 w-10/12 text-center sm:text-left">
          Discover three simple actions you can take right now to positively
          impact your body, mind and life.
        </p>
        <Button
          text="EXPLORE"
          extraClasses="self-start border-blue-400 text-blue-400 h-10"
        />
      </div>
    </div>
  );
};
