//Un callback es una función que recibe otra función como argumento
//y este argumento se invoca dentro de la función 

import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = ( element ) => {
                                      // esta función seria el callback  hero?.name || 'No hay Heroe'         
    findHero('5d86371f2343e37870b91ef1', (err, hero) => {
        if (err) {
            element.innerHTML = err;
            return;
        }
        element.innerHTML =  hero.name;
    });

};


/**
 * 
 * @param {string} id 
 * @param { (error : String |Null, hero : Object) => void } callback 
 */
const findHero = ( id, callback  ) => {
    
    const hero =  heroes.find( hero => hero.id === id);

    if( !hero ){
        debugger
        callback( `Hero with id ${id} not found.`);
        return;
    }

    callback( null,  hero );
}
