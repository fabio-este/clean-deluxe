//@todo: MOVE TO  FontAwesome
import {library, dom} from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab) 
dom.watch();

;


const textmediaGalleries = document.querySelectorAll("div.textmedia > .textmedia-gallery");

textmediaGalleries.forEach((gallery) => {
  if(gallery.innerHTML.length < 1){
    gallery.remove();
  }
});