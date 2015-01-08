$(document).ready(inicio);

function inicio () {
	// $(".acceso").fadeOut();
	$("#verMenu").click( monstrarMenu );

	// $(".boxMensajes h4").fadeOut("slow");
	$("#entrar").click( entrar );
}

function cambialo (){
	alert("lo cambio")
}
function monstrarMenu (){
	$("#contenido").toggleClass("izquierda")
	// $("#menuLateral").toggleClass("oculto")
}
function entrar(){
	$(".participar").fadeOut();
	$(".acceso").fadeIn();
}