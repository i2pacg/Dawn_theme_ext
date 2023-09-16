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
            infinite: true,
            asNavFor: galleryThumbs,
          });
          $(galleryThumbs).on('init', function (event, slick, currentSlide, nextSlide) {
            $('.slick-slide', $(this)).on('click', function (event) {
              $(gallery).slick('slickGoTo', this.getAttribute('data-slick-index'));
            });
          });
          $(galleryThumbs).slick({
            centerPadding: '16px',
            slidesToScroll: 1,
            infinite: true,
            variableWidth: true,
            asNavFor: gallery,
            centerMode: true,
          });
        } catch (error) {
          console.log(error);
        }

      }
    }
  );
}
