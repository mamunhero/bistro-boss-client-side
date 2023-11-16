import { Helmet } from "react-helmet-async";
import BgCover from "../Shared/Cover/BgCover";
import menuImg from "../../../src/assets/menu/banner3.jpg";
import dessertImg from "../../../src/assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../src/assets/menu/pizza-bg.jpg";
import soupImg from "../../../src/assets/menu/soup-bg.jpg";
import saladImg from "../../../src/assets/menu/salad-bg.jpg"
import Usemenu from './../../hooks/Usemenu';
import SectionTitle from './../../Component/SectionTitle/SectionTitle';
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = Usemenu();
  // const [menu, setMenu] = useState([]);
  // useEffect(()=>{
  //   fetch("http://localhost:5000/menu")
  //   .then(response=>response.json())
  //   .then(data=>setMenu(data))
  // },[])
  const offered = menu.filter(item=> item.category === "offered")
  const dessert = menu.filter(item=> item.category === "dessert")
  const pizza = menu.filter(item=> item.category === "pizza")
  const soup = menu.filter(item=> item.category === "soup")
  const salad = menu.filter(item=> item.category === "salad")
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <BgCover bgImg={menuImg} bgTitle={"our menu"}
      bgText={"Would you like to try a dish?"}></BgCover>
      <SectionTitle subHeading={"don't miss"}
      heading={"today's offer"}></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory items={dessert} bgTitle={"dessert"} coverImg={dessertImg}></MenuCategory>
      <MenuCategory items={pizza} bgTitle={"Pizza"} coverImg={pizzaImg}></MenuCategory>
      <MenuCategory items={soup} bgTitle={"Soups"} coverImg={soupImg}></MenuCategory>
      <MenuCategory items={salad} bgTitle={"Salads"} coverImg={saladImg}></MenuCategory>
    </div>
  );
};

export default Menu;

