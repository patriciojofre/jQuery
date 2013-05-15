/*
Funcion que valida campos de un formulario
Uso: 
-Añadir a la clase la palabra validar, y añadir atributo ALT con mensaje a mostrar. 
-Luego en tu codigo JS llamar la funcion validarIngreso con el nombre del formulario en el argumento: validarIngreso($("#form_req")[0]);

Ejemplo: <input type="text" name="test" class="validar" alt="Debe ingresar valor para este campo"/>
*/
function validarIngreso(form){

	var error = null;

	$(':input', form).each(function() {
		var mensaje = $(this).attr("alt");
		var clase	= $(this).attr("class");	
		var estado	= $(this).attr("disabled");	
		var type = this.type;
		
		if(/validar/.test(clase) && estado!="disabled"){
			if(type == "radio"){
				var $siguiente = $(this).next(':input');
				if (!$(this).prop('checked') && !$($siguiente).prop('checked')) {
					if(mensaje){ alert(mensaje); }
					error = 1;
					return false;
				}
			}else{
				if($(this).val() == ''){
					if(mensaje){ alert(mensaje); }
					$(this).focus();
					$(this).css("border","1px solid red");
					error = 1;
					return false;
				}else{
					$(this).css("border","1px solid #999999");
				}
			}
		}else if(estado=="disabled"){
			$(this).css("border","1px solid #999999");
		}
	});
	
	if(error == 1){
		return false;
	}else{
		return true;
	}
}