class GalleryController {
    constructor(objectService) {
        this.objectService = objectService;
        objectService.getAll().then(result => this.objects = result.data);
    }
}

export default GalleryController;
GalleryController.$inject = ['objectService'];
