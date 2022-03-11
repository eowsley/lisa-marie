import { Button } from "../Shared";

export const Hero = () => {
  return (
    <div className="min-h-fit  bg-gray-200 pt-20 flex flex-col sm:flex-row items-center justify-end">
      <div className="sm:w-5/12 w-full">
        <img src="/images/lmw_hero_3523.jpeg" alt="lisa" />
      </div>
      <div className="w-full sm:w-7/12 h-96 flex flex-col justify-evenly items-center sm:items-start">
        <h1 className="font-playfair text-blue-400">
          An extraordinary life <br />{" "}
          <span className="italic">starts with self care.</span>{" "}
        </h1>

        <p className="font-playfair text-blue-400 sm:w-6/12 w-10/12 text-center sm:text-left">
          Discover three simple actions you can take right now to positively
          impact your body, mind and life.
        </p>
        <Button
          text="TAKE THE SELF CARE QUIZ"
          extraClasses="border-blue-400 text-blue-400 h-10"
        />
      </div>
    </div>
  );
};
