const JacaPraca = () => {



    let objArr = [
        {
            "dataQuestionId": "1030",
            "value": "3"
        }, {
            "dataQuestionId": "1057",
            "value": "3"
        }, {
            "dataQuestionId": "1027",
            "value": "1"
        }, {
            "dataQuestionId": "1035",
            "value": "4"
        }, {
            "dataQuestionId": "1037",
            "value": "3"
        }, {
            "dataQuestionId": "1062",
            "value": "4"
        }, {
            "dataQuestionId": "1058",
            "value": "2"
        }, {
            "dataQuestionId": "1054",
            "value": "3"
        }, {
            "dataQuestionId": "1048",
            "value": "2"
        }, {
            "dataQuestionId": "1063",
            "value": "4"
        }, {
            "dataQuestionId": "1026",
            "value": "3"
        }, {
            "dataQuestionId": "1052",
            "value": "3"
        }, {
            "dataQuestionId": "1040",
            "value": "4"
        }, {
            "dataQuestionId": "1050",
            "value": "1"
        }, {
            "dataQuestionId": "1059",
            "value": "1"
        }, {
            "dataQuestionId": "1061",
            "value": "3"
        }, {
            "dataQuestionId": "1051",
            "value": "4"
        }, {
            "dataQuestionId": "1045",
            "value": "2"
        }, {
            "dataQuestionId": "1055",
            "value": "4"
        }, {
            "dataQuestionId": "1042",
            "value": "4"
        }, {
            "dataQuestionId": "1041",
            "value": "2"
        }, {
            "dataQuestionId": "1049",
            "value": "4"
        }, {
            "dataQuestionId": "1031",
            "value": "4"
        }, {
            "dataQuestionId": "1028",
            "value": "3"
        }, {
            "dataQuestionId": "1025",
            "value": "4"
        }, {
            "dataQuestionId": "1034",
            "value": "2"
        }, {
            "dataQuestionId": "1043",
            "value": "4"
        }, {
            "dataQuestionId": "1024",
            "value": "3"
        }, {
            "dataQuestionId": "1029",
            "value": "4"
        }, {
            "dataQuestionId": "1060",
            "value": "3"
        }, {
            "dataQuestionId": "1036",
            "value": "4"
        }, {
            "dataQuestionId": "1046",
            "value": "2"
        }, {
            "dataQuestionId": "1044",
            "value": "2"
        }, {
            "dataQuestionId": "1039",
            "value": "4"
        }, {
            "dataQuestionId": "1047",
            "value": "2"
        }, {
            "dataQuestionId": "1032",
            "value": "1"
        }, {
            "dataQuestionId": "1038",
            "value": "1"
        }, {
            "dataQuestionId": "1056",
            "value": "1"
        }, {
            "dataQuestionId": "1033",
            "value": "2"
        }, {
            "dataQuestionId": "1053",
            "value": "2"
        }
    ];

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
}

JacaPraca();