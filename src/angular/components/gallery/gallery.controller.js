class GalleryController {
    constructor(objectService) {
        this.objectService = objectService;
        objectService.getAll().then(result => this.objects = result.data);
    }

    searchById($event, objectService) {
        if ($event.keyCode === 13) {
            if (this.searchValue) {
                var searchTags = this.searchValue + ", ";
                searchTags = searchTags.split(", ");
                this.objectService.getObjectsByTag(searchTags).then((objects) => {
                    this.objects = objects.data;
                    console.log(this.objects);
                });
            } else {
                this.objectService.getAll().then(result => this.objects = result.data);
            }
        }
    }
}

export default GalleryController;
GalleryController.$inject = ['objectService'];
