import { useEffect, useState } from "react";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testtimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/reviews")
    .then(response=> response.json())
    .then(data=> setReviews(data))
  },[])
  return (
    <div>
      <SectionTitle
      subHeading={"What Our Clients Say"}
      heading={"TESTIMONIALS"}></SectionTitle>
      <Swiper 
      navigation={true}
      modules={[Navigation, Autoplay]} 
      autoplay={{delay: 2500}}
      className="mySwiper">
          
        {
          reviews.map(review=> <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center text-center mx-24 my-16">
            <Rating
              style={{ maxWidth: 180 }}
              value={review.rating}
              readOnly
            />
              <p className="py-8">{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default Testtimonials;

