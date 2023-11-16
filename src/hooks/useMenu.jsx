import { useEffect, useState } from "react";

const Usemenu = () => {
 const [menu, setMenu] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 useEffect(()=> {
  fetch("http://localhost:5000/menu")
  .then(response=> response.json())
  .then(data=> {
    setMenu(data);
    setIsLoading(false)
  })
 },[])
 return [menu, isLoading]
};

export default Usemenu;
