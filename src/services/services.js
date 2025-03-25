export const getCharacters = async (dispatch) => {
  const response = await fetch('https://www.swapi.tech/api/people/',{
    method: 'GET',
    headers:{
      'Content-Type':'application/json'
    }
  });
  const data = await response.json();
  dispatch({type:'GET_CHARACTERS', payload:data});
}
export const getFilms = async (dispatch) => {
  const response = await fetch('https://www.swapi.tech/api/films/',{
    method: 'GET',
    headers:{
      'Content-Type':'application/json'
    }
  });
  const data = await response.json();
  dispatch({type:'GET_FILMS', payload:data});
}
export const getPlanets = async (dispatch) => {
  const response = await fetch('https://www.swapi.tech/api/planets/',{
    method: 'GET',
    headers:{
      'Content-Type':'application/json'
    }
  });
  const data = await response.json();
  dispatch({type:'GET_PLANETS', payload:data});
}
export const getSpecies = async (dispatch) => {
  const response = await fetch('https://www.swapi.tech/api/species/',{
    method: 'GET',
    headers:{
      'Content-Type':'application/json'
    }
  });
  const data = await response.json();
  dispatch({type:'GET_SPECIES', payload:data});
}
export const getStarships = async (dispatch) => {
  const response = await fetch('https://www.swapi.tech/api/starships/',{
    method: 'GET',
    headers:{
      'Content-Type':'application/json'
    }
  });
  const data = await response.json();
  dispatch({type:'GET_STARSHIPS', payload:data});
}
export const getVehicles = async (dispatch) => {
  const response = await fetch('https://www.swapi.tech/api/vehicles/',{
    method: 'GET',
    headers:{
      'Content-Type':'application/json'
    }
  });
  const data = await response.json();
  dispatch({type:'GET_VEHICLES', payload:data});
}