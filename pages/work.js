import Head from "next/head";
import { Banner } from "../src/components/Home";
import { Button } from "../src/components/Shared";

import { SecondSectionWork } from "../src/components/Work";
import { useRouter } from "next/router";
import Image from "next/image";
import { MainLayout } from "../src/layouts/MainLayout";
import image from "../public/images/ph_1.jpeg";

export default function Home() {
  const history = useRouter();
  return (
    <div>
      <Head>
        <title>Lisa Marie</title>
      </Head>
      <MainLayout>
        <div className="h-screen relative ">
          <Image
            layout="fill"
            src="/images/v-image.JPG"
            className="mx-auto h-full object-content"
          />
        </div>
        <Banner extraClasses="flex items-center justify-center bg-red-400 h-52">
          <div className="sm:w-4/12 w-8/12 h-full flex flex-col justify-evenly items-center">
            <strong className="text-center font-playfair">
              Investing in yourself, investing in your dreams… paramount to
              finding out what your purpose is! -Lisa
            </strong>
            <Button
              text="Invest in yourself"
              extraClasses="h-10"
              onClick={() => history.push("/contact")}
            />
          </div>
        </Banner>
        <SecondSectionWork
          id="regain"
          title="Regain your Joy!"
          subTitle="Free Offer"
          content="Video pep talk to offer momentary relief and a desire to explore freedom!  Come join us."
        >
          <Image
            layout="fixed"
            alt="xyz"
            height={300}
            width={450}
            src={image}
          />
        </SecondSectionWork>
        <SecondSectionWork
          id="book"
          url="/images/v-image.JPG"
          title="Book With Lisa"
          subTitle="One on One Sessions"
          isContentHasSpace
          content={`3 Sessions \n
            6 Sessions \n
            9 Sessions`}
        >
          <Image
            layout="fixed"
            alt="xyz"
            height={300}
            width={450}
            src="/images/the_valley.webp"
          />
        </SecondSectionWork>

        <SecondSectionWork
          id="quit"
          url="/images/v-image.JPG"
          title="Quit Saying Sorry… Take up Space… Shine Bright…How to stop apologizing for yourself!"
          subTitle="Low Price"
          content="20-30 minute video workshops for under $50...The Perfectionism Trap
  Hiding From God?
  Forgiveness 101
  Living w/ Intention
  Fear vs. Love
  Quit Saying Sorry… Take up Space… Shine Bright…How to stop apologizing for yourself
  Miracles… Affirming Life
  Forgiveness: to clear your own heart, for you not for others
  "
        >
          <Image
            layout="intrinsic"
            alt="xyz"
            height={300}
            width={450}
            src="/images/ph_5.jpeg"
          />
        </SecondSectionWork>
      </MainLayout>
    </div>
  );
}
