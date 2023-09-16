if (!customElements.get('media-gallery-ext')) {
  customElements.define(
    'media-gallery-ext',
    class MediaGalleryExt extends HTMLElement {
      constructor() {
        super();
        console.log('media-gallery-ext');
        const gallery = this.querySelector('media-gallery');
        $(gallery).slick({
          accessibility: false,
          adaptiveHeight: true,
          arrows: false,
          dots: true,
          draggable: false,
          fade: true,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: false,
          touchMove: false,
          useTransform: true,
        });
      }
    }
  );
}
