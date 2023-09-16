
// ============= WORKSHOP DOM - BASIC DHOPPING CART =====================

// Delete a whole row
const Btn = document.getElementById('deleteRowOne')
Btn.addEventListener('click', async(e) => {
    e.preventDefault()
    let rowOne = document.getElementById('row-one')
    rowOne.setAttribute('class', 'deleteRowOne')
})


// Minus button
const btnMinus = document.querySelector('.btn-minus')
btnMinus.addEventListener('click', function decreaseQuantity(){
    if(document.querySelector('.quantity').innerText > 0) {
        document.querySelector('.quantity').innerText = parseInt(document.querySelector('.quantity').innerText) - 1
    }

    sousTotal1() //Calculate the bubtotal on a row
})

// Defining the subtotal1 function
function sousTotal1() {
    let unitPrice = document.querySelector('.unit_price').innerText
    let qty = document.querySelector('.quantity').innerText
    document.getElementById('total_prod_1').innerText = qty * unitPrice
}

// Plus button
const btnPlus = document.querySelector('.btn-plus')
btnPlus.addEventListener('click', function increaseQuantity(){
    document.querySelector('.quantity').innerText = parseInt(document.querySelector('.quantity').innerText) + 1

    sousTotal2() //Calculate the bubtotal on a row
})

// Defining the subtotal1 function
function sousTotal2() {
    let unitPrice = document.querySelector('.unit_price').innerText
    let qty = document.querySelector('.quantity').innerText
    document.getElementById('total_prod_1').innerText = qty * unitPrice
}


// Implementing a function to the LIKE button
const iconBtn = document.querySelector('.icon-btn')
iconBtn.addEventListener('click', likeProduct)

function likeProduct() {
    let heartIcon = document.querySelector('.fa-heart')
    heartIcon.style.color = '#900D09'
    // iconBtn.style.backgroundColor = '#900D09'

}


// Calculate the total
const total1 = document.getElementById('total_prod_1').innerText
const total2 = document.getElementById('total_prod_2').innerText
document.getElementById('total').innerText = `$${parseInt(total1) + parseInt(total2)}.00`










