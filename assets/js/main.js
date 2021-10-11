const form = document.getElementById("main-contact")
console.log(form);

// funciones

const createuser = event => {
    event.preventDefault();
    console.log(document.getElementById("nombre").value);
};

//crea un objeto con la informacion de los inputs
let user {
    nombre: document.getElementById("nombre").value,
    email: document.getElementById("email").value,
    mensaje: document.getElementById("mensaje").value
}

// eventos
form.onSubmit = createuser