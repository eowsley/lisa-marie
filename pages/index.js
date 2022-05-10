import Head from "next/head";
import { Biography, Hero, Banner, SecondSection, Testimonial } from "../src/components/Home";
import { Button, Footer } from "../src/components/Shared";
import Header from '../src/components/Shared/Header'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Lisa Marie</title>

      </Head>
      <Header />
      <Hero />
      <Banner extraClasses="flex items-center justify-center bg-red-400 h-52">
        <div className="sm:w-4/12 w-8/12 h-full flex flex-col justify-evenly items-center">
          <strong className="text-center font-playfair">
          Believe that YOU will do the impossible in your life. -Lisa
          </strong>
          <Button text="Go to Work" extraClasses="h-10" />
        </div>
      </Banner>
      <SecondSection />
      <Banner extraClasses="bg-red-400 h-44  flex  justify-center">
        <div className="sm:w-4/12 w-8/12 h-full flex flex-col justify-between items-center">
          <strong className="text-center font-playfair">
            Listen to I AM a Warrior - Episode 23
          </strong>

          <p className="py-4">
            This is a details about poadcast
          </p>
          <Button text="Go to Podcast: Unabashed You" onClick={()=> window.open("https://unabashedyou.com/episodes/i-am-a-warrior-episode-23", '_blank')} extraClasses="h-10" />

        </div>
      </Banner>
      {/* <Biography></Biography> */}
      <Testimonial />
      <Footer />
    </div>
  );
}
