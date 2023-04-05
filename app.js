const toggle = document.querySelector("#check");
const tanya = document.querySelector(".tanya");
const john = document.querySelector(".john-off");


toggle.addEventListener("click", () => {
    if (toggle.checked) {
        tanya.classList.replace("tanya", "tanya-off");
        john.classList.replace("john-off", "john");
    } else {
        tanya.classList.replace("tanya-off", "tanya" );
        john.classList.replace("john", "john-off");
    }
})