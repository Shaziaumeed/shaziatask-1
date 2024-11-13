import React from "react";
import Hero from "./Hero";
import Layout from "../Layout";
import Cards from "./Cards";
import Signup from "./signup";
import Best from "./Best";
import Boxes from "./Boxes";

const Home = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Cards/>
        <Signup />
        <Best/>
        <Boxes/>
      </Layout>
    </div>
  )
}
export default Home;
