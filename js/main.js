$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa',
    parallax: true,
    minSpeedX:0.5,
    maxSpeedX: 0.7
  });
  $('.intro-text').css({
    'margin-top': -($('#particles').height() / 2)
  });
});
