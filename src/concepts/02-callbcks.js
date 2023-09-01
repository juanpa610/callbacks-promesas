//Un callback es una función que recibe otra función como argumento
//y este argumento se invoca dentro de la función 

import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = ( element ) => {
                                      // esta función seria el callback            
    findHero('5d86371f2343e37870b91ef1', (hero) => element.innerHTML =  hero?.name);

};


/**
 * 
 * @param {string} id 
 * @param { (hero : Object) => void } callback 
 */
const findHero = ( id, callback  ) => {
    
    const hero =  heroes.find( hero => hero.id === id);

    callback( hero );
}
