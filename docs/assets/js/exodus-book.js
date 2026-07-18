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
        width: 638,
        height: 825,
        size: 'stretch',
        minWidth: 315,
        maxWidth: 1275,
        minHeight: 407,
        maxHeight: 1650,
        maxShadowOpacity: 0.5,
        showCover: true,
        mobileScrollSupport: false,
        usePortrait: false
      });
      pageFlip.loadFromImages(exodusPageUrls);
    }
  });

  closeBtn.addEventListener('click', function () {
    bookWrap.hidden = true;
    hero.hidden = false;
  });
});
