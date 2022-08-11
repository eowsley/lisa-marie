import Head from "next/head";
import {
  Banner,
} from "../src/components/Home";
import { Footer } from "../src/components/Shared";
import Header from "../src/components/Shared/Header";
import {SecondSectionAbout} from '../src/components/About'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lisa Marie</title>
      </Head>
      <Header />
      <div className="h-screen relative ">
        <img src="/images/v-image.JPG" className="mx-auto h-full object-content" />
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
      <SecondSectionAbout />
      <Footer />
    </div>
  );
}
