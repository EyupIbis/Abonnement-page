var database = {
    klant1: {
        Abo: "Vodafone Red XL",
        Start: "17 augustus 2016",
        Eind: "16 augustus 2018",
        Lening: "€ 4,95 per maand tot 21-08-2018",
        Mnr: " 06123456789"
    },
    klant2: {
        Abo: "Vodafone Red XL",
        Start: "10 mei 2016",
        Eind: "16 mei 2018",
        Lening: "€ 14,95 per maand tot 21-08-2018",
        Mnr: " 06123456789"
    },
    klant3: {
        Abo: "Vodafone Red XL",
        Start: "20 januari 2016",
        Eind: "19 januari 2018",
        Lening: "€ 9,95 per maand tot 21-08-2018",
        Mnr: " 06123456789"
    }
}
$(".dropdown-item").click(function () {

    var naamClient = this.getAttribute('id');
    console.log(database[naamClient])
    $(".aaaa").html("</b><br>" + "<img src='./iconen/my-vodafone-or-my-profile-mid.svg'>" + database[naamClient]["Abo"] + "<br> Startdatum: <b>" + database[naamClient]["Start"] + "</b><br>" +
        "Einddatum: <b>" + database[naamClient]["Eind"] + "</b><br>" +
        "Toestellening: <b>" + database[naamClient]["Lening"] + "</b><br>" +
        "Mobiel nummer:<b>" + database[naamClient]["Mnr"] + "</b><br><img src='./iconen/environment-mid.svg' >Je kunt je abonnement verlengen!")
})