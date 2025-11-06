export const cart = [];

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
      quantity: 1
    });
    }

}