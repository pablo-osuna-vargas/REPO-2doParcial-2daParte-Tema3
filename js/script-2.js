// pagina 2 //
// bloque mostrar galería //
let arrayObras = [
	
	{
		titulo: "1000 platitudes",
		año: 2019,
		imagen: "img/1000_platitudes_2019.jpg"
	},

	{
		titulo: "1984 x 1984",
		año: 2015,
		imagen: "img/1984x1984_2024.jpg"
	},

	{
		titulo: "33 questions per minute",
		año: 2000,
		imagen: "img/33_questions_per_minute_2021.jpg"
	},

	{
		titulo: "A Crack in the Hourglass",
		año: 2021,
		imagen: "img/a_crack_in_the_hourglass_2021.jpg"
	},

	{
		titulo: "Airborne Newscasts, Relational Architecture 20",
		año: 2013,
		imagen: "img/airborne_newscasts_2013.jpg"
	},
]

let obra = "";
let divGaleria = document.querySelector("#galeria");

let botonVerGaleria = document.querySelector("#verGaleria");
botonVerGaleria.addEventListener("click", function(e){
e.preventDefault();
botonVerGaleria.innerText = "cliqueá de nuevo para pasar las imágenes >>>";
botonVerGaleria.style.backgroundColor = "rgba(100, 0, 100, 0.7)";
botonVerGaleria.style.color = "whitesmoke";
divGaleria.innerHTML = ""; //vacío la galería para que no se pisen las imágenes //
	let obraElegida = Math.floor(Math.random() * arrayObras.length);
		obra = arrayObras[obraElegida];
		divGaleria.style.display = "block";
		divGaleria.innerHTML = 
			`<h4>${obra.titulo} - ${obra.año}</h4>
			<img src="${obra.imagen}"></img>`;
});