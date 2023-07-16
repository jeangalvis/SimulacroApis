import {
  getRoutes,
  postRoutes,
  deleteRoutes,
  getPoints,
  postPoints,
  deleteMultiplePoints,
  deletePoints,
  updateRoutes,
  updatePoints,
} from '../requests.js';
import {
  btn_AddRoute,
  field_NameRoute,
  tableBody_Routes,
  tableBody_Points,
  btn_AddPoint,
  field_NamePoint,
  btn_UpdateRoute,
  field_UpdateNameRoute,
  points,
  field_updateNamePoint,
  btn_UpdatePoint,
} from '../selectors.js';
class App {
  constructor() {
    this.initApp();
  }
  initApp() {
    let tempId = 0;
    getRoutes();
    btn_AddRoute.addEventListener('click', (e) => {
      e.preventDefault();
      let ruta = {
        NomRuta: field_NameRoute.value,
      };
      postRoutes(ruta);
    });

    tableBody_Routes.addEventListener('click', (e) => {
      e.preventDefault();
      let tr = e.target.closest('tr');
      let nameRoute = tr.getAttribute('nameRoute');
      let button = e.target.closest('button');
      let id = tr.id;
      if (button != null) {
        let accion = button.dataset.accion;
        if (accion === 'Ver') {
          points.classList.remove('d-none');
          tempId = id;
          getPoints(id);
        } else if (accion === 'Eliminar') {
          deleteMultiplePoints(id);
          deleteRoutes(id);
        } else if (accion === 'Actualizar') {
          field_UpdateNameRoute.value = nameRoute;
          btn_UpdateRoute.addEventListener('click', (e) => {
            e.preventDefault();
            let ruta = {
              id: id,
              NomRuta: field_UpdateNameRoute.value,
            };
            updateRoutes(ruta, id);
          });
        }
      }
    });
    btn_AddPoint.addEventListener('click', (e) => {
      e.preventDefault();
      let punto = {
        NomPuntos: field_NamePoint.value,
        RutaId: parseInt(tempId),
        Imagen: '',
      };
      postPoints(punto);
    });
    tableBody_Points.addEventListener('click', (e) => {
      e.preventDefault();
      let tr = e.target.closest('tr');
      let namePoints = tr.getAttribute('namePoints');
      let button = e.target.closest('button');
      let id = tr.id;
      if (button != null) {
        let accion = button.dataset.accion;
        if (accion === 'Eliminar') {
          deletePoints(id);
        } else if (accion === 'Actualizar') {
          field_updateNamePoint.value = namePoints;
          btn_UpdatePoint.addEventListener('click', (e) => {
            e.preventDefault();
            let punto = {
              id: id,
              NomPuntos: field_updateNamePoint.value,
              RutaId: parseInt(tempId),
              Imagen: '',
            };
            updatePoints(punto, id);
          });
        }
      }
    });
  }
}

export default App;
