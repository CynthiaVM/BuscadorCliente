
import './style.css';
import { iclientes } from './Clientes/InterfacesCliente';
import { generarTablaUsuarios } from './usuarios/tabla';
import { getUsuario } from './usuarios/usuario.Service';
import { iUsuario } from './usuarios/usuario.Interfaces';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Bienvenido</h1>
`;

document.addEventListener('DOMContentLoaded', async () => {
  const divTabla = document.querySelector<HTMLDivElement>('#divTablaUsuarios')!;
  const usuarios = await getUsuario();
  generarTablaUsuarios(usuarios, divTabla);
});

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
	  <label for="telefono">Telefono:</label>
	  <input type="number" id="telefono" name="telefono" required>
	  <br><br/>
	  <label for="email">Email:</label>
	  <input type="email" id="email" name="email" required>
	  <br><br/>
	  <label for="empresa">Empresa:</label>
	  <input type="text" id="empresa" name="empresa" required>
	  <br><br/>
	  <label for="cuit">CUIT:</label>
	  <input type="text" id="cuit" name="cuit" required>
	  <br><br/>
	  <label for="direccion">Direccion:</label>
	  <input type="text" id="direccion" name="direccion" required>
	  <br><br/>
	  <label for="localidad">Localidad:</label>
	  <input type="text" id="localidad" name="localidad" required>
	  <br><br/>
	  <label for="pais">Pais:</label>
	  <input type="text" id="pais" name="pais" required>
	  <br><br/>
	  <button type="submit">Crear</button>
	</form>
  `;
	// TODO: optimizar
	home!.classList.remove('active');
	clientes!.classList.remove('active');
	crearClientes!.classList.add('active');
	//const cliente _ cargarValores()

	const form = document.querySelector('#crearClienteForm');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  //  elementos de entrada
  const nombreInput = document.querySelector<HTMLInputElement>('#nombre');
  const apellidoInput = document.querySelector<HTMLInputElement>('#apellido');
  const telefonoInput = document.querySelector<HTMLInputElement>('#telefono');
  const emailInput = document.querySelector<HTMLInputElement>('#email');
  const empresaInput = document.querySelector<HTMLInputElement>('#empresa');
  const cuitInput = document.querySelector<HTMLInputElement>('#cuit');
  const direccionInput = document.querySelector<HTMLInputElement>('#direccion');
  const localidadInput = document.querySelector<HTMLInputElement>('#localidad');
  const paisInput = document.querySelector<HTMLInputElement>('#pais');

  // Verificar la validez de cada campo
  if (nombreInput && apellidoInput && telefonoInput && emailInput && empresaInput && cuitInput && direccionInput && localidadInput && paisInput) {
    if (!nombreInput.checkValidity()) {
      // El campo nombre no es válido
      
      return;
    }
    if (!apellidoInput.checkValidity()) {
      // El campo apellido no es válido
      
      return;
    }
    if (!telefonoInput.checkValidity()) {
      // El campo telefono no es válido
      
      return;
    }
    if (!emailInput.checkValidity()) {
      // El campo email no es válido
     
      return;
    }
    if (!empresaInput.checkValidity()) {
      // El campo empresa no es válido
      
      return;
    }
    if (!cuitInput.checkValidity()) {
      // El campo cuit no es válido
      
      return;
    }
    if (!direccionInput.checkValidity()) {
    
      return;
    }
    if (!localidadInput.checkValidity()) {
      
      return;
    }
    if (!paisInput.checkValidity()) {
      
      return;
    }

    // Validación específica para el campo de teléfono
    const telefonoValue = telefonoInput.value;
    if (telefonoValue.length < 8 || telefonoValue.length > 18) {
      // El campo telefono no cumple con los requisitos
      // lógica de error o muestra un mensaje 
      return;
    }

    // Hace el envío del formulario
    const nombre = nombreInput.value;
    const apellido = apellidoInput.value;
    const telefono = telefonoInput.value;
    const email = emailInput.value;
    const empresa = empresaInput.value;
    const cuit = cuitInput.value;
    const direccion = direccionInput.value;
    const localidad = localidadInput.value;
    const pais = paisInput.value;

// Agregar el cliente al array
const nuevoCliente: iclientes = {
  nombre,
  apellido,
  telefono,
  email,
  empresa,
  cuit,
  direccion,
  localidad,
  pais,
};

// aca se puede realizar alguna acción con el cliente, como enviarlo al servidor o mostrarlo en la consola
console.log(nuevoCliente);
// tambien se puede agregar el cliente a una lista de clientes cargados y mostrarla en la sección de clientes
// Enviar el objeto `nuevoCliente` al servicio API utilizando la función `createUsuario`
const crearUsuarioPromise = (usuario: iUsuario): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    getUsuario(usuario)
      .then((response: unknown) => {
        resolve(response);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};

const nuevoUsuario = {
  nombre: 'Jose',
  apellido: 'Gomez',
  telefono: '43314514',
  email: 'jose.gomez@gmail.com',
  empresa: 'culis srl',
  cuit:  '30709968971',
  direccion: 'arata 1524',
  localidad: 'caba',
  pais: 'argentina',
};

crearUsuarioPromise(nuevoUsuario)
  .then((response) => {
    console.log('Usuario creado:', response);
  })
  .catch((error) => {
    console.error('Error al crear usuarios:', error);
  });


// mostrar los clientes cargados en la sección de clientes
const clientesSection = document.querySelector<HTMLDivElement>('#clientes-section');
if (clientesSection) {
  const clienteElement = document.createElement('p');
  clienteElement.innerText = `${nuevoCliente.nombre} ${nuevoCliente.apellido} (${nuevoCliente.empresa})`;
  clientesSection.appendChild(clienteElement);
}


  }
  
});


  });

  //function cargarValores(){
	

  
	
  





