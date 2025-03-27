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

