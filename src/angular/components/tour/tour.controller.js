class TourController {
  constructor($stateParams, $location, $cookies, themeService, objectService, answerService) {
    this.answerService = answerService;
    const param = $stateParams.theme;
    if(param === "" || !param || typeof param === "undefined") {
      $location.path('/tour/theme');
    } else {
      this.themeService = themeService;
      this.objectService = objectService;

      themeService.getTheme(param).then((result) => {
        let theme = this.theme;
        theme = result.data[0];
        let cookie = {};
        objectService.getObjectsByTag(theme.tags).then((objects) => {
          if(!objects) return false;
          for(var i = 0; i < objects.data.length; i++) {
            let question = "question" + Math.floor(i + 1);
            cookie[question] = {"objectData": objects.data[i], "complete": false};
          };
          $cookies.put('someCookie', JSON.stringify(cookie));
          this.questionCookie = JSON.parse($cookies.get('someCookie'));
          this.filterQuestions(this.questionCookie);
        });
      });
    }
  }

  filterQuestions(questions) {
    for(var key in questions) {
      if(questions[key].complete !== true) {
        this.displayCurrentQuestion(questions[key], key);
        break;
      }
    }
  }

  displayCurrentQuestion(question, questionKey) {
    this.questionName = question.objectData.name;
    this.questionImg = question.objectData.imgurl;
    this.questionDesc = question.objectData.desc;
    this.questionAnswer = question.objectData.answer;
    this.questionKey = questionKey;
  }

  postQr() {
    var url = '/api/qrUpload';
    this.answerService.post(url, this.qrImage).then((result) => {
      this.qrAnswer = result.answer;
      console.log(result);
      if(this.qrAnswer === this.questionAnswer) {
        this.questionCookie[this.questionKey].complete = true;
        this.filterQuestions(this.questionCookie);
      } else {
        console.log('wrong answer');
      }
    });
  }
}

export default TourController;
