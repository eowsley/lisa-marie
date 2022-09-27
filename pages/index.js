import Head from "next/head";
import { Hero, Banner, SecondSection } from "../src/components/Home";
import { useRouter } from "next/router";
import { Button, Header, Footer } from "../src/components/Shared";
import { MainLayout } from "../src/layouts/MainLayout";
export default function Home() {
  const history = useRouter();
  return (
    <div>
      <Head>
        <title>Lisa Marie</title>
      </Head>
      <MainLayout>
        <Hero />
        <Banner extraClasses="flex items-center justify-center bg-red-400 h-72">
          <div className="sm:w-4/12 w-8/12 h-full flex flex-col justify-evenly items-center">
            <strong className="text-center font-playfair">
              Believe that YOU will do the impossible in your life. -Lisa <br />{" "}
              <br /> In 2005, breast cancer, a double mastectomy, chemo, and
              radiation. The doctors said I had two years to live. And guess
              what? I’m still here. And I’m committed to my mission.
            </strong>
            <Button
              text="Let's Do The Impossible IN YOUR LIFE!"
              extraClasses="h-10"
              onClick={() => history.push("/work#regain")}
            />
          </div>
        </Banner>
        <SecondSection />
      </MainLayout>
    </div>
  );
}
