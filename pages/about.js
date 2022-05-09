import Head from "next/head";
import {
  Biography,
  Hero,
  Banner,
  SecondSection,
  Testimonial,
} from "../src/components/Home";
import { Button, Footer } from "../src/components/Shared";
import Header from "../src/components/Shared/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lisa Marie</title>
      </Head>
      <Header />
      <div className="h-screen relative ">
        <img src="/images/v-image.JPG" className="w-full h-full" />
      </div>
      <Banner extraClasses="flex items-center justify-center bg-red-400 h-52">
        <div className="sm:w-4/12 w-8/12 h-full flex flex-col justify-evenly items-center">
          <strong className="text-center font-playfair">
            Knowing how precious time is and how much hurt and confusion grip so
            many, my mission in life is to use every one of my God-given gifts
            to bring you back to a place of faith, hope, and love.
          </strong>
          
        </div>
      </Banner>
      <SecondSection />

      <Footer />
    </div>
  );
}
