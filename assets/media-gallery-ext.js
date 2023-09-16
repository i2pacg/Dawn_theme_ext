if (!customElements.get('media-gallery-ext')) {
  customElements.define(
    'media-gallery-ext',
    class MediaGalleryExt extends HTMLElement {
      constructor() {
        super();
        console.log('media-gallery-ext');
        const gallery = this.querySelector('.media-gallery');
        try {
          $(gallery).slick({
            arrows: true,
          });
        } catch (error) {
          console.log(error);
        }

      }
    }
  );
}
