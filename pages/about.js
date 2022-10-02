import Head from "next/head";
import { Banner } from "../src/components/Home";
import { Footer } from "../src/components/Shared";
import Header from "../src/components/Shared/Header";
import { SecondSectionAbout } from "../src/components/About";
import Image from "next/image";
import { MainLayout } from "../src/layouts/MainLayout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lisa Marie</title>
      </Head>
      <MainLayout>
        <div className="sm:h-screen h-96 sm:mt-0 mt-20 relative ">
          <Image
            layout="fill"
            src="/images/v-image.JPG"
          />
        </div>

        <Banner extraClasses="flex items-center sm:text-xl text-sm  justify-center bg-red-400 sm:h-52 h-68">
          <div className="sm:w-4/12 w-10/12 h-full flex flex-col justify-evenly items-center">
            <strong className="text-center font-playfair">
              Knowing how precious time is and how much hurt and confusion grip
              so many, my mission in life is to use every one of my God-given
              gifts to bring you back to a place of faith, hope, and love.
            </strong>
          </div>
        </Banner>
        <SecondSectionAbout />
      </MainLayout>
    </div>
  );
}
