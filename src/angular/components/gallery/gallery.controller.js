class GalleryController {
    constructor(objectService) {
        this.objectService = objectService;
        objectService.getAll().then(result => this.objects = result.data);
    }
    
    searchById(tags){
        objectService.getObjectsByTag(tags).then((objects) => {
		    this.objectsForRender = objects.data;
		});
        
     /*====================== MOVE =====================
        app.directive('ngEnter', function () {
            return function (scope, element, attrs) {
                element.bind("keydown keypress", function (event) {
                    if(event.which === 13) {
                        scope.$apply(function (){
                            scope.$eval(attrs.ngEnter);
                        });

                        event.preventDefault();
                    }
                });
            };
        });
     */
    }
}

export default GalleryController;
GalleryController.$inject = ['objectService'];
