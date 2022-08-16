import Head from "next/head";
import { Biography, Banner, Testimonial } from "../src/components/Home";
import { Button, Footer } from "../src/components/Shared";
import Header from "../src/components/Shared/Header";
import { useRouter } from "next/router";

export default function Home() {
  const history = useRouter();
  return (
    <div>
      <Head>
        <title>Lisa Marie</title>
      </Head>
      <Header />
      <div className="h-screen relative ">
        <img
          src="/images/the_valley.webp"
          className="mx-auto h-full object-content"
        />
      </div>
      <Banner extraClasses="bg-red-400 h-44  flex  justify-center">
        <div className="sm:w-4/12 w-8/12 h-full flex flex-col justify-between items-center">
          <strong className="text-center font-playfair">
            Listen to I AM a Warrior - Episode 23
          </strong>

          <p className="py-4">This is a details about poadcast</p>
          <Button
            text="Go to Podcast: Unabashed You"
            onClick={() =>
              window.open(
                "https://unabashedyou.com/episodes/i-am-a-warrior-episode-23",
                "_blank"
              )
            }
            extraClasses="h-10"
          />
        </div>
      </Banner>
      {/* <Biography></Biography> */}
      <Testimonial />
      <Banner extraClasses="flex items-center justify-center bg-red-400 h-52">
        <div className="sm:w-4/12 w-8/12 h-full flex flex-col justify-evenly items-center">
          <strong className="text-center font-playfair">
            If it feels like I just read your journal or pried into your
            thoughts, trust me, I haven’t. I simply know what you’re going
            through because I help women like you every day. And I’ve been
            there.
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
