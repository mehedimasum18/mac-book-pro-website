//All memory cost 
const memoryLike8gb = document.getElementById("8gb_price");
const memoryLike16gb = document.getElementById("16gb_price");
const extraMemoryCost = document.getElementById("memory_cost");

//All SSD cost
const ssdLike256gb = document.getElementById("256gb_storage_price");
const ssdLike512gb = document.getElementById("512gb_storage_price");
const ssdLike1tb = document.getElementById("1tb_storage_price");
const extraSsdStorageCost = document.getElementById("storage_cost");

// total delivery cost
const freeDeliveryCost = document.getElementById("friday_delivery");
const chargeAbleDeliveryCost = document.getElementById("charge_able_delivery");
const totalDeliveryCost = document.getElementById("total_delivery_cost");

// total price
const bestPriceOption = document.getElementById("best_price");
const totalPriceOption = document.getElementById("total_price");

function totalUpdatePrice() {
    const memoryCost = parseFloat(extraMemoryCost.innerText);
    const storageCost = parseFloat(extraSsdStorageCost.innerText);
    const deliveryCost = parseFloat(totalDeliveryCost.innerText);
    const totalPrice = parseFloat(bestPriceOption.innerText);
    const grandTotalPrice = memoryCost + storageCost + deliveryCost + totalPrice;
    totalPriceOption.innerText = grandTotalPrice;
    afterPromoTotal.innerText = totalPriceOption.innerText;
};

// Memory cost calculation 
memoryLike8gb.addEventListener("click", function() {
    extraMemoryCost.innerText = "0";
    totalUpdatePrice()
});
memoryLike16gb.addEventListener("click", function() {
    extraMemoryCost.innerText = "180";
    totalUpdatePrice()
});

// SSD cost calculation 

ssdLike256gb.addEventListener("click", function() {
    extraSsdStorageCost.innerText = "0"
    totalUpdatePrice()
});
ssdLike512gb.addEventListener("click", function() {
    extraSsdStorageCost.innerText = "100"
    totalUpdatePrice()
});
ssdLike1tb.addEventListener("click", function() {
    extraSsdStorageCost.innerText = "180"
    totalUpdatePrice()
});

// Delivery cost calculation 
freeDeliveryCost.addEventListener("click", function() {
    totalDeliveryCost.innerText = "0";
    totalUpdatePrice()
});
chargeAbleDeliveryCost.addEventListener("click", function() {
    totalDeliveryCost.innerText = "20";
    totalUpdatePrice()
});

// using promo code calculation

const usePromoField = document.getElementById("promo_code");
const usePromoButton = document.getElementById("promo_code_btn");
const afterPromoTotal = document.getElementById("over_all_total");

// using promo button function

usePromoButton.addEventListener('click', function() {
    addPromoCode()
});

function addPromoCode() {
    const promo = usePromoField.value;
    if (promo == 'stevekaku') {
        const promoTotalPrice = afterPromoTotal.innerText
        const discount = parseInt(promoTotalPrice) / 100 * 20;
        afterPromoTotal.innerText = promoTotalPrice - discount;
    } else {
        alert('please enter valid promo code')
    }
    usePromoField.value = "";
};