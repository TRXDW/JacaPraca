const JacaPraca = (data = "6-2014") => {

    fetch(`https://trxdw.github.io/JacaPraca/e14/${data}.json`)
        .then(response => response.json())
        .then(result => showMeTheTruth(result))
}

const showMeTheTruth = (objArr) => {
    const questions = document.querySelectorAll(".wpProQuiz_questionList");
    questions.forEach(el => {
        let qId = el.getAttribute('data-question_id');
        for (let i = 0; i < objArr.length; i++) {
            if (objArr[i].dataQuestionId === qId) {

                for (let j = 0; j < el.children.length; j++) {
                    if (el.children[j].children[1].children[0].value === objArr[i].value) {
                        el.children[j].children[1].children[0].setAttribute('style', 'width: 20px;')
                    }
                }
                break;
            }
        }
    })

    console.clear();
}

JacaPraca();