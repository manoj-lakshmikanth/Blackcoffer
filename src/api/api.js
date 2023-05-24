import axios from 'axios';
let backendURL = 'https://blackcoffer-backend-seven.vercel.app';

export async function getData() {
  let options = {
    url: `${backendURL}/average`,
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    let resp = await axios(options);
    return { msg: 'success', resp };
  } catch (error) {
    console.log(error);
    return { msg: 'error', error };
  }
}

export async function getEnergy() {
  let options = {
    url: `${backendURL}/energy`,
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    let response = await axios(options);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getManufacturing() {
  let options = {
    url: `${backendURL}/manufacturing`,
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    let response = await axios(options);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getAero() {
  let options = {
    url: `${backendURL}/aero`,
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    let response = await axios(options);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getGas() {
  let options = {
    url: `${backendURL}/gas`,
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    let response = await axios(options);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getOil() {
  let options = {
    url: `${backendURL}/oil`,
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    let response = await axios(options);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getConsumption() {
  let options = {
    url: `${backendURL}/consumption`,
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    let response = await axios(options);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getWorld() {
  let options = {
    url: `${backendURL}/world`,
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    let response = await axios(options);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getNorthernAmerica() {
  let options = {
    url: `${backendURL}/northernamerica`,
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    let response = await axios(options);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getCentralAmerica() {
  let options = {
    url: `${backendURL}/centralamerica`,
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    let response = await axios(options);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getIndia() {
  let options = {
    url: `${backendURL}/india`,
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    let response = await axios(options);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getUSA() {
  let options = {
    url: `${backendURL}/usa`,
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
    url: `${backendURL}/russia`,
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    let response = await axios(options);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getPolitical() {
  let options = {
    url: `${backendURL}/political`,
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    let response = await axios(options);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getTechnological() {
  let options = {
    url: `${backendURL}/technological`,
    method: 'get',
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    let response = await axios(options);
    return response;
  } catch (error) {
    console.log(error);
  }
}
