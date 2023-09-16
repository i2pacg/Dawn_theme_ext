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
            asNavFor: galleryThumbs,
          });
          $(galleryThumbs).slick({
            centerPadding: '16px',
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 10000,
            infinite: false,
            variableWidth: true,
            centerMode: true,
            asNavFor: gallery,
          });
        } catch (error) {
          console.log(error);
        }

      }
    }
  );
}
