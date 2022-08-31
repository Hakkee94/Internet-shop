import './gallery.scss'

const imgList = []
let activeImg = 0

const addImage = document.querySelector('#add-image')
const galleryForm = document.querySelector('.gallery-form')
const addToGallery = document.querySelector('.add-to-gallery')
const gallery = document.querySelector('#gallery')
const back = document.querySelector('#back')
const forward = document.querySelector('#forward')


const handleNewImageField = () => {
    const imgInput = document.createElement('input')
    const inputList = document.querySelectorAll('input')
    imgInput.setAttribute('name', 'img_' + inputList.length)
    galleryForm.prepend(imgInput)
}

const handleAddImages = (event) => {
    imgList.splice(0, imgList.length)
    event.preventDefault()
    console.log(imgList)
    for (let i = 0; i < event.path[0].length - 2; i++) {
        imgList.push(event.path[0][i].value)
    }

    handleCreateGallery()
    return false
}

const handleCreateGallery = () => {
    gallery.innerHTML = ''

    imgList.forEach((item, index) => {

        const imgTag = document.createElement('img')
        imgTag.setAttribute('src', item)
        if (index === 0) {
            imgTag.classList.add('active')
        }
        gallery.append(imgTag)
    })

}


addImage.addEventListener('click', handleNewImageField)

galleryForm.addEventListener('submit', handleAddImages)

// back.addEventListener('click', () => {
//     const img = document.querySelectorAll('img')
//     img[activeImg].classList.remove('active')
//
//     if (activeImg === 0) {
//         img[img.length - 1].classList.add('active')
//         activeImg = img.length - 1
//     } else {
//         img[activeImg - 1].classList.add('active')
//         activeImg--
//     }
// })

// forward.addEventListener('click', () => {
//     const img = document.querySelectorAll('img')
//     img[activeImg].classList.remove('active')
//
//     if (activeImg === 0) {
//         img[img.length - 1].classList.add('active')
//         activeImg = img.length - 1
//     } else {
//         img[activeImg - 1].classList.add('active')
//         activeImg--
//     }
// })

// back.addEventListener('click', () => {
//     const img = document.querySelectorAll('img')
//     handleAddImages(activeImg - 1)
// })

// forward.addEventListener('click', () => {
//     const img = document.querySelectorAll('img')
//     handleAddImages(activeImg + 1)
// })