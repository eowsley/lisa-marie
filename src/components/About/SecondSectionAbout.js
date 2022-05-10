import { Button } from "../Shared";
import { useRouter } from 'next/router'

export const SecondSectionAbout = () => {
  const history  = useRouter()
  return (
    <div className="h-auto bg-blue-200 py-8 flex flex-col sm:flex-row justify-end">
      <div className="sm:w-6/12 w-full flex justify-center  items-start">
        <h1 className="w-10/12 font-playfair text-3xl">SOULFUL IMPACT</h1>
      </div>
      <div className="w-full sm:w-6/12 w-10/12 flex flex-col items-center mx-auto px-10">
        <h1 className="self-start font-playfair mb-4 ">
          I’m Lisa-Marie Whitney, <br />{" "} The Empowerment Coach. <br />{" "}
          <span className="italic text-xl">I am a self-love warrior.</span>{" "}
        </h1>

        <p className="self-start mb-4 font-playfair w-10/12 text-center sm:text-left">
          When you feel like you are struggling to hold it all together… when
          there is complete chaos going on inside… I’ll reconnect you to your
          true self.
        </p>
        <Button
          onClick={()=>history.push('/contact')}
          text="Contact Me Now"
          extraClasses="self-start border-blue-400 text-blue-400 h-10"
        />
      </div>
    </div>
  );
};
