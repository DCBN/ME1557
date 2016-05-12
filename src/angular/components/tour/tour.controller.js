class TourController {
    constructor($stateParams, $location) {
        const param = $stateParams.theme;
        if(param === "" || !param || typeof param === "undefined") {
            $location.path('/tour/theme');
        } else {
            console.log(param);
            console.log($stateParams);
        }
    }
}

export default TourController;
