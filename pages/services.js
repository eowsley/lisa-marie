import Head from "next/head";
import {
  Banner,
} from "../src/components/Home";
import { Button, Footer } from "../src/components/Shared";
import Header from "../src/components/Shared/Header";
import { useRouter } from "next/router";

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
            This is a content of the banner
          </strong>
          <Button
            text="Invest in yourself"
            extraClasses="h-10"
            onClick={() => history.push("/contact")}
          />
        </div>
      </Banner>

      <Footer />
    </div>
  );
}
