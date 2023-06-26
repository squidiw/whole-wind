// SplideJS 
import '@splidejs/splide/css';
import Splide from '@splidejs/splide';
let elms = document.getElementsByClassName( 'splide' );

for ( var i = 0; i < elms.length; i++ ) {
  new Splide( elms[ i ] ).mount();
}
// End SplideJS 

import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()
