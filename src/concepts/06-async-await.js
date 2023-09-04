// El await siempre va a estar envuelto en una función async es una regla general,
// el await lo que hace es que dice que se tiene que esperar el resultado


// esto que se hizo a continuación se hace exclusivamente cuando el resultado 
// de una segunda promesa depende del primer resultado de una promesa 


import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async ( element ) => {
    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371fd55e2e2a30fe1cc4';

    try {
        const {name: name1 } =  await finHero( id1);
        const  {name: name2 } =  await finHero( id2 );
        
        element.innerHTML = ` ${name1} / ${name2}`
    } catch (error) {
        element.innerHTML = ` ${error}`;
    }

};

const finHero = async ( id ) => {
    const hero = heroes.find( hero => hero.id === id );
    if( !hero )
        throw new Error(`Hero with id: ${id}, not found`);

    return hero;
};