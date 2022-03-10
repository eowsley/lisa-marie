import Head from "next/head";
import { Biography, Hero, Banner } from "../src/components/Home";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lisa Marie</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Hero />
      <Banner />
      <Biography></Biography>
    </div>
  );
}
