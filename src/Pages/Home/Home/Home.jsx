import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Feature from "../Feature/Feature";
import Testtimonials from "../Testimonials/Testtimonials";
import Pmenu from './../Pmenu/Pmenu';
import { Helmet } from 'react-helmet-async';



const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Pmenu></Pmenu>
      <Feature></Feature>
      <Testtimonials></Testtimonials>
    </div>
  );
};

export default Home;