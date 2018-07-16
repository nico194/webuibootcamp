function cambiarColor() {
  $("body").css("background-color", getRandomColor());
  console.log(getRandomColor());
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

(function () {
  var updateHours = function() {
      const date = new Date();

      var hr = date.getHours();
      var min = date.getMinutes();
      var seg = date.getSeconds();
      var dWeek = date.getDay();
      var day = date.getDate();
      var month = date.getMonth();
      var year = date.getFullYear();
      var ampm;

      const pDiaSemana = document.getElementById('diaSemana');
      const pDia = document.getElementById('dia');
      const pMes = document.getElementById('mes');
      const pAno = document.getElementById('año');
      const pHora = document.getElementById('hr');
      const pMin = document.getElementById('min');
      const pSeg = document.getElementById('seg');
      const pAMPM = document.getElementById('ampm');

      const arrayDay = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
      const arrayMonth = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

      if(hr > 12){
        hr = hr - 12;
        ampm = "PM";
      }else {
        ampm = "AM";
      }

      if (hr == 0) {
        hr = 12;
      }

      if(hr < 10){
        hr = "0" + hr;
      }

      if(min < 10){
        min = "0" + min;
      }

      if(seg < 10){
        seg = "0" + seg;
      }

      pDiaSemana.textContent = arrayDay[dWeek];;
      pDia.textContent = day;
      pMes.textContent = arrayMonth[month];
      pAno.textContent = year;
      pHora.textContent = hr;
      pMin.textContent = min;
      pSeg.textContent = seg;
      pAMPM.textContent = ampm;
  }
  updateHours();
  var intervalo = setInterval(updateHours, 1000);

}())

function crear() {
  if (validarTitulo() && validarDescripcion() && validarArchivo() && validarCondiciones()) {
    alert('Se completó el formulario con éxito');
  }
}


function validarTitulo() {
  const formulario = document.getElementById('form1');
  if (formulario.titulo.value == 0) {
    alert('No completo el campo Título');
    return false;
  }else{
    return true;
  }

}

function validarDescripcion() {
  const formulario = document.getElementById('form1');
  if (formulario.descripcion.value == 0) {
    alert('No completo el campo Descripción');
    return false;
  }else{
    return true;
  }

}

function validarArchivo() {
  const formulario = document.getElementById('form1');
  if (formulario.archivo.value == "") {
    alert('No subió un archivo');
    return false;
  }else{
    return true;
  }
}

function validarCondiciones() {
  const formulario = document.getElementById('form1');
  if(formulario.condiciones.checked == false){
    alert('Acepte las condiciones para continuar');
    return false;
  }else{
    return true;
  }
}
