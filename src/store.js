export const initialStore=()=>{
  return{
    message: null,
    vehicles: [],
    characters: [],
    species: [],
    starships: [],
    planets: [],
    films: [],
    loading: false,
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'get_characters':
      return {
        ...store,
        characters: action.payload,
        loading: false,
      };
    case 'get_vehicles':
      return {
        ...store,
        vehicles: action.payload,
        loading: false,
      };
    case 'get_species':
      return {
        ...store,
        species: action.payload,
        loading: false,
      };
    case 'get_starships':
      return {
        ...store,
        starships: action.payload,
        loading: false,
      };
    case 'get_planets':
      return {
        ...store,
        planets: action.payload,
        loading: false,
      };
    case 'get_films':
      return {
        ...store,
        films: action.payload,
        loading: false,
      };
    default:
      throw new Error('Invalid action type')
  };
}

