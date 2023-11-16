import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import Usemenu from "../../../hooks/Usemenu";
import MenuInfo from "../../Shared/PopularMenu/MenuInfo";



const Pmenu = () => {
  const [menu] = Usemenu();
  const popular = menu.filter(item=> item.category === "popular")
  // const [menu, setMenu] = useState([]);
  // useEffect(()=>{
  //   fetch("http://localhost:5000/menu")
  //   .then(response=>response.json())
  //   .then(data=>{
  //     const popularItem = data.filter(item=> item.category === "popular")
  //     setMenu(popularItem)
  //   })
  // },[])
  return (
    <section className="mb-12">
      <SectionTitle 
       subHeading={"Check it out"}
       heading={"popular menu"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {
          popular.map(menuItem=> 
          <MenuInfo 
            key={menuItem._id}
            menuItem={menuItem}
          ></MenuInfo>)
        }
      </div>
    </section>
  );
};

export default Pmenu;
