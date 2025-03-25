export const getCharacters = async () => {
  const response = await fetch('https://www.swapi.tech/api/people/',{
    method: 'GET',
    headers:{
      'Content-Type':'application/json'
    }
  });
  const data = await response.json();
  console.log(data);
}
export const getFilms = async () => {
  const response = await fetch('https://www.swapi.tech/api/films/',{
    method: 'GET',
    headers:{
      'Content-Type':'application/json'
    }
  });
  const data = await response.json();
  return data;
}
export const getPlanets = async () => {
  const response = await fetch('https://www.swapi.tech/api/planets/',{
    method: 'GET',
    headers:{
      'Content-Type':'application/json'
    }
  });
  const data = await response.json();
  return data;
}
export const getSpecies = async () => {
  const response = await fetch('https://www.swapi.tech/api/species/',{
    method: 'GET',
    headers:{
      'Content-Type':'application/json'
    }
  });
  const data = await response.json();
  return data;
}
export const getStarships = async () => {
  const response = await fetch('https://www.swapi.tech/api/starships/',{
    method: 'GET',
    headers:{
      'Content-Type':'application/json'
    }
  });
  const data = await response.json();
  return data;
}
export const getVehicles = async () => {
  const response = await fetch('https://www.swapi.tech/api/vehicles/');
  const data = await response.json();
  return data;
}