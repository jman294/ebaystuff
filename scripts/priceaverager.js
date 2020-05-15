let prices = document.querySelectorAll('.s-item__price .POSITIVE')
avg = (1/prices.length) * Number.parseFloat(prices[0].textContent.substring(1, prices[0].textContent.length)); 
for (let i = 1; i < prices.length; i++) {
    let el = prices[i]
    console.log(Number.parseFloat(el.textContent.substring(1, el.textContent.length)))
    avg += (1/prices.length) * Number.parseFloat(el.textContent.substring(1, el.textContent.length))
}; 
console.log('Average:', avg)
console.log('Items:', prices.length)
