import { Link } from "react-router-dom";
import BgCover from "../../Shared/Cover/BgCover";
import MenuInfo from "../../Shared/PopularMenu/MenuInfo";

const MenuCategory = ({items,bgTitle, coverImg}) => {
  return (
    <div className="pt-8">
      {bgTitle && <BgCover img={coverImg} bgTitle={bgTitle}></BgCover>}
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        {
          items.map(menuItem=> 
          <MenuInfo
            key={menuItem._id}
            menuItem={menuItem}
          ></MenuInfo>)
        }
      </div>
      <Link to={`/order/${bgTitle}`}>
         <button className="btn btn-outline border-0 border-b-2 mt-4 ">Order Now</button>
      </Link>
    </div>
  );
};

export default MenuCategory;

