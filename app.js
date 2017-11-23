console.log('have fun !');
console.log(" ");
var object = {
}


object['firstName'] =  $("input#first_name").val();
object['lastName'] = $("input#last_name").val();
object['ville'] = $("input#city").val();

console.log(object);

if(object.firstName && object.lastName !== ""){
	$("#username").replaceWith(object.firstName + " "+ object.lastName + " de " + object.ville);
}
