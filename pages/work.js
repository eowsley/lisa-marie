import Head from "next/head";
import {
  Banner,
} from "../src/components/Home";
import { Button, Footer } from "../src/components/Shared";
import Header from "../src/components/Shared/Header";
import { SecondSectionWork } from "../src/components/Work";
import {  useRouter } from 'next/router'

export default function Home() {
  const history = useRouter()
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
            Investing in yourself, investing in your dreams… paramount to
            finding out what your purpose is! -Lisa
          </strong>
          <Button text="Invest in yourself" extraClasses="h-10" onClick={() => history.push('/contact')} />
        </div>
      </Banner>
      <SecondSectionWork
        title="Regain your Joy!"
        subTitle="Free Offer"
        content="Video pep talk to offer momentary relief and a desire to explore freedom!  Come join us."
      />
      <SecondSectionWork
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
      />
      <SecondSectionWork
        url="/images/v-image.JPG"
        title="Book With Lisa"
        subTitle="One on One Sessions"
        content="One on one
        3 Sessions
        6 Sessions
        9 Sessions
        "
      />

      <Footer />
    </div>
  );
}
