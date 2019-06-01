var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var rand = Math.floor(Math.random() * 100);
 var obj = {itemName: item, itemPrice: rand};
 var arr = getCart();
 arr.push(obj);
 
 if(setCart(arr)){
   return `${item} has been added to your cart.`;
 }
}

function viewCart() {
  // write your code here
  var arr = getCart();
  
  if(arr.length === 0){
    return `Your shopping cart is empty.`;
  }else{
    var str = `In your cart, you have`;
    for (let i = 0; i < arr.length; i++){
      if (i < arr.length - 2){
        str += ` ${arr[i].itemName} at $${arr[i].itemPrice},`;
      }else if (i === arr.length - 2){
        str += ` ${arr[i].itemName} at $${arr[i].itemPrice}, and`;
      }else {
        str += ` ${arr[i].itemName} at $${arr[i].itemPrice}.`;
      }
    }
    return str;
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
