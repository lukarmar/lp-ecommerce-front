/* eslint-disable react-hooks/rules-of-hooks */

import dynamic from "next/dynamic";


const Hero = dynamic(() => import("components/Hero"));

const Home = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default Home;