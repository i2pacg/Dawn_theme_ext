
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
          if (gallery.querySelectorAll('.media-item').length < 2) return;
          $(gallery).on('init', function (event, slick, currentSlide, nextSlide) {
            $('.slick-slide', $(this)).on('click', function (event) {
              console.log(this);
              console.log(this.querySelector('img').getAttribute('bigmedia'));
              if (!this.querySelector('img').getAttribute('bigmedia')) return;
              try {
                Swal.fire({
                  imageUrl: this.querySelector('img').getAttribute('bigmedia'),
                  imageHeight: '90vh',
                  showConfirmButton: false,
                  width: 'auto',
                });
              } catch (error) {
                console.log(error);
              }
            });
          });
          $(gallery).slick({
            autoplay: true,
            autoplaySpeed: 10000,
            infinite: true,
            asNavFor: galleryThumbs,
            arrows: true
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
