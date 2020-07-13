var form = document.querySelector("form");
var inputContainer;
var formButton = form.getElementsByTagName("button")[0];

inputValidate = (event) => {
    inputContainer = event.target.parentElement;
    console.log(inputContainer);
    if (event.target.name === "user-email" && event.target.validity.typeMismatch ) {
        inputContainer.classList.remove("invalid");
        inputContainer.classList.remove("valid");
        inputContainer.classList.add("pattern-invalid");
    } else if (event.target.reportValidity()) {
        inputContainer.classList.remove("invalid");
        inputContainer.classList.remove("pattern-invalid");
        inputContainer.classList.add("valid");
    } else {
        console.log("Not Valid")
        inputContainer.classList.add("invalid");
        inputContainer.classList.remove("valid");
        inputContainer.classList.remove("pattern-invalid");
    }

    form.reportValidity() ? formButton.classList.remove("disabled") : formButton.classList.add("disabled");
}


// removes standard validation messages from form
form.addEventListener( "invalid", 
function( event ) {
    event.preventDefault();
}, true );