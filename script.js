  let popupElements = [
  '<div class="popup"><div class="popup-content"><div class ="popup-text">Константин <span class="popup-actions">купил перфоратор</span></div></div> </div>',
  '<div class="popup"><div class="popup-content"><div class ="popup-text">Мария <span class="popup-actions">купила фен</span></div></div></div>',
  '<div class="popup"><div class="popup-content"><div class ="popup-text">Александр <span class="popup-actions">купил пылесос</span></div></div></div>',
  '<div class="popup"><div class="popup-content"><div class ="popup-text">Светлана <span class="popup-actions">купила платье</span></div></div></div>',
  '<div class="popup"><div class="popup-content"><div class ="popup-text">Екатерина <span class="popup-actions">купила мультиварку</span></div></div></div>',
  '<div class="popup"><div class="popup-content"><div class ="popup-text">Игорь <span class="popup-actions">купил беговую дорожку</span></div></div></div>',
  '<div class="popup"><div class="popup-content"><div class ="popup-text">Денис <span class="popup-actions">купил монитор</span></div></div></div>',
  '<div class="popup"><div class="popup-content"><div class ="popup-text">Станислав <span class="popup-actions">купил телефон</span></div></div></div>',
  '<div class="popup"><div class="popup-content"><div class ="popup-text">Евгения <span class="popup-actions">купила комплект постельного белья</span></div></div></div>',
  '<div class="popup"><div class="popup-content"><div class ="popup-text">Дмитрий <span class="popup-actions">купил электросамокат</span></div></div></div>',
  ]
  function mixPopups(array) {
  	for (var i = array.length - 1; i > 0; i--) {
  		let r = Math.floor(Math.random() * (i + 1));
  		[array[i], array[r]] = [array[r], array[i]];
  	}
  }
  mixPopups(popupElements)
  let elements = '';
  popupElements.forEach(function(el) {
  	elements += el;
  })
  $('.popups').html(elements)
  let i = 0;
  function popupAnimation() {
  	i = 1;
  	$('.popup:nth-child(' + i + ')').fadeIn(500).delay(5000).fadeOut(500);
  }
  setTimeout(function () {
   setInterval(
    function () {
     i = i + 1;
     if (i > 10) i = 1;
     $('.popup:nth-child(' + i + ')').fadeIn(500).delay(5000).fadeOut(500);
   }, 15000);
   popupAnimation();
 }, 5000);
