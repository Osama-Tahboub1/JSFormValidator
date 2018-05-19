var letters = /^[a-zA-Z]+$/
var emails = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


document.querySelector('form').addEventListener('submit', function (e) {
    if (document.querySelector('#field1').value.length === 0) {
        e.preventDefault()
        document.querySelector('#label1').innerHTML = '<p>This is required</p>'
        }

    if (document.querySelector('#field2').value.length > 8) {
        e.preventDefault()
        document.querySelector('#label2').innerHTML = '<p>This has a maximum of 8 character</p>'
    } else {
        document.querySelector('#label2').innerHTML = ''
    }

    if (document.querySelector('#field3').value.length < 10  || document.querySelector('#required2').value.length > 25 ) {
        e.preventDefault()
        document.querySelector('#label3').innerHTML = '<p>This requires a minimum of 10 characters and a maximum of 25</p>'
    }

    if ((document.querySelector('#field4').value.length !== 0 ) && (document.querySelector('#field4').value.length < 10  || document.querySelector('#field4').value.length > 25)) {
            e.preventDefault()
            document.querySelector('#label4').innerHTML = '<p>This requires a minimum of 10 characters and a maximum of 25</p>'
    } else {
        document.querySelector('#label4').innerHTML = ''
    }

    if ((letters.test(document.querySelector('#field5').value) === true) || (document.querySelector('#field5').value.length === 0 )) {
        document.querySelector('#label5').innerHTML = ''
    } else {
        e.preventDefault()
        document.querySelector('#label5').innerHTML = '<p>This accepts letters only</p>'
    }

    if ((document.querySelector('#radio1').checked === true ) && (document.querySelector('#field6').value.length === 0 )) {
        e.preventDefault()
        document.querySelector('#label6').innerHTML = '<p>This is required if you chose Yes</p>'
    } else {
        document.querySelector('#label6').innerHTML = ''
    }

    if ((document.querySelector('#field7').value.length !== 0 ) && (emails.test(document.querySelector('#field7').value) === false)) {
            e.preventDefault()
            document.querySelector('#label7').innerHTML = '<p>This requires an email</p>'
    } else {
        document.querySelector('#label7').innerHTML = ''
    }
})
