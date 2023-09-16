if (!customElements.get('media-gallery-ext')) {
  customElements.define(
    'media-gallery-ext',
    class MediaGalleryExt extends HTMLElement {
      constructor() {
        super();
        console.log('media-gallery-ext');
        /*   this.elements = {
            liveRegion: this.querySelector('[id^="GalleryStatus"]'),
            viewer: this.querySelector('[id^="GalleryViewer"]'),
            thumbnails: this.querySelector('[id^="GalleryThumbnails"]'),
          }; */
      }
    }
  );
}
