const products = [
{
    name:"Smart Watch",
    price:"₹2999",
    image:"https://images.pexels.com/photos/18259150/pexels-photo-18259150.jpeg"
},
{
    name:"Smart Phone",
    price:"₹19999",
    image:"https://images.pexels.com/photos/17249214/pexels-photo-17249214.jpeg"
},
{
    name:"Wireless Earbuds",
    price:"₹2499",
    image:"https://images.pexels.com/photos/33936400/pexels-photo-33936400.jpeg"
},
{
    name:"Bluetooth Headset",
    price:"₹1499",
    image:"https://images.pexels.com/photos/35235991/pexels-photo-35235991.jpeg"
}
];

const productContainer =
document.getElementById("products");

function displayProducts(data){

    productContainer.innerHTML="";

    data.forEach(product=>{

        const card=document.createElement("div");

        card.classList.add("card");

        card.innerHTML=`
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button class="buy-btn">Buy Now</button>
        `;

        productContainer.appendChild(card);
    });
}

displayProducts(products);

document.getElementById("heroBtn")
.addEventListener("click",function(){

    this.innerText="Added to Cart";

});

document.getElementById("search")
.addEventListener("keyup",function(){

    let value=this.value.toLowerCase();

    let filtered=products.filter(product=>
        product.name.toLowerCase().includes(value)
    );

    displayProducts(filtered);

});

document.getElementById("darkMode")
.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

});

document.addEventListener("click",function(e){

    if(e.target.classList.contains("buy-btn")){

        alert("Product Added Successfully!");

    }

});