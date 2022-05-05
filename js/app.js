/* **** FAQ ACCORDION **** */

let accordion = document.querySelector('.faq__accordion');
let items = accordion.querySelectorAll('.faq__accordion-item');
let title = accordion.querySelectorAll('.faq__accordion-title');

function toggleAccordion() {
  let thisItem = this.parentNode;
  
  items.forEach(item => {
    if (thisItem == item ) {
      // if this item is equal to the clicked item, open it.
      thisItem.classList.toggle('active');
      return;
    } 
    // otherwise, remove the open class
    item.classList.remove('active');
  });
}

title.forEach(question => question.addEventListener('click', toggleAccordion));


/* **** SMOOTH SCROLL **** */

$("[data-scroll]").on("click", function(event) {
  event.preventDefault();
      
    let elementId = $(this).data(`scroll`);
    let elementOffset = $(elementId).offset().top;
              
$("html, body").animate({
  scrollTop: elementOffset - 50
  }, 600);
});


/* **** AUDIO PLAYER **** */

const playerButton = document.querySelector('.player-button'),
      audio = document.querySelector('audio'),
      timeline = document.querySelector('.timeline'),
      soundButton = document.querySelector('.sound-button'),
      playIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#CA525E">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
  </svg>
      `,
      pauseIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#CA525E">
  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg>
      `;

function toggleAudio () {
  if (audio.paused) {
    audio.play();
    playerButton.innerHTML = pauseIcon;
  } else {
    audio.pause();
    playerButton.innerHTML = playIcon;
  }
}

playerButton.addEventListener('click', toggleAudio);

function changeTimelinePosition () {
  const percentagePosition = (100*audio.currentTime) / audio.duration;
  timeline.style.backgroundSize = `${percentagePosition}% 100%`;
  timeline.value = percentagePosition;
}

audio.ontimeupdate = changeTimelinePosition;

function audioEnded () {
  playerButton.innerHTML = playIcon;
}

audio.onended = audioEnded;

function changeSeek () {
  const time = (timeline.value * audio.duration) / 100;
  audio.currentTime = time;
}

soundButton.addEventListener('click', toggleSound);


/* **** SCROLL UP BUTTON **** */
  
$(document).ready(function() { //when document is ready
  $(window).scroll(function() { //when webpage is scrolled
    if ($(this).scrollTop() > 500) { //if scroll from top is more than 500
        $('.scroll-up').fadeIn(); //display element with class 'top-scroll'; opacity increases
    } else { //if not
      $('.scroll-up').fadeOut(); //hide element with class 'top-scroll'; opacity decreases
    }
  });
});


/* **** CALCULATOR MINT SECTION **** */

function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  if (value >= 10) {
    return;
  }
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('price').innerHTML = value * 0.1
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  if (value <= 1) {
    return;
  }
  value--;
  document.getElementById('price').innerHTML = value * 0.1
  document.getElementById('number').value = value;
}