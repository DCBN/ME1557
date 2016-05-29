class TourController {
  constructor($stateParams, $location, $cookies, themeService, objectService, answerService) {
    this.$location = $location;
    this.answerService = answerService;
    this.param = $stateParams.theme;
    if(this.param === "" || !this.param || typeof this.param === "undefined") {
      this.$location.path('/tour/theme');
    } else {
      this.themeService = themeService;
      this.objectService = objectService;
      if(window.sessionStorage.getItem(this.param)) {
        console.log(JSON.parse(window.sessionStorage.getItem(this.param)));
        this.questionCookie = JSON.parse(window.sessionStorage.getItem(this.param));
        this.filterQuestions(this.questionCookie)
      }
      if(!window.sessionStorage.getItem(this.param)) {
        themeService.getTheme(this.param).then((result) => {
          let theme = this.theme;
          theme = result.data[0];
          let cookie = {};
          objectService.getObjectsByTag(theme.tags).then((objects) => {
            if(!objects) return false;
            for(var i = 0; i < objects.data.length; i++) {
              let question = "question" + Math.floor(i + 1);
              cookie[question] = {"objectData": objects.data[i], "complete": false};
            };
            window.sessionStorage.setItem(this.param, JSON.stringify(cookie));
            console.log(JSON.parse(window.sessionStorage.getItem(this.param)));
            this.questionCookie = JSON.parse(window.sessionStorage.getItem(this.param));
            this.filterQuestions(this.questionCookie);
          });
        });
      }
    }
  }

  filterQuestions(questions) {
    for(var key in questions) {
      if(questions[key].complete !== true) {
        this.displayCurrentQuestion(questions[key], key);
        return;
      }
    }
    // TODO: Redirect to main page and fix modals
    questions.done = true;
    window.sessionStorage.setItem(this.param, JSON.stringify(questions));
    console.log(JSON.parse(window.sessionStorage.getItem(this.param)));
    this.$location.path('/tour/theme/' + this.param + '/completed');
  }

  displayCurrentQuestion(question, questionKey) {
    this.questionName = question.objectData.name;
    this.questionImg = question.objectData.imgurl;
    this.questionDesc = question.objectData.desc;
    this.questionKey = questionKey;
  }

  postQr() {
    var url = '/api/qrUpload';
    this.answerService.post(url, this.qrImage).then((result) => {
      this.qrAnswer = result.answer;
      console.log(result);
      if(this.qrAnswer === this.questionName) {
        this.questionCookie[this.questionKey].complete = true;
        window.sessionStorage.setItem(this.param, JSON.stringify(this.questionCookie));
        this.filterQuestions(this.questionCookie);
      } else {
        console.log('wrong answer');
      }
    });
  }
}

export default TourController;
