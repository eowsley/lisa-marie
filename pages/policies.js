import Head from "next/head";
import { Policies } from "../src/components/Policies";
import { Footer } from "../src/components/Shared";
import { Contact } from "../src/components/Contact";
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
