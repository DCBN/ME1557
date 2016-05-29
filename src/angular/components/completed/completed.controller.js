class CompletedController {
  constructor($stateParams, $location) {
    this.param = $stateParams.theme;
    const session = JSON.parse(window.sessionStorage.getItem(this.param));
    console.log(session);
    if(!session || !session.done) {
      $location.path('/tour/theme');
    }
  }
}

export default CompletedController;
