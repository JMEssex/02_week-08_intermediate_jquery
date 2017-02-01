$('#container').on('click', function(){
  alert('You clicked the container div!');
});

$('#myBtn').on('click', function(){
  alert('You clicked me!');
  event.stopPropagation();
});

$('#drinks').append('<li>Coke</li>', '<li>Sprite</li>', '<li>Dr. Pepper</li>')

$('#foods').append("<li>Fries</li>", '<li>Tacos</li>', '<li>Burritos</li>')

$('#addDrink').on('click', function(){
  var newDrink = $('#drinkInput').val()
  if (newDrink != '') {
    $('#drinks').append('<li>' +newDrink+'</li>')

    $('#drinkInput').val('')
  }
})

$('#addFood').on('click', function(){
  var newFood = $('#foodInput').val()
  if (newFood != '') {
  $('#foods').append('<li>'+newFood+'</li>')

  $('#foodInput').val('')
  }
})

$('#foodInput').keydown(function(){
  $('#foodInput').parent().addClass('red')
})
$('#foodInput').keyup(function(){
  $('#foodInput').parent().removeClass('red')
})

$('#drinkInput').keypress(function(e){
  if(e.keyCode === 13){
    var newDrink = $('#drinkInput').val()
    if (newDrink !== '') {
      $('#drinks').append('<li>'+newFood+'</li>')
      $('#drinkInput').val('')
    }
  }
})
