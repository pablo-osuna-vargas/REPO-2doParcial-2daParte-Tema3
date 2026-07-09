// variables y capturas iniciales //
let cantidad;
let kwhXhora;
let costoKwh;

let arrayObras = [];

let captura = document.querySelector("#form");
let salida = document.querySelector("#resumen");

let botonCantidad = document.querySelector("#cargarCantidad");
let botonCargarObra = document.querySelector("#cargarObra");
let botonCargarConsumo = document.querySelector("#cargarConsumo");
let botonEnviarForm = document.querySelector("#enviarFormulario");
let botonRecargarPag = document.querySelector("#reset");

// 1.botón cargar cantidad, habilita obra //
botonCantidad.addEventListener("click", function(e){
	e.preventDefault();

	cantidad = Number(document.querySelector("#cantidad").value);

	if(cantidad <= 0 || isNaN(cantidad)) {
		alert("ingrese un número válido");
		document.querySelector("#cantidad").value = "";
		return;
	} else {
		document.querySelector("#obra").disabled = false;
	}
})


// 2.botón cargar obra, habilita consumo eléctrico //
botonCargarObra.addEventListener("click", function(e){
	e.preventDefault();
	let titulo = document.querySelector("#titulo").value;
	let cantLuces = Number(document.querySelector("#cantLuces").value);
	let horasXdia = Number(document.querySelector("#horasXdia").value);

	if(titulo === "" || !isNaN(titulo)) {
		alert("ingrese un nombre válido");
		return;
	}

	if(cantLuces <= 0 || isNaN(cantLuces)) {
		alert("ingrese un número válido");
		return;
	}

	if(horasXdia <= 0 || isNaN(horasXdia)) {
		alert("ingrese un número válido");
		return;
	}

	// Validación de título repetido
	for (let i = 0; i < arrayObras.length; i++) {
	    if (arrayObras[i].titulo === titulo) {
	        alert("Ya existe una obra con ese título");
	        return;
	    }
	}

	let objetoObra = {
		titulo: titulo,
		cantLuces: cantLuces,
		horasXdia: horasXdia
		}

	arrayObras.push(objetoObra);
	console.log(arrayObras);

	document.querySelector("#titulo").value = "";
	document.querySelector("#cantLuces").value = "";
	document.querySelector("#horasXdia").value = "";

	if(arrayObras.length === cantidad){
		alert("se han cargado todas las obras");
		document.querySelector("#consumoKwh").disabled = false;
		return;
	}
});


// 3.botón cargar consumo eléctrico, habilita envío formulario //
botonCargarConsumo.addEventListener("click", function(e){
e.preventDefault();
kwhXhora = Number(document.querySelector("#kwhXhora").value);
costoKwh = Number(document.querySelector("#costoKwh").value);

	if(kwhXhora <= 0 || isNaN(kwhXhora)) {
		alert("ingresá un numero válido");
		return;
	}

	if(costoKwh <= 0 || isNaN(costoKwh)) {
		alert("ingresá un número válido");
		return;
	}

	document.querySelector("#enviarFormulario").disabled = false;
});


// 4.botón enviar formulario //
botonEnviarForm.addEventListener("click", function (e){
	e.preventDefault();
	calcular();
	salida.style.display = "block";
})

// aqui la definicion de function //
function calcular() {

	let totalKwhDiario = 0;
	let consumoPromedio;
	let obraMayorFunc = arrayObras[0];
	let mas20 = 0;

	arrayObras.forEach(function(objeto){
		totalKwhDiario += objeto.horasXdia * kwhXhora;
		consumoPromedio = totalKwhDiario / cantidad;

		if(objeto.horasXdia > obraMayorFunc.horasXdia) {
			obraMayorFunc = objeto;
		}

		if(objeto.cantLuces > 20) {
			mas20++;
		}
	})

	let costoDiarioObraMayor = obraMayorFunc.horasXdia * costoKwh;
	let porcentajeMas20 = (mas20 * 100) / cantidad;
	
	salida.innerHTML = 
	`<h2>Resumen</h2>
	<ul>
		<li>Consumo diario: Kwh${totalKwhDiario}</li>
		<li>Promedio de consumo: Kwh${consumoPromedio}</li>
		<li>Obra de mayor tiempo de funcionamiento: ${obraMayorFunc.titulo}, con un costo diario de: $${costoDiarioObraMayor}</li>
		<li>Porcentje de obras con mas de 20 luces: %${porcentajeMas20}</li>
	</ul>`;
}

let recargar = document.querySelector("#reset");
recargar.addEventListener("click", function() {
    location.reload();
});