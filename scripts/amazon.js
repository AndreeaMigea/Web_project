

//we add products in products.js file, and include here
// const products = 
// [
//   { //use an object because it stores multple values
//     image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
//     name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
//     rating: // 2 values into an object because are rlated to each other
//     {
//       stars: 4.5,
//       count: 87
//     },  
//     priceCents: 1090 //1 dolar=100cents,
//   },

//   { //use another object for the second product from page (basketball)
//     image: 'images/products/intermediate-composite-basketball.jpg',
//     name: 'Intermediate Size Basketball',
//     rating:
//     {
//       stars: 4,
//       count: 127
//     },
//     priceCents: 2095
//   },

//   {
//     image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
//     name: 'Adults Plain Cotton T-Shirt - 2 Pack',
//     rating:
//     {
//       stars: 4.5,
//       count: 56
//     },
//     priceCents: 799
//   },

//   {
//     image:'images/products/black-2-slot-toaster.jpg',
//     name: '2 Slot Toaster - Black',
//     rating:
//     {
//       stars: 5,
//       count: 2197
//     },
//     priceCents: 1899
//   }
// ]; 

let productsHTML = '';

products.forEach((product) => 
{
  //if we put the 1 1 in one variable, it will create three html
  //so we put it in one html and add the variables inside
  productsHTML += `
    <div class="products-grid">
          <div class="product-container">
            <div class="product-image-container">
              <img class="product-image"
                src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
              ${product.name}
            </div>

            <div class="product-rating-container">
              <img class="product-rating-stars"
                src="images/ratings/rating-${product.rating.stars * 10}.png">
              <div class="product-rating-count link-primary">
                ${product.rating.count}
              </div>
            </div>

            <div class="product-price">
              $${(product.priceCents / 100).toFixed(2)}
            </div>

            <div class="product-quantity-container">
              <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
              <img src="images/icons/checkmark.png">
              Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart"
            data-product-id="${product.id}">
              Add to Cart
            </button>
          </div>`;
});

console.log(productsHTML);
//put the html on the page -using dom - put in html code where is the html for this divs (.js-products-grid) in html file
//in js file we use the dom by queryselector to find the div with the class js-products
document.querySelector('.js-products-grid').innerHTML = productsHTML; //this means that will look for the js-products-grid and will take the element and put in javascript
// .innerHTML means that we want to change the html inside that element





//for line 103 wiht button- we add an eventListener to this button to make it work
//first add class js-add-to-cart to the button 
//then use dom to add an eventlistener to this button

//document.querySelectorAll('.js-add-to-cart') will give us a list of all the addotcart button 
//then we loop through each of the buttons using forEach

// wiht data attribute with data-product-name="${product.name}"> we know the name of the clicked product

//how to add the product to the cart -> cart array in new file 
//instead of usign name of the product use id ->change productName to productId


document.querySelectorAll('.js-add-to-cart').forEach((button) => 
{
  button.addEventListener('click', () => {
    //add to the cart
    //const productName = button.dataset.productName; //dataset is an object that contains all the data attributes of the button
    const productId = button.dataset.productId

    let matchingItem;
    cart.forEach((item) => //we figure it out if a product is i the cart
    {
      if(productId === item.productId)
      {
        matchingItem = item;
      }
    });

    if(matchingItem) //it is a truthy var, because if we enter in if above, it is populated,if not is empty
    {
      matchingItem.quantity +=1;
    }
    else //product is not in the cart
    { //add to the cart
      cart.push({
      productId: productId,
      quantity: 1
    });
    }

    let cartQuantity = 0;


    cart.forEach((item) => //loop trough each obj of the cart
    {
      cartQuantity += item.quantity;
      console.log(item.quantity);

    }
    );


    document.querySelector('.js-cart-quantity')
      .innerHTML = cartQuantity;

    console.log(cartQuantity);
    console.log(cart);
  });
});




