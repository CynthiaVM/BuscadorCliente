// 1. instalar axios
// 2. crear interface iUsuario
// 3. crear archivo usuarioService.ts
// 	 a. crear funcion que reciba como parametro un obj de tipo iUsuario y envie 
//      con axios utilizando el metodo post a el endpoint correspondiste de la siguiente api
//  https://api-user-production.up.railway.app/api


import axios from 'axios';
import { iUsuario } from './usuario.Interfaces';
import { iclientes } from '../Clientes/InterfacesCliente';

const URL = 'https://api-user-production.up.railway.app';

export const crearClientes=async(c:iclientes)=>{
  const response= await axios.post(`${URL}/usuarios`,c);
  const data: iclientes= response.data
  if(response.status !=201){
    return  console.error('Fallo crear cliente')
  }
  return console.log(`creo el cliente ${data.id}`);
};

export const getUsuario = async (): Promise<iUsuario[]> => {
	const { data } = await axios.get<iUsuario[]>(`${URL}/usuarios`);

	return data;
};


//export function createUsuario(u: iUsuario) {
  // Realiza la solicitud POST a la API utilizando Axios
  //return axios.post('https://api-user-production.up.railway.app', u)
    //.then(response => {
      // Maneja la respuesta exitosa de la API aquí
      //.log(response.data);
      //return response.data; // Devuelve los datos de respuesta si es necesario
//})
//.catch(error => {
      // Maneja los errores de la API aquí
      //console.error(error);
     // throw error; // Lanza el error para que pueda ser capturado en el código que llama a createUsuario()
    //});
//}
