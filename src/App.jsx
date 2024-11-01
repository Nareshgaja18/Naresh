import { Link, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import AboutUs from "./AboutUs";
import Cart from "./Cart";
import ContactUS from "./ContactUs";
import Home from "./Home";
import NonVeg from "./NonVeg";
import PurchaseHistory from "./PurchaseHistory.jsx";
import Veg from "./Veg.jsx";
import './App.css';
import { useSelector } from "react-redux";
import Add from "./Add.jsx";
import Average from "./Average.jsx";
import Calculator from "./Calculator.jsx";
import { FaCarrot, FaDrumstickBite, FaHistory, FaHome, FaInfoCircle, FaPhone, FaShoppingCart } from "react-icons/fa";
import GoogleLoginComponent from "./GoogleLoginComponent.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ReactFacebookLogin from "react-facebook-login";


function App()
{

  const cart=useSelector((state)=>state.cart)

  const totalItems=cart.reduce((sum,item)=>sum+item.quantity,0)
  return(
    <>
    <h1 style={{color:'goldenrod'}}>This is Main Component</h1>
 <div>  
  <ReactFacebookLogin appId="8579868722091795" />
<GoogleOAuthProvider clientId="902967193185-vunjmi1el4fhl2ao965n6dc0r5u4h36r.apps.googleusercontent.com">
  <GoogleLoginComponent/>
  </GoogleOAuthProvider>
  </div>
  

<Router>
  <nav>
<Link to="/"> <FaHome /> Home</Link>



<Link to="/veg"><FaCarrot /> Veg items</Link>
<Link to="/nonVeg">< FaDrumstickBite /> NonVeg items</Link>
<Link to="/cart"> <FaShoppingCart /> Cart({totalItems})</Link>
<Link to="/store"><FaHistory />  PurchaseHistory</Link>
<Link to="/aboutus"><FaInfoCircle />  AboutUs</Link>
<Link to="/contactus">  < FaPhone /> ContactUs</Link>
</nav>

<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/veg" element={<Veg/>}/>
<Route path="/nonVeg" element={<NonVeg/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/store" element={<PurchaseHistory/>}/>
<Route path="/aboutus" element={<AboutUs/>}/>
<Route path="/contactus" element={<ContactUS/>}/>
</Routes>
</Router>

{/* <hr />
<hr />
<hr />
<hr />
<hr />
<Add/>
<hr />
<hr />
<hr />
<hr />
<hr />
<Average/>
<hr />
<hr />
<hr />
<hr />
<hr />
<Calculator/> */}
</>
  )
}
export default App;