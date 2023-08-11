$(document).ready(() => {
  $('.thanks-card').hide();
  $('.submit-btn').prop('disabled', true);
  let ratingValue = 0;

  function handleRating() {
    let clickedValue = Number($(this).text());

    if (ratingValue === clickedValue) {
      ratingValue = 0;
      $(this).removeClass('selected');
      $('.submit-btn').prop('disabled', true);
    } else {
      $('.rating-btn').removeClass('selected');
      $(this).addClass('selected');
      ratingValue = clickedValue;
      $('.submit-btn').prop('disabled', false);
      console.log(ratingValue);
    }
  }

  const toggleThanks = () => {
    console.log(`Rating: ${ratingValue}`);
    $('.rating-card').toggle();
    $('.selection').text(ratingValue);
    $('.thanks-card').toggle();
  };

  const closeThanks = () => {
    ratingValue = 0;
    $('.selection').text('');
    $('.rating-btn').removeClass('selected');
    $('.rating-card').toggle();
    $('.thanks-card').toggle();
    $('.submit-btn').prop('disabled', true);
  };

  $('.rating-btn').click(handleRating);
  $('.submit-btn').click(toggleThanks);
  $('.close-btn').click(closeThanks);
});
