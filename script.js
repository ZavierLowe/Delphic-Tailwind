var menuCart = document.getElementById("menu-cart")
var menuBackground = document.getElementById("cart-bg")
var mobileMenu = document.getElementById("mobile-menu")


openCart = () =>{
   menuCart.classList.remove("right-[-450px]");
   menuCart.classList.add('right-0','mr-4', )
   menuBackground.classList.add('top-0','left-0','bottom-0','right-0','fixed','bg-black','opacity-70','z-[50]');
    
}

closeCart = () =>{
    menuCart.classList.remove("right-0","mr-4",);
	menuCart.classList.add("right-[-450px]");
    menuBackground.classList.remove(
			"top-0",
			"left-0",
			"bottom-0",
			"right-0",
			"fixed",
			"bg-black",
			"opacity-70",
			"z-[49]",
			
		);

}

closeMobileMenu = () =>{
    mobileMenu.classList.add()
    mobileMenu.classList.remove('fixed', 'top-0', 'left-0', 'w-[425px]', 'z-50', 'bg-[#FBF6F1]', 'flex', 'flex-col', 'space-y-5','duration-300')
    
}




// const saveCart = (cart) =>{

//     localStorage.setItem("cart",JSON.stringify(cart))

    

// }

 
    

// let shoppingCart = localStorage.setItem(cart,JSON.stringify(cart))

// let newItem = [{id:2,name:"bob"}]

// const moreItems = cart.push(newItem)

// **Summary of Closures and Callback Functions in the Add-to-Cart Logic**

// 1. **Dynamic Product Loading (`loadProducts`):**
//    - This function fetches product data and dynamically generates the HTML
//      for each product, including an "Add to Cart" button.
//    - Importantly, it attaches a `data-id` attribute to each button, linking it
//      to the specific product's ID.

// 2. **Event Listeners and Callback Functions:**
//    - Inside `loadProducts`, an event listener is attached to each "Add to Cart"
//      button, listening for "click" events.
//    - The second argument to `addEventListener` is a **callback function**. This
//      function is *not* executed immediately. Instead, it's stored and will
//      be executed *later* when the button is clicked.

// 3. **Closures and Access to `products`:**
//    - The callback function defined for the event listener is created *inside*
//      the `loadProducts` function. This forms a **closure**.
//    - Due to the closure, the callback function retains access to the `products`
//      array that was created within the scope of `loadProducts`, even after
//      `loadProducts` has finished executing.

// 4. **Identifying the Product in the Callback:**
//    - When an "Add to Cart" button is clicked, the callback function executes.
//    - It uses the `data-id` of the clicked button to find the corresponding
//      product object within the `products` array (which it can access due to
//      the closure).

// 5. **Passing the Product to `addToCart`:**
//    - The callback function then calls the `addToCart` function, which is
//      defined outside of `loadProducts` (in the global scope).
//    - The crucial point is that the callback function **passes the found
//      `product` object as an argument** to the `addToCart` function.

// 6. **`addToCart` Updates the Cart:**
//    - The `addToCart` function receives the `product` object as a parameter.
//    - It accesses the globally scoped `cart` array (likely initialized from
//      `localStorage`).
//    - It adds the received `product` to the `cart` array.
//    - Finally, it saves the updated `cart` back to `localStorage`.

// **In essence:**

// - **Callback functions** are used to handle asynchronous events (like button clicks)
//   by providing a function to be executed when the event occurs.
// - **Closures** are essential here because the callback function needs to access
//   the `products` array that was created in the `loadProducts` function's scope
//   to identify the correct product.
// - The `addToCart` function receives the specific product information not
//   because it inherently knows about the `products` array, but because the
//   callback function (within the closure) finds the product and explicitly
//   passes it as an argument.



//loading products dynamically from json data

async function loadProducts() {
    const response = await fetch("../data/products.json");
    const products = await response.json();
    const productContainer = document.getElementById("products");

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
			<img src=${product.image}>
            <p>${product.name} - $${product.price.toFixed(2)}</p>
            <button class="add-btn w-full h-[48px] bg-[#7D9AFF] mt-4 text-[#FBF6F1] font-normal uppercase cursor-pointer rounded-md hover:underline hover:bg-[#766623] duration-200" data-id="${product.id}"  id="addToCart2">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });
    
  

    

    // Attach event listeners to add buttons
    document.querySelectorAll(".add-btn").forEach(button => {
        button.addEventListener("click", () => {
            const product = products.find(p => p.id === parseInt(button.dataset.id));
            addToCart(product);
            console.log(product);
            
            
        });
    });

   
    
}
loadProducts()

let cart = JSON.parse(localStorage.getItem("cart")) || []


//Works because of closures, When a function is defined inside another function, it forms a closure. 
// This means the inner function (the event listener callback in this case) retains access to the variables of its outer (enclosing) function, 
// even after the outer function has finished executing.


function addToCart(product) {
    
   
    
        
        
        
    ; // Get cart or initialize as empty array
    cart.push(product); // Add new item
    localStorage.setItem("cart", JSON.stringify(cart)); // Save updated cart
    


}

// function initializeCart(){
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];

//     return cart
    
    

//  }

// function getCart () {
//     const cart = localStorage.getItem("cart") || [] 
//     return JSON.stringify(localStorage.getItem(cart) || [])
    
   
    
// }




// function addToCart() {
    
//     let productId = document.getElementById('addToCart2')
    
//     let selectedItem = productId.dataset.id

//     console.log(selectedItem);
    
    
    
//     let cart = JSON.parse(localStorage.getItem("cart")) || []; // Get cart or initialize as empty array
//     cart.push(selectedItem); // Add new item
//     localStorage.setItem("cart", JSON.stringify(cart)); // Save updated cart
    


// }





//Add a div with the outside classes
//while the cart drawer is open
// closeAll = () =>{
//     // var tag = document.createElement('div')
//     // tag.classList.add("h-screen w-screen fixed top-0 left-0");
//     // menuCart.lastChild.appendChild(tag)

//     // if (openCart === true){
//     //     closeCart()

//     // }
//     // else{
//     //     null
//     // }

//     menuCart.classList.remove("right-0");
// 		menuCart.classList.add("right-[-450px]");
        

// }

