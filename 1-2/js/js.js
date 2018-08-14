//1) На сайте в форме обратной связи добавьте следующие поля:
//a) поле даты рождения;
//b) ошибочные поля подсветить с помощью какого-нибудь эффекта (например, Bounce).
//2) Все возвращаемые ошибки выводить с помощью виджета Dialog.
//3) Создать карусель популярных товаров в шапке.
//4) *C помощью jQuery UI добавить возможность перемещать товар прямо в корзину мышью.

function myTest (id, pattern) {
  pattern = pattern;
  result = pattern.test(document.getElementById(id).value);
  if (!result) {
    $( "#" + id ).css("border-color", "red");
    $( "#" + id ).toggle( "bounce", { times: 3 }, "slow" );
    $( "#" + id ).toggle( "highlight" );
  } else {
    $( "#" + id ).css("border-color", "green");
  }
}


document.getElementById('sendButton').onclick = function() {
  var id = "myName";
  var pattern = /[a-z]|[A-Z]/;
    myTest(id, pattern);
  
  id = "myPhone";
  pattern = /\+\d\(\d\d\d\)\d\d\d-\d\d\d\d/;
    myTest(id, pattern);
  
  id = "myMail";
  pattern = /\w*\-*\.*\w+\@mail.ru/;
    myTest(id, pattern);
  
  id = "myText";
  pattern = /\w/;
    myTest(id, pattern);
};


$.getJSON( "data.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<option value='" + key + "'>" + val + "</option>" );
  });
 
  $( "<select/>", {
    "class": "select-test",
    html: items.join( "" )
  }).appendTo( "div.form" );
});

$( function() {
  $( "#dateBirth" ).datepicker();
} );

  // В форму обратной связи добавить возможность выбора города обращения. 
  // Сам список должен загружаться после загрузки страницы через AJAX.