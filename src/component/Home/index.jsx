import React from "react";
import Hero from "./Hero";
import Layout from "../Layout";
import Cards from "./Cards";
import Signup from "./signup";

const Home = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Cards/>
        <Signup />
      </Layout>
    </div>
  );
};

export default Home;
