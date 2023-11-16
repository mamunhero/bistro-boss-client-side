// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import sliderone from "../../../../src/assets/home/slide1.jpg"
import slidertwo  from "../../../../src/assets/home/slide2.jpg"
import sliderthree from "../../../../src/assets/home/slide3.jpg"
import sliderfour from "../../../../src/assets/home/slide4.jpg"
import sliderfive from "../../../../src/assets/home/slide5.jpg"
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
const Category = () => {
  return (
    <>
       <section>
        <SectionTitle 
         subHeading={"From 11:00am to 10:00pm"}
         heading={"order online"}></SectionTitle>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{delay: 2500}}
          className="mySwiper mb-24"
        >
          <SwiperSlide>
            <img src={sliderone} alt="" />
            <h2 className='text-4xl text-center text-white -mt-36 uppercase'>Salads</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slidertwo} alt="" />
            <h2 className='text-4xl text-center text-white -mt-36 uppercase'>Pizza</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderthree} alt="" />
            <h2 className='text-4xl text-center text-white -mt-36 uppercase'>Soups</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderfour} alt="" />
            <h2 className='text-4xl text-center text-white -mt-36 uppercase'>desserts</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderfive} alt="" />
            <h2 className='text-4xl text-center text-white -mt-36 uppercase'>Salads</h2>
          </SwiperSlide>
        </Swiper>
       </section>
    </>
  );
};

export default Category;

 