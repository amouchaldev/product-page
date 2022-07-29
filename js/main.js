function switchImg() {
    const productImages = document.querySelectorAll('#product-img .product-img-list li img')
    productImages.forEach(img => {
        img.addEventListener('click', () => {
            img.parentElement.parentElement.parentElement.querySelector('.show img').src = img.src
            productImages.forEach(img => img.classList.remove('active'))
            img.classList.add('active')
        })
    })
}
switchImg() 