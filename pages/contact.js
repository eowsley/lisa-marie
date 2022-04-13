import Head from "next/head";
import { Contact } from "../src/components/Contact";
import { Footer } from "../src/components/Shared";
import Header from "../src/components/Shared/Header";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Lisa Marie Contact</title>
      </Head>
      <Header />
      <Contact />
      <Footer />
    </div>
  );
}
