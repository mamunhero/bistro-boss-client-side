import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";
const Navbar = () => {
  const {user, logout} = useContext(AuthContext)
  const handleLogout = () => {
    logout()
    .then(()=>{})
    .catch(error=> console.log(error))
  }
  const [cart] = useCart();
  console.log(cart);
  const navItem = 
  <>
     <li><Link to="/">HOME</Link></li>
     <li><a>CONTACT us</a></li>
     <li><Link to="/dashboard">DASHBOARD</Link></li>
     <li><Link to="/menu">Our Menu</Link></li>
     <li><Link to="/order/salad">Order Food</Link></li>
     <li><a>Our Shop</a></li>
     <li><Link>
          <button className="btn">
            <FaShoppingCart className="mr-2"></FaShoppingCart>
            <div className="badge badge-secondary">+{cart.length}</div>
        </button>
     </Link></li>
     {
      user ? 
      <>
        <li><button onClick={handleLogout} className="btn btn-ghost btn-sm">LogOut</button></li>
      </>
      :
      <>
        <li><Link to="/login">Login</Link></li>
      </>
     }
  </>
  return (
    <div>
      <div className="navbar fixed z-10 bg-black opacity-30 max-w-6xl text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navItem}
      </ul>
    </div>
    <a>BISTRO BOSS</a>
    <a>Restaurant</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItem}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    </div>
  );
};

export default Navbar;
