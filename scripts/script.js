document.addEventListener('DOMContentLoaded', function(){

//  code to show modal when the navigation humburger is clicked
  let toggleModal = document.querySelector(".nav-hamburger");
  let modal = document.querySelector('.modal');
  let body = document.querySelector('body');

  toggleModal.addEventListener('click', function(){

    if(modal.style.display === "block"){
      modal.style.display = "none";
      body.style.overflow = "scroll";
    } else {
      modal.style.display = "block";
      body.style.overflow = "hidden";
  }

  this.classList.toggle('change');
  });

  for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href === document.URL) {
      document.links[i].classList.add('active');
    } else {document.links[0].classList.add('active');}
  }
});
