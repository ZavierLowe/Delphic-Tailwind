var menuCart = document.getElementById("menu-cart")
var menuBackground = document.getElementById("cart-bg")


openCart = () =>{
   menuCart.classList.remove("right-[-450px]");
   menuCart.classList.add('right-0')
   menuBackground.classList.add('top-0','left-0','bottom-0','right-0','fixed','bg-black','opacity-70','z-[49]');
    
}

closeCart = () =>{
    menuCart.classList.remove("right-0");
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

