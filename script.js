document.addEventListener("DOMContentLoaded", () => {
    //cart variables and actions
    const cartIcon = document.getElementById("cart"); //cart icon navbar
    const cartBox = document.getElementById("cart-box"); //cart box
    const cartEmpty = document.getElementById("cart-empty"); //what we see when cart is empty
    const cartProduct = document.getElementById("cart-products");//what we see when we have products in cart

    const addButton = document.getElementById("add-to-cart"); //add to cart button

    const productName = document.getElementById("product-name"); //Fall Limited Edition Sneakers

    const productImage = document.getElementById("cart-product-image"); //product image we see in cart
    const productDescription = document.getElementById("cart-product-description"); //product description we see in cart

    const deleteButton = document.getElementById("delete-product");//icon bin
    const checkoutButton = document.getElementById("checkout-button");//checkout button in cart
    const cartProductName = document.getElementById("cart-product-name");//product name we see in cart
    cartProductName.style.fontSize = "1.5rem";
    const cartProductPrice = document.getElementById("product-price");
    const price = document.getElementById("price");
    let productPrice = price.innerHTML;
    // productPrice.style.fontSize = "1.5rem";

    let cartProductNumber = document.getElementById("cart-product-number");
    cartProductNumber.style.display = "none";

    cartIcon.addEventListener("click", ()=>{
        cartBox.classList.toggle("hidden");
    })

    document.addEventListener("click", (e) =>{
        const isClickInside = cartBox.contains(e.target);
        const isToggled = cartIcon.contains(e.target);
        if(!isClickInside && !isToggled){
            cartBox.classList.add("hidden");
        }
    })



    //handling pictures in main page

    const smallPictures = document.querySelectorAll(".small-picture");
    let mainPicture = document.getElementById("main-picture");
    // const productImagesContainer = document.getElementById("product-images");

    smallPictures.forEach((picture) => {
        picture.addEventListener("click", () => {
            smallPictures.forEach(el => 
                el.classList.remove("is-selected"));

            picture.classList.add("is-selected"); 
            if(picture.classList.contains("is-selected")){
                let currentImage = picture.previousElementSibling;
                console.log(currentImage);
                mainPicture.src = currentImage.src;
            } 
        });
    });

    //quantity variables and actions
    const minus = document.getElementById("minus");
    const plus = document.getElementById("plus");
    const quantity = document.getElementById("total-quantity");

    let totQuantity = 0;
    Number(totQuantity);

    plus.addEventListener("click", ()=>{
        totQuantity ++;
        quantity.innerHTML = totQuantity;
    })

    minus.addEventListener("click", ()=>{
        totQuantity --;
        quantity.innerHTML = totQuantity
    })

    //Add to cart button
    addButton.addEventListener("click", ()=>{
        if(totQuantity > 0){
            cartEmpty.style.display = "none";
            addProductToCart()
        }
    })

    deleteButton.addEventListener("click", ()=>{
        cartEmpty.style.display = "flex";
        cartProduct.classList.add("hidden");
        checkoutButton.classList.add("hidden");
        quantity.innerHTML = 0;
        cartProductNumber.style.display = "none";
    })

    function addProductToCart() {
        cartProduct.classList.remove("hidden");
        checkoutButton.classList.remove("hidden");
        cartProductName.innerHTML = productName.innerHTML;
        productDescription.style.flexGrow = "3"
        cartProductPrice.style.fontSize = "1.5rem";
        cartProductPrice.innerHTML = "$ " + productPrice + " x " + totQuantity;
        let quantityOrdered = document.getElementById("price-and-quantity");
        // quantityOrdered.style.fontSize = "1.5rem";
        quantityOrdered.classList.add("bold");

        quantityOrdered.innerHTML = " $" + productPrice * totQuantity;
        cartProductNumber.style.display = "block";
        cartProductNumber.innerHTML = quantity.innerHTML;
        
    }

    //creating the lightbox

    const lightboxGallery = document.getElementById("lightbox-gallery");

    let lightboxContainer = document.createElement("div");
    lightboxContainer.classList.add("flex-column");
    lightboxContainer.style.zIndex = 1000;
    lightboxGallery.appendChild(lightboxContainer);
    lightboxContainer.classList.add("center")



    lightboxGallery.style.display = "none"

    // const body = document.getElementById("body");

    mainPicture.addEventListener("click", (e)=>{
        e.preventDefault();
        cartBox.classList.add("hidden");
        lightboxGallery.style.display = "flex";
        lightboxGallery.classList.remove("hidden");
        
    })
    const closeIcon = document.getElementById("icon-close");
    console.log(closeIcon)

    closeIcon.addEventListener("click", ()=>{
        lightboxGallery.style.display = "none";
    })

    const iconPrevious = document.getElementById("icon-previous");
    const iconNext = document.getElementById("icon-next");

    const lightboxSmallPictures = document.querySelectorAll(".lightbox-small-picture");
    let lightboxMainPicture = document.getElementById("lightbox-main-picture");

    lightboxSmallPictures.forEach((picture) => {
        picture.addEventListener("click", () => {
            lightboxSmallPictures.forEach(el => 
                el.classList.remove("is-selected"));
                iconPrevious.style.display = "block";
                iconNext.style.display = "block";

            picture.classList.add("is-selected"); 
            if(picture.classList.contains("is-selected")){
                let currentImage = picture.previousElementSibling;
                console.log(currentImage);
                console.log(lightboxMainPicture)
                lightboxMainPicture.src = currentImage.src;
            } 
        });
    });

    const bigPictures = document.querySelectorAll(".big-picture");
    console.log(bigPictures)

    for (let i = 0; i < bigPictures.length; i++) {
        let next = 0;
        iconNext.style.display = "block";
        iconNext.addEventListener("click", ()=>{
            next++;
            lightboxMainPicture.src = bigPictures[next].src;
            iconPrevious.style.display = "block";
            if(next === 3){
                iconNext.style.display = "none";
            }
            console.log(next)
        })
        iconPrevious.addEventListener("click", ()=>{
            next--;
            lightboxMainPicture.src = bigPictures[next].src;
            iconNext.style.display = "block";
            if(next === 0){
                iconPrevious.style.display = "none";
            }
            console.log(next)
        })  
    }
});