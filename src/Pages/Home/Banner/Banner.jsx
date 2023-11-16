import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import imgone from "../../../../src/assets/home/01.jpg"
import imgtwo from "../../../../src/assets/home/02.jpg"
import imgthree from "../../../../src/assets/home/03.png"
import imgfour from "../../../../src/assets/home/04.jpg"
import imgfive from "../../../../src/assets/home/05.png"
import imgsix from "../../../../src/assets/home/06.png"
const Banner = () => {
  return (
    <Carousel className="text-center">
      <div>
        <img src={imgone} />
      </div>
      <div>
        <img src={imgtwo} />
      </div>
      <div>
        <img src={imgthree} />
      </div>
      <div>
        <img src={imgfour} />
      </div>
      <div>
        <img src={imgfive} />
      </div>
      <div>
        <img src={imgsix} />
      </div>
    </Carousel>
  );
};

export default Banner;