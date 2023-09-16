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
          $(gallery).slick({
            /* asNavFor: galleryThumbs, */
          });
          /*   $(gallery).slick({
              asNavFor: gallery,
            }); */
        } catch (error) {
          console.log(error);
        }

      }
    }
  );
}
