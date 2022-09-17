$(".offer-btn").hover(function () {
    $(this).toggleClass("bounce-btn");
 });





 
 
// var inputFields = {
// 	fname : $('input[name="fname"]'),
// 	lname : $('input[name="lname"]')
// }

$('input').on('change keyup focus', function(){
	if ($(this).val().length > 1) {
		$(this).addClass('filled');
	} else {
		$(this).removeClass();
		$('.errorMsg').remove();
	}
})
$('#form').submit(function(e){
	e.preventDefault();
	var errors = {}
	
	var inputFieldsArray = ['first', 'last'];
	var patt = new RegExp("^[a-zA-Z0-9_.-]*$");
	
	for(i=0; inputFieldsArray.length > i; i++){
		var fieldname = $('#'+inputFieldsArray[i]+'');
		// alert(fieldname.val().length);
		 // alert(patt.test(fieldname.val()));
		if(fieldname.val().length < 1 && patt.test(fieldname.val()) == false) {
			fieldname.removeClass();
			fieldname.addClass('invalid');
			// errors.inputFieldsArray[i] = "please include your " + inputFieldsArray[i] + " name.";
		} else if(fieldname.val().length >= 1 && patt.test(fieldname.val()) == true){
			fieldname.removeClass();
			fieldname.addClass('valid');
		} else {
			fieldname.removeClass();
			fieldname.addClass('invalid');
		}
	}
	
	if ($(this).val().length > 1) {
		$(this).addClass('filled');
	} else {
		$(this).removeClass();
		$('.errorMsg').remove();
	}
// 	$('.inputValidate').each(function(){
// 		var fieldName = $(this);
		
// 		if(fieldName.val().length < 1) {
// 			fieldName.removeClass();
// 			fieldName.addClass('invalid inputValidate');
// 			errors.fname = "please include your " + fieldName + " name.";
// 		} else {
// 			fieldName.removeClass();
// 			fieldName.addClass('valid inputValidate');
// 		}
// 	})
	
	// checks on each input
// 	if (inputFields.fname.val().length < 1) {
// 		inputFields.fname.removeClass();
// 		inputFields.fname.addClass('invalid');
// 		errors.fname = "please include your first name";
// 	} else {
// 		inputFields.fname.removeClass();
// 		inputFields.fname.addClass('valid');
// 	}
	
// 	if (inputFields.lname.val().length <= 1) {
// 		inputFields.lname.removeClass();
// 		inputFields.lname.addClass('invalid');
// 		errors.lname = "please include your last name";
// 	} else {
// 		inputFields.lname.removeClass();
// 		inputFields.lname.addClass('valid');
// 	}
	// end of checks
	
	$('.errorMsg').remove();
	$('.invalid').after('<span class="errorMsg" style="color:red; position: absolute;bottom: -25px;">Please Fill This Out Correctly</span>');
	
	for(var inputName in errors){
		var messages = errors[inputName];
		// alert(messages);
	}
	
})