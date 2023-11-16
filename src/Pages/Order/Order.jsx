import BgCover from "../Shared/Cover/BgCover";
import orderfoodImg from "../../../src/assets/order/order-food.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {   useState } from "react";
import Usemenu from "../../hooks/Usemenu";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["Salads", "Pizza", "Soups", "dessert", "drinks"]
  const {category} = useParams();
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = Usemenu();
  // const [menu, setMenu] = useState([]);
  // useEffect(()=>{
  //   fetch("http://localhost:5000/menu")
  //   .then(response=>response.json())
  //   .then(data=>setMenu(data))
  // },[])
  console.log(menu);
  const drinks = menu.filter(item=> item.category === "drinks")
  const dessert = menu.filter(item=> item.category === "dessert")
  const pizza = menu.filter(item=> item.category === "pizza")
  const soup = menu.filter(item=> item.category === "soup")
  const salad = menu.filter(item=> item.category === "salad")
  return (
    <div className="">
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <BgCover img={orderfoodImg} bgTitle={"Order Food"}></BgCover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>salad</Tab>
          <Tab>pizza</Tab>
          <Tab>soups</Tab>
          <Tab>desserts</Tab>
          <Tab>drinks</Tab>
        </TabList>
        <TabPanel>
         <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel> 
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel> 
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>   
        <TabPanel> 
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>   
      </Tabs>
    </div>
  );
};

export default Order;

