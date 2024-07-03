document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.cta-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.parentElement.querySelector('.product-name').innerText;
            const productPrice = this.parentElement.querySelector('.product-price').innerText;
            console.log(Added to cart: ${productName} - ${productPrice});
            
        });
    });

    const productDetails = document.querySelectorAll('.product-detail');

    productDetails.forEach(product => {
        product.addEventListener('mouseenter', function() {
            this.querySelector('.additional-details').style.display = 'block';
        });
        product.addEventListener('mouseleave', function() {
            this.querySelector('.additional-details').style.display = 'none';
        });
    });
});