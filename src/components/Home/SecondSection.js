import { Button } from "../Shared";
import { useRouter } from "next/router";

export const SecondSection = () => {
  const history = useRouter();
  return (
    <div className="h-auto bg-blue-200 py-8 flex flex-col sm:flex-row justify-end justify-center">
      <div className="sm:w-6/12 w-full flex justify-center  items-start">
        <h1 className="w-10/12 font-playfair text-3xl mb-4">SOULFUL IMPACT</h1>
      </div>
      <div className="w-full sm:w-6/12 w-10/12 flex flex-col items-center mx-auto px-10">
        <h1 className="self-start font-playfair mb-4 ">
          I’m Lisa-Marie Whitney, <br /> The Empowerment Coach. <br />{" "}
          <span className="italic text-xl">I am a self-love warrior.</span>{" "}
        </h1>

        <p className="sm:self-start mb-4 font-playfair sm:w-10/12   sm:text-left" >
          My journey began as a child when I discovered I could pick up on
          energy in others and understand where they were broken or hurting.
          This gift further developed as I grew up, eventually landing myself in
          New York working in the fashion industry. My career in fashion then
          led to modeling and ultimately acting. While learning about myself as
          an actor, I honed the skills of setting intentions and losing the
          sense of SELF in order to inhabit a role. Acting opened my soul up to
          understand human nature, listening and discernment on a higher level.{" "}
          <br />  <br />Concepts such as life purpose and mission moved to the
          forefront of my awareness. Upon moving from New York to Los Angeles, I
          found myself in the world of motivational workshops, helping real
          estate agents find their motivations and intentions. Years later, I
          moved to San Diego, got married, had a family and enjoyed our
          lifestyle in La Jolla. <br /> <br /> In 2005, I was diagnosed with
          breast cancer and had a double mastectomy, chemo, and radiation. I
          sought the help of healers who all shared the same message: “Lisa
          Marie, you’re meant to be a healer. This experience is your
          initiation.”
          <br /> <br /> The doctors said I had two years to live. And guess
          what? I’m still here. And I’m committed to my mission. <br /> I’m
          using every moment of my life and every bit of my abilities to empower
          transformation and healing. That’s why I do what I do and will
          continue to do so in service to others.
        </p>
        <Button
          onClick={() => history.push("/contact")}
          text="EXPLORE"
          extraClasses="sm:self-start border-blue-400 text-blue-400 h-10"
        />
      </div>
    </div>
  );
};
