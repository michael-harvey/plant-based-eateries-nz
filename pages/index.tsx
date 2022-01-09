import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import Onboarding from "../components/OnBoarding/Onboarding";

const Map = dynamic(() => import("../components/Map/Map"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Plant based eateries NZ</title>
        <meta name="description" content="Plant based eateries NZ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full">
        <Onboarding />
        <Map />
      </main>
    </>
  );
};

export default Home;
