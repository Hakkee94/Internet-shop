import {
    newProductPrice,
    clearInput,
    NewNameProduct,
    newProductBtn,
    newProductName,
    showBtn,
    viewProducts,
    addImage,
    imagesForm,
} from "../view";
import {deleteCatalogProducts, deleteCurrentProduct, addItem, carryChooseProduct} from "../model";
import './catalog.scss'

const handleNewImageField = () => {
    const imgInput = document.createElement('input')
    const inputList = document.querySelectorAll('.images input')
    imgInput.setAttribute('name', 'img_' + inputList.length)
    imgInput.setAttribute('placeholder', 'add img ' + (inputList.length + 1))
    imagesForm.append(imgInput)
    // console.log(inputList[0].value)
    console.log(imgInput)

}

document.addEventListener('DOMContentLoaded', () => {
    viewProducts(carryChooseProduct, 'checkbox', 'change')
})

NewNameProduct && NewNameProduct.addEventListener('input', showBtn)
newProductBtn && newProductBtn.addEventListener('click', () => addItem(newProductName.value, newProductPrice.value, viewProducts))
newProductBtn && newProductBtn.addEventListener('click', clearInput)
deleteCatalogProducts.addEventListener('click', () => deleteCurrentProduct(viewProducts))
addImage.addEventListener('click', handleNewImageField)