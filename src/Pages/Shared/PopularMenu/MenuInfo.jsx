
const MenuInfo = ({menuItem}) => {
  const {name, image, price, recipe } = menuItem || {}
  return (
    <div className="flex  space-x-2">
      <img style={{borderRadius: "0 200px 200px 200px"}} className="w-[120px] h-[104px]" src={image} alt="" />
      <div>
        <h3 className="text-black text-xl uppercase">{name}-------------</h3>
        <p className="text-[#737373] text-base">{recipe}</p>
      </div>
      <p className="text-yellow-600 text-xl">${price}</p>
    </div>
  );
};

export default MenuInfo;