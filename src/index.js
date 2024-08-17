import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Cart!");

//criando 2 itens no carrinho
const item1 = await createItem("hotweels ferrari", 20.99, 1);
const item2 = await createItem("hotweels lamborghini", 39.99, 3);

//add item ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);


//deletar o item 2
//await cartService.deleteItem(myCart, item2.name)
//deletar o item 1
//await cartService.deleteItem(myCart, item1.name)

//console.log(item2.subtotal());
await cartService.calculateTotal(myCart);