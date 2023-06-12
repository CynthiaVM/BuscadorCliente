import { iUsuario } from './usuario.Interfaces';

export function generarTablaUsuarios(
  usuarios: iUsuario[],
  div: HTMLDivElement | null
) {
  if (!div) {
    console.error('El elemento div no se encontró.');
    return;
  }

  if (usuarios.length === 0) {
    console.error('NO SE ENCONTRARON DATOS');
    return;
  }

  const encabezados: (keyof iUsuario)[] = Object.keys(
    usuarios[0]
  ) as (keyof iUsuario)[];

  const tabla = document.createElement('table');
  tabla.classList.add('table', 'table-striped');

  const thead = document.createElement('thead');
  const encabezadosRow = document.createElement('tr');

  encabezados.forEach((e) => {
    const th = document.createElement('th');
    th.textContent = e;
    encabezadosRow.appendChild(th);
  });

  thead.appendChild(encabezadosRow);
  tabla.appendChild(thead);

  const tbody = document.createElement('tbody');

  usuarios.forEach((u) => {
    const fila = document.createElement('tr');
    encabezados.forEach((e) => {
      const celda = document.createElement('td');
      celda.textContent = u[e]?.toString() || null;
      fila.appendChild(celda);
    });
    tbody.appendChild(fila);
  });

  tabla.appendChild(tbody);
  div.innerHTML = '';
  div.appendChild(tabla);
}
