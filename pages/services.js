import Head from "next/head";
import { Banner, Testimonial } from "../src/components/Home";
import { Button } from "../src/components/Shared";
import { MainLayout } from "../src/layouts/MainLayout";
import { useRouter } from "next/router";
import Image from "next/image";
import podcastImage from "../public/images/podcast.jpeg";

export default function Home() {
  const history = useRouter();
  return (
    <div>
      <Head>
        <title>Lisa Marie</title>
      </Head>
      <MainLayout>
        <div className=" relative  flex justify-around items-center">
          <div className="w-2/5 ">
            <Image
              layout="responsive"
              width={55}
              height={82}
              src={podcastImage}
              className="mx-auto h-full object-content"
            />
          </div>

          <div className="text-left w-2/5">
            <h1 className="mb-4 text-3xl"> Loving.Nurturing.Connector.</h1>

            <strong className="flex justify-end">
              <em className="pr-10">— Lisa</em>
            </strong>

            <div className="w-full h-full flex flex-col justify-between items-start mt-6">
    
              <Button
                onClick={() =>
                  window.open(
                    "https://unabashedyou.com/episodes/i-am-a-warrior-episode-23",
                    "_blank"
                  )
                }
                extraClasses="h-10"
              >
                <strong className="text-center font-playfair">
                  Listen to I AM a Warrior - Episode 23
                </strong>
              </Button>
            </div>
          </div>
        </div>
        <Banner extraClasses="bg-red-400 h-20 flex  justify-center"></Banner>
        {/* <Biography></Biography> */}
        <Testimonial />
        <Banner extraClasses="flex items-center justify-center bg-red-400 h-60">
          <div className="sm:w-4/12 w-8/12 h-full flex flex-col justify-evenly items-center">
            <strong className="text-center font-playfair">
              If it feels like I just read your journal or pried into your
              thoughts, trust me, I haven’t. I simply know what you’re going
              through because I help women like you every day. And I’ve been
              there.
            </strong>
            <Button
              text="Invest in yourself"
              extraClasses="h-10 mt-2"
              onClick={() => history.push("/contact")}
            />
          </div>
        </Banner>
      </MainLayout>
    </div>
  );
}
