
(function () {

    let data = "6-2014";
    fetch(`https://trxdw.github.io/JacaPraca/e14/${data}.json`)
        .then(response => response.json())
        .then(result => console.log(result))

})();