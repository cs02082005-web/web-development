import { useParams } from "react-router-dom";
import { products } from "../Data/product";
import { useCart } from "../Context/CartContext";

function Productdetails() {

  const { id } = useParams();

  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  return (
    <div className="details">

      <img src={product.image} alt="" />

      <div>
        <h1>{product.name}</h1>

        <h2>${product.price}</h2>

        <p>{product.description}</p>

        <button
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>
      </div>

    </div>
  );
}

export default Productdetails;