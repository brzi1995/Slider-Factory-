$(document).ready(function() {
  var imageWidth = 250; // Width of each image
  var slideWidth = imageWidth + parseInt($('.container1 img').css('margin-left')) + parseInt($('.container1 img').css('margin-right'));

  $('.arrow-right').click(function() {
    $('.container1, .container2').each(function() {
      var $container = $(this);
      var scrollLeft = $container.scrollLeft();
      var newPosition = scrollLeft - slideWidth;

      $container.css('scroll-left-transition', '0.3s ease').scrollLeft(newPosition);
      setTimeout(function() {
        var $lastImage = $container.find('img:last');
        $container.prepend($lastImage);
        $container.scrollLeft(scrollLeft);
        $container.css('scroll-left-transition', 'none');
      }, 300);
    });
  });

  $('.arrow-left').click(function() {
    $('.container1, .container2').each(function() {
      var $container = $(this);
      var scrollLeft = $container.scrollLeft();
      var newPosition = scrollLeft + slideWidth;

      $container.css('scroll-left-transition', '0.3s ease').scrollLeft(newPosition);
      setTimeout(function() {
        var $firstImage = $container.find('img:first');
        $container.append($firstImage);
        $container.scrollLeft(scrollLeft);
        $container.css('scroll-left-transition', 'none');
      }, 300);
    });
  });
});
