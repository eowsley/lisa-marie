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
      <Banner extraClasses="bg-red-500 h-72 flex  justify-center">
        <div className="sm:w-4/12 w-8/12 h-full flex flex-col justify-between items-center">
          <strong className="text-center font-playfair">
            This is a content of the banner
          </strong>
          <Button text="Go to xyz now" extraClasses="h-10" />
        </div>
      </Banner>
      {/* <Biography></Biography> */}
      <Testimonial />
      <Footer />
    </div>
  );
}
