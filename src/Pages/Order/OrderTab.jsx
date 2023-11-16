import OderFoodCard from "../Shared/OrderFoodCard/OderFoodCard";

const OrderTab = ({items}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 mb-20">
    {
      items.map(item=> <OderFoodCard 
        key={item._id} 
        item={item}></OderFoodCard>)
    }
  </div>
  );
};

export default OrderTab;