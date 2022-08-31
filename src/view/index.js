'use strict'

import {getCookie} from "../index";

export const newProductBtn = document.querySelector('.addNewBtn')
export const NewNameProduct = document.querySelector('#create-new-container .add-product-input')
const productsList = document.querySelector('.products-list > div')
const countItems = document.querySelector('#countItems')
const totalItems = document.querySelector('#totalItems')
const totalAmount = document.querySelector('#total-amount')
export const addToCartBtn = document.querySelector('.add-to-cart-btn')
const cartList = document.querySelector('.cart-list > div')
export const clearCardBtn = document.querySelector('.clear-cart')
const addedItems = document.querySelector('.added-items')
export const newProductName = document.querySelector('#create-new-container .add-product-input')
export const newProductPrice = document.querySelector('#create-new-container .add-price-input')
export const addedProducts = document.querySelector('#added-products')
export const addImage = document.querySelector('#add-image')
export const imagesForm = document.querySelector('#create-new-container .images')


export const viewProducts = (carriedCallback, inputType, inputEvent) => {
    const array = getCookie('prodList') || []
    productsList.innerHTML = ''
    if (NewNameProduct) NewNameProduct.value = ''
    if (newProductBtn) newProductBtn.setAttribute('disabled', 'true')
    array.forEach((product, index) => {
        const productElement = document.createElement('div')
        const productName = document.createElement('span')
        const productPrice = document.createElement('span')
        productName.setAttribute('class', 'product-name')
        productPrice.setAttribute('class', 'product-price')
        const productInput = document.createElement('input')
        const currency = document.createElement('span')
        productInput.setAttribute('class', 'item-count')
        productName.innerText = product.name
        productPrice.innerText = product.price
        productInput.setAttribute('type', inputType)
        productInput.value = product.count
        const changeCurrentProduct = carriedCallback(index)
        productInput.addEventListener(inputEvent, (event) => changeCurrentProduct(event.target))
        productElement.append(productName, productInput, productPrice, currency, createGallery(product, index))
        productsList.prepend(productElement)
    })
    console.log(array)
}

const createGallery = (product, index) => {
    const container = document.createElement('div')
    container.setAttribute('class', 'img-container')
    const gallery = document.createElement('div')
    gallery.setAttribute('id', 'gallery_' + index)
    const backBtn = document.createElement('button')
    window['activeImg_' + index] = 0
    container.append(gallery)


    backBtn.setAttribute('id', 'back_' + index)
    backBtn.innerText = 'back'
    const forwardBtn = document.createElement('button')
    forwardBtn.setAttribute('id', 'forward_' + index)
    forwardBtn.innerText = 'forward'
    product.imageList.forEach((item, key) => {
        const imgTag = document.createElement('img')
        imgTag.setAttribute('src', item)
        if (key === 0) {
            imgTag.classList.add('active')
        }
        gallery.append(imgTag)
    })

    backBtn.addEventListener('click', () => {
        const img = document.querySelectorAll('#gallery_' + index + ' img')
        // console.log(img[window['activeImg_' + index]], window['activeImg_' + index], img)
        img[window['activeImg_' + index]].classList.remove('active')

        if (window['activeImg_' + index] === 0) {
            img[img.length - 1].classList.add('active')
            window['activeImg_' + index] = img.length - 1
        } else {
            img[window['activeImg_' + index] - 1].classList.add('active')
            window['activeImg_' + index]--
        }
    })

    forwardBtn.addEventListener('click', () => {
        const img = document.querySelectorAll('#gallery_' + index + ' img')
        console.log(img[window['activeImg_' + index]], window['activeImg_' + index], img)
        img[window['activeImg_' + index]].classList.remove('active')
        if (window['activeImg_' + index] === img.length - 1) {
            img[0].classList.add('active')
            window['activeImg_' + index] = 0
        } else {
            img[window['activeImg_' + index] + 1].classList.add('active')
            window['activeImg_' + index]++
        }
    })

    container.append(gallery, backBtn, forwardBtn)
    return container
}

export const clearInput = () => {
    NewNameProduct.textContent = ''
    newProductPrice.textContent = ''
}

export const showBtn = (event) => {
    if (event.target.value) {
        newProductBtn.removeAttribute('disabled')
    } else {
        newProductBtn.setAttribute('disabled', 'true')
    }
}

export const viewCardProducts = (array, count, allItems, amount, imagesFormField) => {
    cartList.innerHTML = ''
    array.forEach((product) => {
        const productElement = document.createElement('div')
        const productName = document.createElement('span')
        const productInput = document.createElement('input')
        const productPrice = document.createElement('span')
        const currency = document.createElement('span')
        productPrice.innerText = product.price
        currency.innerText = ' Rub'
        // productName.innerText = newproduct.price
        console.log(productPrice)
        productInput.value = product.count
        console.log(imagesFormField)
        productElement.append(productName, productInput, productPrice, currency, imagesFormField)
        cartList.prepend(productElement)
    })
    const prodListInputs = document.querySelectorAll('.products-list input')
    prodListInputs.forEach((input) => {
        input.value = 0
    })
    countItems.innerText = count
    totalItems.innerText = allItems
    totalAmount.innerText = amount
    console.log(allItems)
}

export const clearCard = () => {
    addedItems.innerHTML = ''
    countItems.innerText = 0
    totalItems.innerText = 0
    window.localStorage.removeItem('count')
    window.localStorage.removeItem('allItems')
    window.localStorage.removeItem('cardList')
    console.log(addedItems)
}