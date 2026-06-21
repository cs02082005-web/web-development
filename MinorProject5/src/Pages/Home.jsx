import { useState } from "react";
import { products } from "../Data/product";
import ProductCard from "../Components/ProductCard";

function Home() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="hero">
        <h1>Latest Smartphones</h1>
        <p>Best Deals Available</p>

        <input
          type="text"
          placeholder="Search Mobile..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-box"
        />
      </div>

      <h2>Featured Phones</h2>

      <div className="grid">
        {filteredProducts.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;