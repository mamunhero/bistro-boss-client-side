import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Provider/AuthProvider';
import useAxiosSecure, {  } from './../../../hooks/useAxiosSecure';
import useCart from '../../../hooks/useCart';


const OderFoodCard = ({item}) => {
  const {_id, name, image, price, recipe } = item || {}
  const {user} = useContext(AuthContext)
  const navigate = useNavigate();
  const locataion = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const handelAddToCart = () => {
    // console.log(food, user.email);
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email:user.email,
        name,
        image,
        price
      }
      // fetch("http://localhost:5000/carts", {
      //   method:"POST",
      //   headers: {
      //     "content-type" : "application/json"
      //   },
      //   body: JSON.stringify(cartItem)
      // })
      // .then(response=>response.json())
      // .then(data=>{
      //   console.log(data);
      //   if (data.insertedId) {
      //     Swal.fire({
      //       title: "Good job!",
      //       text: "You clicked the button!",
      //       icon: "success"
      //     });
      //   }
      // })
      axiosSecure.post("/carts", cartItem)
      .then(res=> {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: `${name} added to your cart`,
            icon: "success"
          });
          refetch()
        }
      })
    }
    else {
      Swal.fire({
        title: "You are not Login?",
        text: "Please login add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", {state:{from:locataion}})
        }
      });
    }
  }
  
  return (
    <div className="card  bg-base-100 shadow-xl">
  <figure>
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <p className='bg-slate-900 font-bold text-white absolute right-0 mt-4 mr-4 px-5'>$ {price}</p>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
      <button onClick={ handelAddToCart} className="btn btn-outline border-0 border-b-2 mt-4 text-[#BB8506] bg-slate-100  uppercase">Add To Cart</button>
    </div>
    {/* <div className="card-actions">
      <Link to={`/menu/${_id}`}>
        <button  className="btn btn-outline border-0 border-b-2 mt-4 text-[#BB8506] bg-slate-100  uppercase">Add To Cart</button>
      </Link>
    </div> */}
  </div>
</div>
  );
};

export default OderFoodCard;

