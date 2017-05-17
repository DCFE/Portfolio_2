$(document).ready(function() { //Prepares script for upcoming jQuery
// ---- TABS
var tabPrefix = 'js-set-tab-'; //Sets the prefix of the string up so that the size and detail may be altered upon user input.

function switchDetailTab(tabName) {
  var tabContentClassPrefix = 'js-tab-',
  tabContentClass = '.' + tabContentClassPrefix + tabName; //Combines the class prefix and suffix

$('[class*=' + tabContentClassPrefix + ']').addClass('hide');
$(tabContentClass).removeClass('hide');  //'hide' removes class attribute of tabContentCLass

$('[class*=' + tabPrefix + ']').removeClass('active');
$('.' + tabPrefix + tabName).addClass('active'); //'active' is added to the class attribute.
}

$('[class^=' + tabPrefix + ']').click(function(e) { //Sets function of mouse click. Click alters ''('[class^=' + tabPrefix + ']')'
e.preventDefault(); // Arguement
if ( !$(this).hasClass('active') ) {  //If mouse click does not enable active class, the next line occurs
  var tabName = $(this).attr('class').replace(tabPrefix, ''); //tabPrefix replaces the class attribute following the click
  switchDetailTab(tabName); //Mouse click sets jQuery functions in motion and hides/shows content
  }
});

switchDetailTab($('[class*=' + tabPrefix + ']').first().attr('class').replace(tabPrefix, '')); //Compiles all of the above and replaces var strings upon user's mouse click.

// ---- BUY BUTTON

$('.js-buy').on('click', function() { //'click' sets following function in motion once 'js-buy' is clicked
  $(this).addClass('active'); //Active is added to the class attribute following mouse click.
  $(this).text('Added To Cart!');  //'Added To Cart!' is also displayed following mouse click.

var cartCount = parseInt($('.js-cart-count').text()); //'.js-cart-count' text propterty is altered following user click.
cartCount += 1; //A value of 1 is added to the cart's value folloing user click.

  $('.js-cart-count').text(cartCount); //Shows the "Added to cart" text
    window.setTimeout(function() { //Sets duration of the "Added to cart" text
    $('.js-buy').text('Buy Now!'); //Function switches text back to "Buy Now"
    $('.js-buy').removeClass('active'); //Alters 'js-buy' to remove 'active' from class.
},   500); //"Added to cart" is displayed for 500 milliseconds

});
});
