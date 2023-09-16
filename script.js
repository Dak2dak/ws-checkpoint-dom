



const Btn = document.getElementById('deleteRowOne')
Btn.addEventListener('click', async(e) => {
    e.preventDefault()
    let rowOne = document.getElementById('row-one')
    rowOne.setAttribute('class', 'deleteRowOne')
})



const btnMinus = document.querySelector('.btn-minus')
btnMinus.addEventListener('click', function decreaseQuantity(){
    if(document.querySelector('.quantity').innerText > 0) {
        document.querySelector('.quantity').innerText = parseInt(document.querySelector('.quantity').innerText) - 1
    }

    sousTotal1()
})

function sousTotal1() {
    let unitPrice = document.querySelector('.unit_price').innerText
    let qty = document.querySelector('.quantity').innerText
    document.getElementById('total_prod_1').innerText = qty * unitPrice
}

const btnPlus = document.querySelector('.btn-plus')
btnPlus.addEventListener('click', function increaseQuantity(){
    document.querySelector('.quantity').innerText = parseInt(document.querySelector('.quantity').innerText) + 1

    sousTotal2()
})

function sousTotal2() {
    let unitPrice = document.querySelector('.unit_price').innerText
    let qty = document.querySelector('.quantity').innerText
    document.getElementById('total_prod_1').innerText = qty * unitPrice
}











// btnMinus.addEventListener('click', decreaseQuantity)

// function decreaseQuantity() {

// }





// const qty = document.querySelector('.quantity').innerText
// console.log(qty)