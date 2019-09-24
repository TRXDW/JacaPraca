const getQuizAnswer = () => {
    const test = document.querySelectorAll(".wpProQuiz_questionList");
    let arr = [];

    const goodAnswers = document.querySelectorAll(".wpProQuiz_answerCorrect");
    let goodAnsArr = [];
    goodAnswers.forEach(el =>
        goodAnsArr.push(el.children[1].children[0].value)
    )


    test.forEach((el, index) => {
        let obj = new Object();

        obj.dataQuestionId = el.getAttribute('data-question_id');
        obj.value = goodAnsArr[index];
        arr.push(obj);
    })

    console.log(JSON.stringify(arr));
}

getQuizAnswer();
