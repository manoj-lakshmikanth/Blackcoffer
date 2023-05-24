import axios from 'axios';

export async function getData() {
  let options = {
    url: 'http://localhost:8000/average',
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    let resp = await axios(options);
    // console.log(resp);
    return { msg: 'success', resp };
  } catch (error) {
    console.log(error);
    return { msg: 'error', error };
  }
}

export async function getEnergy() {
  let options = {
    url: 'http://localhost:8000/energy',
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    let response = await axios(options);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getManufacturing() {
  let options = {
    url: 'http://localhost:8000/manufacturing',
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    let response = await axios(options);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getAero() {
  let options = {
    url: 'http://localhost:8000/aero',
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    let response = await axios(options);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getGas() {
  let options = {
    url: 'http://localhost:8000/gas',
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    let response = await axios(options);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getOil() {
  let options = {
    url: 'http://localhost:8000/oil',
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    let response = await axios(options);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getConsumption() {
  let options = {
    url: 'http://localhost:8000/consumption',
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    let response = await axios(options);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getWorld() {
  let options = {
    url: 'http://localhost:8000/world',
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    let response = await axios(options);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getNorthernAmerica() {
  let options = {
    url: 'http://localhost:8000/northernamerica',
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    let response = await axios(options);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getCentralAmerica() {
  let options = {
    url: 'http://localhost:8000/centralamerica',
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    let response = await axios(options);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getIndia() {
  let options = {
    url: 'http://localhost:8000/india',
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    let response = await axios(options);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getUSA() {
  let options = {
    url: 'http://localhost:8000/usa',
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    let response = await axios(options);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getRussia() {
  let options = {
    url: 'http://localhost:8000/russia',
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    let response = await axios(options);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getPolitical() {
  let options = {
    url: 'http://localhost:8000/political',
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    let response = await axios(options);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getTechnological() {
  let options = {
    url: 'http://localhost:8000/technological',
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    let response = await axios(options);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}
