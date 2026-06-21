import { useCart } from "../Context/CartContext";

function Cart() {


  const { cart, removeFromCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );


  return (

    
    <div>

      <h1>My Cart</h1>

      {cart.map((item, index) => (
        <div key={index} className="cart-item">

          <img
            src={item.image}
            alt=""
            width="100"
          />

          <div>
            <h3>{item.name}</h3>
            <p>${item.price}</p>

            <button
  onClick={() => removeFromCart(index)}>
  Remove
</button>
          </div>

        </div>
      ))}

      <h2>Total : ${total}</h2>

      <h2>Total Price : ₹{total}</h2>

    </div>
  );
}

export default Cart;