document.addEventListener('DOMContentLoaded', function () {
  var openBtn = document.getElementById('exodus-open-btn');
  var closeBtn = document.getElementById('exodus-close-btn');
  var hero = document.getElementById('exodus-hero');
  var bookWrap = document.getElementById('exodus-book-wrap');
  var flipEl = document.getElementById('exodus-flipbook');
  var scrapbook = document.querySelector('.exodus-scrapbook');
  var pageFlip = null;

  if (scrapbook && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          scrapbook.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    observer.observe(scrapbook);
  } else if (scrapbook) {
    scrapbook.classList.add('is-visible');
  }

  openBtn.addEventListener('click', function () {
    hero.hidden = true;
    bookWrap.hidden = false;

    if (!pageFlip) {
      pageFlip = new St.PageFlip(flipEl, {
        width: 319,
        height: 825,
        size: 'stretch',
        minWidth: 158,
        maxWidth: 450,
        minHeight: 407,
        maxHeight: 1163,
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
