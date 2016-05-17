class GalleryController {
    constructor(objectService) {
        this.objectService = objectService;
        objectService.getAll().then(result => this.objects = result.data);
    }
    
    searchById($event){
        if($event.keyCode === 13){
            var searchTags = this.searchValue;
            searchTags = searchTags.split(" ");
            this.objectService.getObjectsByTag(searchTags).then((objects) => {
                this.objectsForRender = objects.data;
                console.log(this.objectsForRender);
            });
		}
    }
}

export default GalleryController;
GalleryController.$inject = ['objectService'];
