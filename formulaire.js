let form_validation = true;

$(document).ready(() => {
    var form_control = document.getElementsByClassName('form-control');
    var pattern = new RegExp(/[^<->]/);
    for (let i = 0; i < form_control.length; i++) {
        const element = form_control[i];
        element.addEventListener('change', (event) => {
            if(!pattern.test(event.target.value)){
                form_validation = false;
                element.setCustomValidity("Veuillez ne pas saisir de script")
            }
        })
    }

})

$('#form').on('click', () => {
    if(!form_validation){
        console.log("Impossible de lancer");
    }
})