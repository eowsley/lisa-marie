import Head from "next/head";
import { Contact } from "../src/components/Contact";
import { MainLayout } from "../src/layouts/MainLayout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lisa Marie Contact</title>
      </Head>
      <MainLayout>
 
      <Contact />

      </MainLayout>
    </div>
  );
}
