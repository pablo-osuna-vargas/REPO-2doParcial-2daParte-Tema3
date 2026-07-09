// pagina 1 //
// bloque mostrar dato curioso //
let arrayDatos = [
				"Rafael Lozano-Hemmer es un artista mexicano-canadiense especializado en instalaciones interactivas en espacios públicos.",
				"Su obra combina tecnología avanzada como sensores biométricos, robótica y datos en tiempo real.",
				"En su proyecto Vectorial Elevation, ciudadanos controlaban reflectores gigantes a través de internet.",
				"Pulse Room es una instalación que traduce los latidos cardíacos de los visitantes en pulsos de luz.",
				"Su trabajo explora la relación entre el cuerpo humano, la tecnología y la vigilancia.",
				"Ha expuesto sus obras en más de 70 países alrededor del mundo.",
				"Lozano-Hemmer estudió ingeniería antes de dedicarse al arte, lo que influye en su enfoque tecnológico.",
				"Sus instalaciones suelen involucrar la participación activa del público para activar la obra.",
				"Fue ganador del prestigioso premio Ars Electronica por su innovador uso de tecnología en arte.",
				"Utiliza la luz como lenguaje poético para explorar temas de identidad, memoria y presencia."
				];

let datoCurioso = "";

let divDato = document.querySelector("#datoCurioso");

let clickBody = document.querySelector("body");
clickBody.addEventListener("click", function(){
	let datoElegido = Math.floor(Math.random() * arrayDatos.length);
	datoCurioso = arrayDatos[datoElegido];
	divDato.style.display = "block";
	divDato.style.background = "rgba(250, 230, 160, 1.0)";
	divDato.style.textAlign = "center";
	divDato.innerHTML = `<p style="color: black;">${datoCurioso}</p>`;
});