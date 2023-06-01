
import './style.css';


interface Clientes {
  nombre: string;
  apellido: string;
  edad: number;
  email: string;
  Empresa: string;
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hola Cintia</h1>
`;

const app = document.querySelector<HTMLDivElement>('#app');
const home = document.querySelector<HTMLAnchorElement>('#home');
const clientes = document.querySelector<HTMLAnchorElement>('#clientes'); // contactanos
const crearClientes = document.querySelector<HTMLAnchorElement>('#crearClientes'); // ayuda

home?.addEventListener('click', () => {
	app!.innerHTML = `<h1> Hola desde Home </h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
	
	app!.classList.add('animate__animated');
	app!.classList.add('animate__bounce');
	// TODO: optimizar
	
});

clientes?.addEventListener('click', () => {
	app!.innerHTML = `<div class="input-group animate__fadeIn">
  <span class="input-group-text">First and last name</span>
  <input type="text" aria-label="First name" class="form-control">
  <input type="text" aria-label="Last name" class="form-control">
</div>`;

	app!.classList.add('animate__animated');
	app!.classList.add('animate__bounce');
	// TODO: optimizar
	home!.classList.remove('active');
	crearClientes!.classList.remove('active');
	clientes!.classList.add('active');
});

crearClientes?.addEventListener('click', () => {
	app!.classList.add('animate__animated');
	app!.classList.add('animate__bounce');
	app!.innerHTML = `
	<h1>Crear Cliente</h1>
	<form id="crearClienteForm">
	  <label for="nombre">Nombre:</label>
	  <input type="text" id="nombre" name="nombre" required>
	  <br><br/>
	  <label for="apellido">Apellido:</label>
	  <input type="text" id="apellido" name="apellido" required>
	  <br><br/>
	  <label for="edad">Edad:</label>
	  <input type="number" id="edad" name="edad" required>
	  <br><br/>
	  <label for="email">Email:</label>
	  <input type="email" id="email" name="email" required>
	  <br><br/>
	  <label for="empresa">Empresa:</label>
	  <input type="text" id="empresa" name="empresa" required>
	  <br><br/>
	  <button type="submit">Crear</button>
	</form>
  `;
	// TODO: optimizar
	home!.classList.remove('active');
	clientes!.classList.remove('active');
	crearClientes!.classList.add('active');
	//const cliente _ cargarValores()
  });

  //function cargarValores(){
	//const nombre = document.querySelector("#nom")

  
	
  





