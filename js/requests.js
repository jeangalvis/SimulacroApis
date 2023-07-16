import { renderRoutes, renderPoints } from './functions.js';

const url = 'http://localhost:3000';
const headers = new Headers({ 'Content-Type': 'application/json' });

async function getRoutes() {
  try {
    const response = await fetch(`${url}/Rutas`);
    const result = await response.json();
    renderRoutes(result);
  } catch (error) {
    console.log(error);
  }
}

async function postRoutes(data) {
  let config = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(`${url}/Rutas`, config);
    const result = await response.json();
  } catch (error) {
    console.log(error);
  }
}
async function updateRoutes(data, id) {
  let config = {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(`${url}/Rutas/${id}`, config);
  } catch (error) {
    console.log(error);
  }
}

async function deleteRoutes(id) {
  let config = {
    method: 'DELETE',
    headers: headers,
  };
  try {
    const response = await fetch(`${url}/Rutas/${id}`, config);
    const result = await response.json();
  } catch (error) {
    console.log(error);
  }
}

async function getPoints(id) {
  try {
    const response = await fetch(`${url}/Puntos?RutaId=${id}`);
    const result = await response.json();
    renderPoints(result);
  } catch (error) {
    console.log(error);
  }
}

async function postPoints(data) {
  let config = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(`${url}/Puntos`, config);
    const result = await response.json();
  } catch (error) {
    console.log(error);
  }
}

async function deleteMultiplePoints(tr, id) {
  try {
    const response = await fetch(`${url}/Puntos?RutaId=${id}`);
    const result = await response.json();
    console.log(result);
    if (result != null || result != []) {
      result.map((point) => deletePoints(point.id));
    }
  } catch (error) {
    console.log(error);
  }
}
async function updatePoints(data, id) {
  let config = {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(`${url}/Puntos/${id}`, config);
  } catch (error) {
    console.log(error);
  }
}

async function deletePoints(id) {
  let config = {
    method: 'DELETE',
  };
  try {
    const response = await fetch(`${url}/Puntos/${id}`, config);
    const result = await response.json();
  } catch (error) {
    console.log(error);
  }
}

export {
  getRoutes,
  postRoutes,
  deleteRoutes,
  getPoints,
  postPoints,
  deleteMultiplePoints,
  deletePoints,
  updateRoutes,
  updatePoints,
};
