window.sr = ScrollReveal();
sr.reveal('.sr', {duration: 1000});

var img = new Image();
   img.src = '../img/Asset-10.svg';

document.querySelector('.search-icon').addEventListener('click' ,function() {
  var searchbar = document.querySelector('.search-bar').innerHTML = '<div class="input-group"><input type="text" class="form-control" placeholder="Search"></div>';
  var hideSearchIcon = document.querySelector('.search-icon').style.display = 'none';
});
