//Un callback es una función que recibe otra función como argumento
//y este argumento se invoca dentro de la función 

import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = ( element ) => {

    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f9f80b591f499df32';

                                      // esta función seria el callback  hero?.name || 'No hay Heroe'         
    findHero(id1, (err, hero1) => {
        if (err) {
            element.innerHTML = err;
            return;
        }

        findHero(id2, (err, hero2) => {
            if (err) {
                element.innerHTML = err;
                return;
            }
            element.innerHTML = `${hero1.name} / ${hero2.name}`;
        });
    });
};

/**
 * 
 * @param {string} id 
 * @param { (error : String | Null, hero : Object) => void } callback 
 */
const findHero = ( id, callback  ) => {
    
    const hero =  heroes.find( hero => hero.id === id);

    if( !hero ){
        callback( `Hero with id ${id} not found.`);
        return;
    }

    callback( null,  hero );
}
