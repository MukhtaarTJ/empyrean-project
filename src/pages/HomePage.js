import { Fragment } from "react";
import Hero from "../components/HomeComponents/Hero/Hero";
import Episode from "../components/HomeComponents/Hero/Episode";
import ProductList from "../components/HomeComponents/Products/ProductList";
import Testimonials from "../components/HomeComponents/Testimonials/Testimonials";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <Episode />
      <ProductList />
      <Testimonials />
    </Fragment>
  );
};

export default HomePage;
