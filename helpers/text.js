'use-strict'

let signing = (input, password) => {
    let html =
        "<h3>Bonjour " + input.username + "</h3>" +
        "Bienvenue sur E-Voyage! <br>" +
        "Votre inscription sur la plateforme s'est achevée avec succès. <br>" +
        "<p>- Identifiant : " + input.username + "</p>" +
        "<p>- Email : " + input.email + "</p>" +
        "<p>- Mot de passe : " + password + "</p>" +
        "Toute l'équipe E-Voyage :) <br> <b>Cordialement</b>"
    return html
}

module.exports = { signing }