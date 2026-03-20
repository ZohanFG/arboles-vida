
function mostrarInfo(nombre, dato1, dato2, dato3, dato4) {
  document.getElementById("nombreArbol").textContent = nombre;
  document.getElementById("dato1").textContent = dato1;
  document.getElementById("dato2").textContent = dato2;
  document.getElementById("dato3").textContent = dato3;
  document.getElementById("dato4").textContent = dato4;

  const seccion = document.getElementById("infoArbol");
  seccion.classList.remove("oculto");
  seccion.scrollIntoView({ behavior: "smooth" });
}