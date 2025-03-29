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


let shoppingCart = []

localStorage.setItem(shoppingCart,JSON.stringify([]))

const addToCart = () =>{
	let sampleItem = document.getElementById('sample')
	document.querySelector('button')
	
	


}

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
            <button class="add-btn w-[175px] h-[60px] bg-[#7D9AFF] mt-4 text-[#FBF6F1] font-normal uppercase cursor-pointer rounded-full hover:underline hover:bg-[#766623] duration-200  data-id="${product.id}">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });

    // Attach event listeners to add buttons
    document.querySelectorAll(".add-btn").forEach(button => {
        button.addEventListener("click", () => {
            const product = products.find(p => p.id === parseInt(button.dataset.id));
            addToCart(product);
        });
    });
}

loadProducts()


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

