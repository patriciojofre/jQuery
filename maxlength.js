/*
Codigo que muestra un mensaje del mximo de caracteres permitidos en un input o textarea
Uso: $("#selector").maxlength();
*/
jQuery.fn.maxlength = function(){
	$(this).each(function(){ 
		return $(this).bind("keyup",function(e){
		
			$("#msg_input").remove();
			var longitud = jQuery(this).val().length;
			var maximo = jQuery(this).attr("maxlength");
			var resto = maximo - longitud;
			
			if(longitud <= maximo){
				jQuery(this).css("border","1px solid green");
				jQuery(this).after('<span id="msg_input" style="color:green">' + resto + '/' + maximo + '</span>');
			}

		}).blur(function(e){
			$("#msg_input").remove();
			jQuery(this).css("border","1px solid #C3C2C2");
		});
	});
}