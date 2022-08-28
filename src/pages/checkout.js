import {addToCartBtn, clearCard, clearCardBtn, viewCardProducts, viewProducts} from "../view";
import {addToCard, cardList, carryChangeCountProduct} from "../model";
import "./checkout.scss"

document.addEventListener('DOMContentLoaded', () => {
    const count = window.localStorage.getItem('count') || 0
    const allItems = window.localStorage.getItem('allItems') || 0
    viewCardProducts(cardList, count, allItems)
    console.log(cardList)
    viewProducts(carryChangeCountProduct, 'number', 'input')
})

addToCartBtn && addToCartBtn.addEventListener('click', () => addToCard(cardList, viewCardProducts))
clearCardBtn && clearCardBtn.addEventListener('click', clearCard)
