import { tableBody_Routes, tableBody_Points } from './selectors.js';

function renderRoutes(result) {
  tableBody_Routes.innerHTML = '';
  result.forEach((element) => {
    let tr = document.createElement('tr');
    tr.setAttribute('id', `${element.id}`);
    tr.setAttribute('class', 'tr');
    tr.setAttribute('nameRoute', `${element.NomRuta}`);
    tr.innerHTML = `
    <td>${element.id}</td>
    <td>${element.NomRuta}</td>
    <td>
      <div class="d-flex gap-3">
        <button class="btn btn-warning" type="button" data-accion="Ver" value="Ver" >
          <i class="fa-solid fa-eye" style="color: #ffffff"></i>
        </button>
        <button class="btn btn-primary" type="button" data-accion="Actualizar" value="Actualizar" data-bs-toggle="modal" data-bs-target="#updateRouteModal">
          <i class="fa-solid fa-pen-to-square" style="color: #ffffff"></i>
        </button>
        <button class="btn btn-danger" type="submit" data-accion="Eliminar" value="Eliminar">
          <i class="fa-solid fa-trash-can" style="color: #ffffff"></i>
        </button>
      </div>
    </td>
    `;
    tableBody_Routes.appendChild(tr);
  });
}

function renderPoints(result) {
  tableBody_Points.innerHTML = '';
  result.forEach((element) => {
    let tr = document.createElement('tr');
    tr.setAttribute('id', `${element.id}`);
    tr.setAttribute('class', 'tr');
    tr.setAttribute('namePoints', `${element.NomPuntos}`);
    tr.innerHTML = `
    <td>${element.id}</td>
    <td>${element.NomPuntos}</td>
    <td>
      <div class="d-flex gap-3">
        <button class="btn btn-primary" type="button" data-accion="Actualizar" value="Actualizar" data-bs-toggle="modal" data-bs-target="#updatePointModal">
          <i class="fa-solid fa-pen-to-square" style="color: #ffffff"></i>
        </button>
        <button class="btn btn-danger" type="submit" data-accion="Eliminar" value="Eliminar">
          <i class="fa-solid fa-trash-can" style="color: #ffffff"></i>
        </button>
      </div>
    </td>
    `;
    tableBody_Points.appendChild(tr);
  });
}

export { renderRoutes, renderPoints };
