const rates = document.querySelectorAll('.item-btn')
const submit = document.getElementById("submit")
const jsOutput = document.getElementById('jsOutput')
const box = document.getElementById('box')
const thankYou = document.getElementById('thankYou')

let grade = 0


rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        grade = rate.querySelector('.item').innerHTML
        rate.querySelector('.item-wrapper').style.color = 'hsl(0, 0%, 100%)'
        rate.querySelector('.item-wrapper').style.backgroundColor = 'hsl(216, 12%, 54%)'
    })
})

submit.addEventListener('click', () => {
    box.style.display = 'none'
    thankYou.style.display = 'flex'
    jsOutput.innerHTML = `You selected ${grade} out of 5`
})