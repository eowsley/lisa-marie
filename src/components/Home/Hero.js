import { Button } from "../Shared";
import { useRouter } from 'next/router'
import Image from 'next/image'

export const Hero = () => {
  const history = useRouter()
  return (
    <div className="min-h-fit  bg-gray-200 pt-20 flex flex-col sm:flex-row items-center justify-end">
      <div className="sm:w-5/12 w-full ">
        <Image  width={40} height={40} src="/images/lmw_hero_IMG_3523.jpeg" alt="lisa" />
      </div>
      <div className="w-full px-10 sm:w-7/12 h-96 flex flex-col justify-evenly items-center sm:items-start">
        <h1 className="font-playfair text-blue-400 text-3xl">
          Is The Life You`&apos;`’ve Worked So Hard to Create Secretly
          Crumbling? <br />{" "}
          <span className="italic  text-xl                                                                                                           ">
            Your pain is an invitation to heal.
          </span>{" "}
          <br />{" "}
        </h1>

        <p className="font-playfair text-blue-400 sm:w-12/12 w-10/12 text-justify sm:text-left">
           <br />{" "}
          <span>
            Nobody knows the pain and disappointment you carry, and you don’t
            want them to. The last thing you need is to be found out... to be
            revealed as someone who`&apos;`’s hanging on by a thread... or so it seems.
          </span>
        </p>
        <p className="font-playfair text-blue-400 sm:w-12/12 w-10/12 text-justify sm:text-left">
           <br />{" "}
          <h1 className="w-10/12 font-playfair text-3xl">I See You.</h1>
          <h1 className="self-start font-playfair mb-4 ">
          I’m Lisa-Marie Whitney, your self-love warrior.<br />{" "} 
         
        </h1>

        </p>
        <p className="self-start text-blue-400 mb-4 font-playfair w-10/12 text-center sm:text-left">
          When you feel like you`&apos;`'re struggling to hold it all together, when
          there is complete chaos going on inside… I`&apos;`’ll reconnect you to your
          true self.
        </p>
        <Button
        onClick={()=>history.push('/work')}
          text="HOW I CAN HELP YOU"
          extraClasses="border-blue-400 text-blue-400 h-10"
        />
      </div>
    </div>
  );
};
