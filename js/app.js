//obtencion de la API
var api = {
  url: "http://laboratoria.cuadra.co:9339/api/v1/students/"
};
// obtencion del area
var $listaAlumnas = $("#lista-alumnas");


var cargarPagina = function(){
  cargarAlumnas();
};


var cargarAlumnas = function(){
  $.getJSON(api.url, function(alumnas){
    alumnas.forEach(crearAlumna)
  })
};

var crearAlumna = function(alumna){
  var alumnaName = alumna.name;
  var alumnaPlastName = alumna.pLastName;
  var id = alumna.id;

  var $tr = $("<tr />", {
    "data-id":id
  });

  //CREAR celdas+td
  //nombre
  var $alumnaNameTd = $("<td />");
  $alumnaNameTd.text(alumnaName);
  //apellido Paterno
  var $alumnaPlastNameTd = $("<td />");
  $alumnaPlastNameTd.text(alumnaPlastName);


  //AGREGAR celdas td->tr
  $tr.append($alumnaNameTd);
  $tr.append($alumnaPlastNameTd);

  //AGREGA FILAS tr -> table
  $listaAlumnas.append($tr);
};

$(document).ready(cargarPagina);
