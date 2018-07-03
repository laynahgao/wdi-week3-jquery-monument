$(document).ready(function () {

  $('.contact').on('submit', function (evt) {
  evt.preventDefault(); // Prevent the page from reloading

  //for validating the form
  $('form input, form textarea').each(function() {
    //cache$(this) code
    var $currentField =$(this);
    var fieldType = $(this).attr('type');

    if ($currentField.val() === ''){
      $currentField.addClass('error');
      $currentField.siblings('.error-message').fadeIn();

      return;
    }

    if (fieldType === 'email') {
    				var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    				var isValidEmailAddress = re.test($currentField.val());
    				if (!isValidEmailAddress) {
    			    $currentField.addClass('error');
    					$currentField.siblings('.error-message').text('Please enter a valid email address.').fadeIn();
    					return;
    			  }

    			}

    $currentField.removeClass('error');
    			$currentField.siblings('.error-message').hide();

    		});
    	});

//smooth scroll
$('nav a').on('click', function(e){
  e.preventDefault();
  var thisTartget = $(this).attr('href');
  var targetOffset = $(thisTartget).offset().top;

  $('body').animate({
    scrollTop: targetOffset
  },600);
});
});
