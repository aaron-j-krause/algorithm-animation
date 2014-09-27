function shuffle(data){
	var rand, temp;
	for(var i = data.length - 1, length = data.length - 1; length >= 0; i--){
		rand = Math.floor(Math.random() * length);
		console.log(rand);
		temp = data[i];
		data[i] = data[rand];
		data[rand] = temp;
		console.log("random number: " + rand + " slot: " + data[i]);
		length--;
	}
	return data;
}
function makeTest(){
	var test = [];
	for(var i = 0; i<100; i++){
	test.push(i);
	}
	return test;
}