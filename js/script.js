$(document).ready(function (){
  $('.navigation__hamburger').click(function (){
    $('.navigation').toggleClass('navigation_change');
  })

	$(window).scroll(function (){
    let position = $(this).scrollTop();
    if(window.matchMedia("(min-width: 1200px)").matches){
      if(position >= 350) {
        $('.gallery').addClass('gallery_animate');
      }
	  }
  });

  $('.writer-accordion').click(function (e){
    if(e.target.id.split('-')[0] === 'button') {
      let book_1 = 'img/writers/' + e.target.id.split('-')[1] + '-book_1.jpg';
      let book_2 = 'img/writers/' + e.target.id.split('-')[1] + '-book_2.jpg';
      // $('.writers__book-1').attr('src', 'img/writers/' + e.target.id.split('-')[1] + '-book_1.jpg')
      // $('.writers__book-2').attr('src', 'img/writers/' + e.target.id.split('-')[1] + '-book_2.jpg');
      $('.writers__book-1').attr('src', book_1).parent().attr('href', book_1);
      $('.writers__book-2').attr('src', book_2).parent().attr('href', book_2);
    }
  })
});