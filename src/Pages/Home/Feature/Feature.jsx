import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import featureimage from "../../../../src/assets/home//featured.jpg";
import "./Feature.css"

const Feature = () => {
  return (
    <div className="feature-item text-white bg-fixed pt-8 my-20">
      <SectionTitle
       subHeading={"Check it out"}
       heading={"popular menu"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-300 opacity-60 pb-20 pt-12 px-36">
        <div>
          <img src={featureimage} alt="" />
        </div>
        <div className="md:ml-10">
          <p>March 20, 2023</p>
          <p className="uppercase">where can i get some</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia sequi officiis assumenda quos tenetur nam blanditiis quo! Rem omnis perspiciatis dolorum voluptate a, incidunt eligendi cupiditate tempora dicta perferendis harum, cumque molestiae minus nihil excepturi fugiat quas repellat ipsum, repudiandae quisquam cum repellendus! Fugiat saepe, voluptatem nobis delectus debitis tenetur.</p>
          <button className="btn btn-outline border-0 border-b-2 mt-4">Order Now</button>
        </div> 
      </div>
    </div>
  );
};

export default Feature;