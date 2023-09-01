// una promesa es un pacto entre dos partes en el cual una se compromete 
// a hacer un trabajo y la otra esta esperando el cumplimiento de la promesa y 
// si esta promesa se rompe tenemos que tomar acciones para manejar esa excepción 

import { heroes } from "../data/heroes";


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = ( element ) => {

    const  renderHero = ( hero) => {
        element.innerHTML = hero.name;
    };

    const  renderError = ( err) => {
        element.innerHTML = `
        <h2>Error:</h2>
        <h4>${err}</h4>
        `;
    };

    const id1 = '5d86371f2343e37870b91ef19';

    //1
    finHero(id1)
        .then( renderHero )
        .catch( renderError );
   
    //  ↕↕↕↕↕ Esta dos funciones tiene una 
    //sintaxis diferente pro si importar funcionan de las dos maneras 

    //2
    finHero(id1).then( data => {
        renderHero(data);
    }).catch( err => {
        renderError(err);
    });
   
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