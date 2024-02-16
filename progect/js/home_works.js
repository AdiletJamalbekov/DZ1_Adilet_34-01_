const gmailInput = document.querySelector("#gmail_input")
const gmailButton = document.querySelector("#gmail_button")
const gmailResult = document.querySelector("#gmail_result")


const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    gmailButton.addEventListener("click", () => {
        if (regExp.test(gmailInput.value)) {
            gmailResult.innerHTML = "OK"
            gmailResult.style.color = "green"
        } else {
            gmailResult.innerHTML = "NOT OK"
            gmailResult.style.color = "red"
        }
    })
