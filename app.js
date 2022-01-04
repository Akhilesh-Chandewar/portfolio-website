$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'
    })
});

// disable right click
document.addEventListener('contextmenu', event => event.preventDefault());
 
document.onkeydown = function (e) {

    // disable F12 key
    if(e.keyCode == 123) {
        return false;
    }

    // disable I key
    if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
        return false;
    }

    // disable J key
    if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        return false;
    }

    // disable U key
    if(e.ctrlKey && e.keyCode == 85) {
        return false;
    }
}

function disableselect(e) {
    return false
  }
  
  function reEnable() {
    return true
  }
  
  document.onselectstart = new Function ("return false")
  
  if (window.sidebar) {
    document.onmousedown = disableselect
    document.onclick = reEnable
  }
