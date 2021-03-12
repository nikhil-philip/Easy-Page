window.onload = function () {
    const fname = document.getElementById('first')
    const email = document.getElementById('email')
    const rateop1 = document.getElementById('rate_option1')
    const rateop2 = document.getElementById('rate_option2')
    const rateop3 = document.getElementById('rate_option3')
    const rateop4 = document.getElementById('rate_option4')
    const rating = document.myform.rateus
    const form = document.getElementById('form')
    const body = document.getElementById('body')
    const error = document.getElementById('error-container')
    const success = document.getElementById('success')
    var isFnameFilled, isEmailFilled, isEmailValid, isRated = false
    var messages = new Set()


    fname.addEventListener('input', (e) => {
        if (fname.value.length > 0) {
            messages.delete(' First Name is required')
            error.innerText = Array.from(messages).toString()
            fname.classList.remove("invalid")
            document.getElementById('ic1').classList.add('hidden')
            isFnameFilled = true
        }
    })
    email.addEventListener('input', (e) => {
        if (email.value.length > 0) {
            messages.delete(' Email is required')
            error.innerText = Array.from(messages).toString()
            email.classList.remove("invalid")
            document.getElementById('ic2').classList.add('hidden')
            isEmailFilled = true
        }
        if (email.value.length > 0 && email.value.includes('@')) {
            messages.delete(' Email must have @ symbol')
            error.innerText = Array.from(messages).toString()
            email.classList.remove("invalid")
            document.getElementById('ic2').classList.add('hidden')
            isEmailValid = true
        }
    })
    for (var i = 0; i < rating.length; i++) {
        rating[i].addEventListener('change', function () {
            messages.delete(' Please give us a rating to continue')
            error.innerText = Array.from(messages).toString()
            document.getElementById('ic3').classList.add('hidden')
            document.getElementById('rating').classList.remove("radio-group-error")
            isRated = true
        })
    }
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        if (fname.value === '' || fname.value == null) {
            messages.add(' First Name is required')
            fname.classList.add("invalid")
            document.getElementById('ic1').classList.remove('hidden')
            isFnameFilled = false
        }
        if (email.value === '' || email.value == null) {
            messages.add(' Email is required')
            email.classList.add("invalid")
            document.getElementById('ic2').classList.remove('hidden')
            isEmailFilled = false
        }
        if (!(email.value.includes('@')) && email.value.length > 0) {
            messages.add(' Email must have @ symbol')
            email.classList.add("invalid")
            document.getElementById('ic2').classList.remove('hidden')
            isEmailValid = false
        }
        if (!(rateop1.checked || rateop2.checked || rateop3.checked || rateop4.checked)) { 
            messages.add(' Please give us a rating to continue')
            document.getElementById('ic3').classList.remove('hidden')
            document.getElementById('rating').classList.add("radio-group-error")
            isRated = false
        }
        if (isFnameFilled == false || isEmailFilled == false || isEmailValid == false || isRated == false) {
            var str = Array.from(messages)
            error.innerHTML = ""
            error.insertAdjacentHTML('afterbegin', str.join('<br/>'))
            error.setAttribute("tabindex", "0");
            error.focus();
       
        }
        if (isFnameFilled == true && isEmailFilled == true && isEmailValid == true && isRated == true) {
            body.innerText = ""
            success.innerText = "Form Submitted Successfully. Thanks for Your Feedback"
        }
    })
}