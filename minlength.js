/*
Codigo que muestra un mensaje del minimo de caracteres que deben ser ingresados en un input o textarea
Uso: $("#selector").minlength();
*/
jQuery.fn.minlength = function(){
	$(this).each(function(){ 
		return $(this).bind("keydown",function(e){
		
			$("#msg_input").remove();
			var longitud = jQuery(this).val().length;
			var minimo = jQuery(this).attr("minlength");
			var resto = minimo - longitud;
			
			if(longitud < minimo){
				jQuery(this).css("border","1px solid red");
				jQuery(this).after('<span id="msg_input" style="color:red">Faltan ' + resto + ' caracteres (minimo ' + minimo + ')</span>');
			}
			
		}).blur(function(e){
			$("#msg_input").remove();
			jQuery(this).css("border","1px solid #C3C2C2");
		});
	});
}