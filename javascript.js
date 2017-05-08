function ficha(nombre, apellido, edad, fechaNac, lugarNac, imagen, hobbies){

  this.nombre= nombre;
  this.apellido= apellido;
  this.edad= edad;
  this.fechaNac = fechaNac;
  this.lugarNac = lugarNac;
  this.imagen= imagen;
  
  this.hobbies = function(uno, dos, tres){

    this.uno = uno;
    this.dos = dos;
    this.tres = tres;

    document.write("<strong>" + " Hobbies: " + "</strong>" + "<ul>" + "<li>" + this.uno + "</li>" + "<li>" + this.dos + "</li>" + "<li>" + this.tres + "</li>" + "</ul>");
  }
  
  this.fichaCom = function(){
    document.write(this.imagen + "<br>" + "<strong>" + " Nombre: " + "</strong>" + this.nombre + " " + this.apellido + "<br>" + "<strong>" + "Edad: " + "</strong>" + this.edad +"<br>" + "<strong>" + "Fecha de nacimiento: " + "</strong>" + this.fechaNac +"<br>" + "<strong>" + "Lugar de nacimiento: " + "</strong>" + this.lugarNac + "<br>");
  }    
}

var nath = new ficha("natalia", "Garrido", 27, "23/08/1989", "Santiago", "<img src=\"nath.jpg\" width=\"200\" height=\"200\">");
var pola = new ficha("Paola", "Urra", 28, "18/07/1988", "Santiago", "<img src=\"pola.jpg\" width=\"200\" height=\"200\">");
var mina = new ficha("Romina", "Torres", 31, "08/12/1985", "Santiago", "<img src=\"mina.jpg\" width=\"200\" height=\"200\">");
var pau = new ficha("Paulina", "Gonzalez", 26, "27/10/1990", "Santiago", "<img src=\"pau.jpg\" width=\"200\" height=\"200\">");
var kat = new ficha("Katerine", "Sandoval", 24, "29/01/1993", "Curacautin", "<img src=\"kat.jpg\" width=\"200\" height=\"200\">");   
var nat = new ficha("Natalia", "Vivanco", 27, "13/05/1989", "Santiago", "<img src=\"nat.png\" width=\"200\" height=\"200\">");
var vane = new ficha("Vanessa", "Pérez", 35, "23/04/1982", "Puerto Montt", "<img src=\"vane.jpg\" width=\"200\" height=\"200\">");
var coni = new ficha("Constanza", "Carrasco", 23, "28/06/1993", "Viña del mar", "<img src=\"coni.jpg\" width=\"200\" height=\"200\">");
var su = new ficha("Susana", "Cruces", 23, "03/11/1983", "Santiago", "<img src=\"su.jpg\" width=\"200\" height=\"200\">");


function comentario(){
	var input = document.getElementById("coment");
	var contComent = document.getElementsByClassName("coment");
	contComent[0].innerHTML += "<li>" + input.value + "</li>" + "<br>";
	input.value = " ";
}








