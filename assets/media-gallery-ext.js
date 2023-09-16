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
            autoplay: true,
            autoplaySpeed: 10000,
            asNavFor: galleryThumbs,
          });
          $(galleryThumbs).on('init', function (event, slick, currentSlide, nextSlide) {
            console.log(this.querySelectorAll('.slick-slide'));
          });
          $(galleryThumbs).slick({
            centerPadding: '16px',
            slidesToScroll: 1,
            infinite: true,
            variableWidth: true,
            asNavFor: gallery,
          });
        } catch (error) {
          console.log(error);
        }

      }
    }
  );
}
