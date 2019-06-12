const inviteButton = document.querySelector('.invite-friends');
const closeSlideOut = document.querySelector('.close_slideOut');
const overlayClose = document.querySelector('.slideOut_overlay');

inviteButton.addEventListener('click', function () {
    TweenMax.to('.landing_slideOut', .3, { display: 'block' });
    TweenMax.to('.slideOut_overlay', .5, { opacity: 1 });
    TweenMax.to('.slideOut_menu', .2, { opacity: 1 });
});

closeSlideOut.addEventListener('click', function () {
    TweenMax.to('.landing_slideOut', .5, { display: 'none', delay: .5 });
    TweenMax.to('.slideOut_menu', .2, { opacity: 0 });
    TweenMax.to('.slideOut_overlay', .5, { opacity: 0, delay: .2 });
});
overlayClose.addEventListener('click', function () {
    TweenMax.to('.landing_slideOut', .5, { display: 'none', delay: .5 });
    TweenMax.to('.slideOut_menu', .2, { opacity: 0 });
    TweenMax.to('.slideOut_overlay', .5, { opacity: 0, delay: .2 });
});


