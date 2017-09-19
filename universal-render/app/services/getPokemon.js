import request from 'axios';
import data from './mock';

const getPokemon = {
  withAbility: (ability) => {
    const baseUrl = 'http://pokeapi.co/api/v2/ability';
    return request.get(`${baseUrl}/${ability}/`).catch(() => data); 
  }
};

export default getPokemon;
