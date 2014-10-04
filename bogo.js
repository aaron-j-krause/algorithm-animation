
var quote =  {
	reference: ['a rose', 'by any', 'other', 'name']
};
quote.random = shuffle(quote.reference);

function shuffle(array){

  var m = array.length, t, i, newArray = [];
  for(i in array){
  	newArray.push(array[i]);
  }
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = newArray[m];
    newArray[m] = newArray[i];
    newArray[i] = t;
  }

  return newArray;
}


function bogo(quote){

	var tic = quote.reference.length, 
		match, 
		bubbles = [], 
		c = 0;


		//make array of bubble divs
		$('.bubble').each(function(){
			bubbles.push($(this));
		});

		//check array, populate bubbles
		for(var i = 0, length = quote.random.length; i < length; i++){
			var bubble = bubbles[i];
			bubble.html('<p>' + quote.random[i] + '</p>');

			if(quote.random[i] != quote.reference[i]){
				tic--;
			}
		}

		//check quote
		if(tic < quote.reference.length){
			$('header p').show().fadeOut(600);
			quote.random = shuffle(quote.random);

		} else {
			$('header p').show()
						 .attr('color', 'blue')
						 .text('FINALLY');
		}


}


$(function(){
	$('.button').on('click', function(){
		bogo(quote);
	})


});
