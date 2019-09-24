
(function () {

    let date = document.querySelector('.breadcrumbs').children[3].children[0].innerHTML.split("_");

    let months = ["styczen", "luty", "marzec", "kwiecien", "maj", "czerwiec", "lipiec", "sierpien", "wrzesien", "pazdziernik", "listopad", "grudzien"];

    return (months.indexOf(date[1]) + 1) + "-" + date[2];

})();