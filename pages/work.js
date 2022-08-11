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
        title="I’m Lisa-Marie Whitney"
        subTitle="online program"
        content="Every woman who struggles with food, their body and their own self-care deserves to have an ‘out’.  You just need an opportunity to explore a different way of living without years of therapy or misery.  Love the Skin You’re In is my online programme where I have poured all my years of study, personal experience and expertise into one place.  Join us and learn my step by step system to free you from your demons and teach you how to love your body, just as it is.  Come join us."
      />
      <SecondSectionWork
        url="/images/v-image.JPG"
        title="I’m Lisa-Marie Whitney"
        subTitle="online program"
        content="Every woman who struggles with food, their body and their own self-care deserves to have an ‘out’.  You just need an opportunity to explore a different way of living without years of therapy or misery.  Love the Skin You’re In is my online programme where I have poured all my years of study, personal experience and expertise into one place.  Join us and learn my step by step system to free you from your demons and teach you how to love your body, just as it is.  Come join us."
      />
      <SecondSectionWork
        url="/images/v-image.JPG"
        title="I’m Lisa-Marie Whitney"
        subTitle="online program"
        content="Every woman who struggles with food, their body and their own self-care deserves to have an ‘out’.  You just need an opportunity to explore a different way of living without years of therapy or misery.  Love the Skin You’re In is my online programme where I have poured all my years of study, personal experience and expertise into one place.  Join us and learn my step by step system to free you from your demons and teach you how to love your body, just as it is.  Come join us."
      />

      <Footer />
    </div>
  );
}
