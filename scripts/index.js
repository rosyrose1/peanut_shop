const quantityOrdered = document.getElementById('quantity');
const totalAmount = document.getElementById('amount');
let unitPrice = 100;

function placeOrder() {
    alert(`You ordered for ${quantityOrdered.value} packs of peanut and it will be delivered to you shortly`);
}

quantityOrdered.addEventListener('input', () => {   
    if (quantityOrdered.value < 0) {
        unitPrice = 0;
    }
    const calculatedPrice = quantityOrdered.value * unitPrice;
    totalAmount.innerHTML = calculatedPrice;
});