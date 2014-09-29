
var quote =  {
	reference: ['a rose', 'by any', 'other', 'name']
};
quote.random = betterShuffle(quote.reference);

function betterShuffle(data){

  var m = data.length, t, i, next = [];
  for(i in data){
  	next.push(data[i])
  }
  while (m) {

    i = Math.floor(Math.random() * m--);
    t = next[m];
    next[m] = next[i];
    next[i] = t;
  }

  return next;
}

function bogo(quote){
	console.log(quote.reference + " : " + quote.random);
	var c = 0, tic = 0, match;
	do{
		tic = quote.reference.length;
		for(var i = 0, length = quote.random.length; i < length; i++){
			if(quote.random[i] != quote.reference[i]){
				tic--;
			}
		}
		console.log(tic);
		if(tic < quote.reference.length){
			match = false;
		}else{
			match = true;
		}

		if(match == false){
			quote.random = betterShuffle(quote.random);
		};
		c++;
		console.log(quote.random)

	}while(match == false && c < 150);
	console.log(quote.random +"!!!");
	console.log(c);
	return match;
}





