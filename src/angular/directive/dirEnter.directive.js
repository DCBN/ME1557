import angular from 'angular';

class dirEnterDirective{
    constructor(){ 
        
    }   
}




app.directive('dirEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.dirEnter);
                });

                event.preventDefault();
            }
        });
    };
});