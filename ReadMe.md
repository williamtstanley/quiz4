Anchor text inclues 'eal'
$("a:contains('eal')").css('color', 'red')


Stop a link from functioning and fade it when clicked.
version 1
$("a").click(function(event){
  event.preventDefault();
  $(this).fadeOut();
});
version 2 (better for links that are created after page load etc.)
$("document").on("click", "a", function(event){
  event.preventDefault();
  $(this).fadeOut();
});





