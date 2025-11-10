export let cart = JSON.parse(localStorage.getItem('cart'));
//use parse because localstorage use only strings, so we need to convert back to an array

//give the cart a default value (first time the cart is null)
if(!cart)
{
  cart = [
  {
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionsId: '1'
  },
  {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1,
      deliveryOptionsId: '2'
  }
  ];
}


function saveToStorage()
{
  localStorage.setItem('cart', JSON.stringify(cart));
}


export function addToCart(productId)
{
  let matchingItem;
    cart.forEach((cartItem) => //we figure it out if a product is i the cart
    {
      if(productId === cartItem.productId)
      {
        matchingItem = cartItem;
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
      quantity: 1,
      deliveryOptionsId:'1'
    });
    }
    saveToStorage();

}


export function removeFromCart(productId)
{
  const newCart = [];

  cart.forEach((cartItem) =>
  {
    if(cartItem.productId != productId)
    {
      newCart.push(cartItem);
    }
  });
  cart = newCart;

  saveToStorage();
}

