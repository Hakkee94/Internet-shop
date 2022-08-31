'use strict'
import {addCookie, getCookie, deleteCookie} from "../index";
import {viewCardProducts} from "../view";

// export let prodList = (getCookie('prodList') && JSON.parse(getCookie("prodList"))) || []
export let cardList = (window.localStorage.getItem("cardList") && JSON.parse(window.localStorage.getItem("cardList"))) || []
export const deleteCatalogProducts = document.querySelector('#delete-product')
// export const prodListUpdate = (newData) => prodList = newData


export const addItem = (name, price, renderElements) => {
    const imagesFormField = document.querySelectorAll('#create-new-container .images input')
    const array = getCookie('prodList') || []
    const count = 0
    const checked = false
    const imageList = [...imagesFormField].map(element => element.value)
    console.log(imagesFormField)

    const newProduct = {name, count, price, checked, imageList}
    array.push(newProduct)
    console.log(array)
    addCookie('prodList', JSON.stringify(array))
    renderElements(carryChooseProduct, 'checkbox', 'change')
}

export const deleteCurrentProduct = (renderElements) => {
    const array = getCookie('prodList') || []
    const filterResult = array.filter((item) => {
        if (item.checked === false) {
            return true
        }
        return false
    })
    addCookie('prodList', JSON.stringify(filterResult))
    renderElements(carryChooseProduct, 'checkbox', 'change')
    console.log(array)
}


export const addToCard = (array, renderCard) => {
    const prodList = getCookie('prodList') || []
    let countElements = array.length
    prodList.map((product) => {
        if (product.count > 0) {
            array.map((cartProduct) => {
                if (cartProduct.name === product.name) {
                    cartProduct.count = Number(cartProduct.count) + Number(product.count)
                }
            })

            if (!array.find(f => f.name === product.name)) {
                const newItemCard = {name: product.name, count: product.count, price: product.price}
                console.log(newItemCard)
                countElements = array.push(newItemCard)
            }
        }

    })
    const countReducer = (previousValue, product) => Number(previousValue) + Number(product.count)
    const allItems = array.reduce(countReducer, 0)

    const amountReducer = (previousValue, product) => Number(previousValue) + (Number(product.count) * Number(product.price))
    const totalAmount = array.reduce(amountReducer, 0)

    renderCard(array, countElements, allItems, totalAmount)
    window.localStorage.setItem('cardList', JSON.stringify(array))
    window.localStorage.setItem('count', countElements)
    window.localStorage.setItem('allItems', allItems)
    window.localStorage.setItem('totalAmount', totalAmount)
}

export const handleChangeCountProduct = (index, count) => {
    const array = getCookie('prodList') || []
    const newProdList = JSON.stringify(array.map((item, key) => {
        if (key === index) {
            item.count = count.value
        }
        return item
    }))
    addCookie('prodList', newProdList)
}

export const handleChooseProduct = (index, check) => {
    const array = getCookie('prodList') || []
    const newProdList = JSON.stringify(array.map((item, key) => {
        if (key === index) {
            item.checked = check.checked
        }
        return item
    }))
    addCookie('prodList', newProdList)
}

export const carryChangeProduct = (fun) => {
    return (index) => {
        return (field) => {
            return fun(index, field)
        }
    }
}

export const carryChangeCountProduct = carryChangeProduct(handleChangeCountProduct)
export const carryChooseProduct = carryChangeProduct(handleChooseProduct)