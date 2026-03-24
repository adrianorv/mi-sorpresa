const fechaInicio = new Date("2025-09-27T21:30:00");

function actualizarContador() {
    const ahora = new Date ();
    const diferencia = ahora - fechaInicio;
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor(diferencia / (1000 * 60 * 60)) % 24;
  const minutos = Math.floor(diferencia / (1000 * 60)) % 60;
  const segundos = Math.floor(diferencia / 1000) % 60;

  document.getElementById("contador").innerHTML =
    dias + " días, " +
    horas + " horas, " +
    minutos + " minutos, " +
    segundos + " segundos 💜";
}
setInterval(actualizarContador,1000);
function mostrarSorpresa(){
    document.getElementById("sorpresa").style.display = "block";
}