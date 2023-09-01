// una promesa es un pacto entre dos partes en el cual una se compromete 
// a hacer un trabajo y la otra esta esperando el cumplimiento de la promesa y 
// si esta promesa se rompe tenemos que tomar acciones para manejar esa excepción 

import { heroes } from "../data/heroes";


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = ( element ) => {

    const renderHero = ( hero) => {
        element.innerHTML = hero.name;
    };

    const renderTwoHeros = ( hero1 , hero2) => {
        debugger
        element.innerHTML = `
            <h2>Heros:</h2>
            <h4>${hero1.name} - ${hero2.name}</h4>
        `;
    };

    const  renderError = ( err) => {
        element.innerHTML = `
        <h2>Error:</h2>
        <h4>${err}</h4>
        `;
    };

    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f25a058e5b1c8a65e';

    //1
    finHero(id1)
        .then( renderHero )
        .catch( renderError );
   
    //  ↕↕↕↕↕ Esta dos funciones tiene una 
    //sintaxis diferente pro si importar funcionan de las dos maneras 

    //2
    finHero(id1).then( hero1 => {
        finHero(id1).then( hero2 => {
            renderTwoHeros(hero1, hero2);
        }).catch( err => {
            renderError(err);
        });    
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