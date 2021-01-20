import Swiper from '../vendor/swiper.min.js'
import vars from '../_vars';

const bannerSlier = new Swiper(vars.$bannerSlider,{
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
});