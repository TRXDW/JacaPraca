// ==UserScript==
// @name         Sliter.io Bot
// @namespace    http://agar.io
// @version      0.8v
// @description  try to take over the world!
// @author       TRX
// @match        https://kwalifikacjewzawodzie.pl/kwalifikacje/kwalifikacja-e-14/*
// @grant        none
// ==/UserScript==

const JacaPraca = () => {
    fetch(`https://trxdw.github.io/JacaPraca/e14/${getDate()}.json`)
        .then(response => response.json())
        .then(result => showMeTheTruth(result))
        .catch(err => alert(`Wystąpił błąd podczas fetchowiania, powodem może być Adblock\nWyłącz Adblocka, przeładuj stronę i spróbuj jeszcze raz\nBłąd: ${err}`))
}

const showMeTheTruth = (objArr) => {
    const questions = document.querySelectorAll(".wpProQuiz_questionList");
    let arr = [];
    questions.forEach(el => {
        let qId = el.getAttribute('data-question_id');
        for (let i = 0; i < objArr.length; i++) {
            if (objArr[i].dataQuestionId === qId) {

                for (let j = 0; j < el.children.length; j++) {
                    if (el.children[j].children[1].children[0].value === objArr[i].value) {
                        arr.push(el.children[j].children[1].children[0]);
                    }
                }
                break;
            }
        }
    })

    document.addEventListener("keydown", (e) => {
        if(e.code === "KeyH"){
        arr.forEach(el => {
            if(el.getAttribute("style") === "width:20px;"){
                el.removeAttribute("style");
            }
            else{
                el.setAttribute("style", "width:20px;");
            }
        })
    }   
    });
    
    console.clear();
    console.log(new Array(240 + 1).join('\n'));
}

const getDate = () => {
    let date = document.querySelector('.breadcrumbs').children[3].children[0].innerHTML.split("_");

    let months = ["styczen", "luty", "marzec", "kwiecien", "maj", "czerwiec", "lipiec", "sierpien", "wrzesien", "pazdziernik", "listopad", "grudzien"];

    return (months.indexOf(date[1]) + 1) + "-" + date[2];
}


JacaPraca();