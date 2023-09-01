// una promesa es un pacto entre dos partes en el cual una se compromete 
// a hacer un trabajo y la otra esta esperando el cumplimiento de la promesa y 
// si esta promesa se rompe tenemos que tomar acciones para manejar esa excepción 

import { heroes } from "../data/heroes";


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = ( element ) => {
    console.log( 'promiseComponent' );
  
};

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const finHero = ( id ) => {

    return new Promise(  (resolve, reject) => {
        const hero = heroes.find( hero => hero.id === id );

        if( hero){
            resolve( hero );
            return;
        }

        reject(`Hero with id ${id} not found`);

    });
    

}