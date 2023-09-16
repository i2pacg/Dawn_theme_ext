if (!customElements.get('media-gallery-ext')) {
  customElements.define(
    'media-gallery-ext',
    class MediaGalleryExt extends HTMLElement {
      constructor() {
        super();
        console.log('media-gallery-ext');
        const gallery = this.querySelector('.media-gallery');
        const galleryThumbs = this.querySelector('.media-gallery-thumbs');
        try {
          $(gallery).slick({});
        } catch (error) {
          console.log(error);
        }

      }
    }
  );
}
