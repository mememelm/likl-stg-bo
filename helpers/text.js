'use-strict'

let signing = (input) => {
    let html =
        '<h3>Bonjour ' + input.username + '</h3>' +
        'Bienvenue sur E-Voyage! <br>' +
        'Vous êtes maintenant inscrit sur la plateforme. Connectez-vous blablabla'
    return html
}

module.exports = { signing }