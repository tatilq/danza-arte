/*Evita que la pagina se recargue*/
/*alert("Recibido");*/
$(document).ready(fuction(){
	$("#fcontacto").submit(fuction(event){
		event.preventDefault();
		
		$.ajax({
			type:'POST',
			url:'send.php',
			data:$(this).serialize(),
			sucess: function(data){
				$("#respuesta").slideDown();
				$("#respuesta").html(data);
			}
		});
		return false;
	});
});