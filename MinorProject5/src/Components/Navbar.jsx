import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function Navbar() {
  const { cart } = useCart();

  return (
    <div className="navbar">
      <h2>Mobile Store</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/cart"> Cart ({cart.length}) </Link>
      </div>
    </div>
  );
}

export default Navbar;