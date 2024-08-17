//quais ações meu carrinho pode fazer?

//casos de uso:
//--> adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

//--> calcular o total 
async function calculateTotal(userCart) {
    console.log("\nShopee Cart TOTAL IS: ");
    const result =  userCart.reduce((total, item) => total + item.subtotal(), 0);    
    console.log(`Total ${result}`);
}

//--> deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        userCart.splice(index, 1); //remove 1 item a partir do elemento encontrado
    }
}

//--> remover um item - diminui a quantidade de um item 
async function removeItem(userCart, item) {

    //enc encontrar o índice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    //Caso nao encontrado:
    if(indexFound == -1){
        console.log("Item não encontrado");
        return;
    }

    //Caso item > 1, remover 1 quantidade. 
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
        return
    }

    //Caso item = 1, deletar item
    if(userCart[indexFound].quantity = 1){
        userCart.splice(indexFound, 1);
        return;
    }

}

async function displayCart(userCart) {
    console.log("\nShopee cart list:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - ${item.price} | ${item.quantity
            }x | Subtotal = ${item.subtotal()}`);
    } );
}


export { addItem, calculateTotal, deleteItem, removeItem, displayCart };