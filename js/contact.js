// function sendEmail() {
//     sendEmail.send({
//         Host: "smtp.gmail.com",
//         Username: "balamine129@gmail.com",
//         Password: "gkivqwlavmlpjvsl",
//         To: "balamine129@gmail.com",
//         From: document.getElementById("email").value,
//         Subject: "My portofolio",
//         Boby: "Nom: " + document.getElementById("nom").value +
//             "<br> Email: " + document.getElementById("email").value +
//             "<br> Subject: " + document.getElementById("subject").value +
//             "<br> Message: " + document.getElementById("message").value
//     }).then(
//         message => alert("Message envoyer avec succes")
//     )
// }

function removeItems() {
    document.getElementById('nom').value = '';
    document.getElementById('email').value = '';
    document.getElementById('objet').value = '';
    document.getElementById('message').value = '';
}

var btn = document.getElementById('btn');
btn.addEventListener('click', function(e) {
    e.preventDefault()
    var nom = document.getElementById('nom').value;
    var email = document.getElementById('email').value;
    var objet = document.getElementById('objet').value;
    var message = document.getElementById('message').value;
    var body = '' + nom + '<br>' + email + '<br>' +
        objet + '<br>' + message;


    Email.send({
        Host: "smtp.gmail.com",
        Username: "balamine129@gmail.com",
        Password: "gkivqwlavmlpjvsl",
        To: 'balamine129@gmail.com',
        From: email,
        Subject: objet,
        Body: body,
    }).then(
        message => alert("Message envoyer avec succes")
    );

    removeItems();
})