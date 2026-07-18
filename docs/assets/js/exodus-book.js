document.addEventListener('DOMContentLoaded', function () {
  var openBtn = document.getElementById('exodus-open-btn');
  var closeBtn = document.getElementById('exodus-close-btn');
  var hero = document.getElementById('exodus-hero');
  var bookWrap = document.getElementById('exodus-book-wrap');
  var flipEl = document.getElementById('exodus-flipbook');
  var pageFlip = null;

  openBtn.addEventListener('click', function () {
    hero.hidden = true;
    bookWrap.hidden = false;

    if (!pageFlip) {
      pageFlip = new St.PageFlip(flipEl, {
        width: 550,
        height: 733,
        size: 'stretch',
        minWidth: 315,
        maxWidth: 1000,
        minHeight: 420,
        maxHeight: 1350,
        maxShadowOpacity: 0.5,
        showCover: true,
        mobileScrollSupport: false
      });
      pageFlip.loadFromImages(exodusPageUrls);
    }
  });

  closeBtn.addEventListener('click', function () {
    bookWrap.hidden = true;
    hero.hidden = false;
  });
});
