// async transforma para este ejemplo la función finHero para que esta retorne no 
// el name de un hero si  no que retorne una promesa que resuelve el name de un hero;

// las funciones asíncronas no siguen el hilo principal de código,
// es como si se ejecutaran a un destiempo del hilo principal 

import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = ( element ) => {

    const idHero1 = '5d86371f1efebc31def272e2';
    console.log('Inicio del componente ');
    
    // código asíncrono
    findHero(idHero1)
        .then((name) => {
            element.innerHTML = name;
            console.log(name);
        }).catch((err) => {
            element.innerHTML = err;
        });
    // fin código asíncrono
    
    console.log('Fin del componente ');
};

/**
 * 
 * @param {String} idHero 
 * @returns {Promise<String>}
 */
const findHero = async (idHero) => {

    const hero = heroes.find( hero => hero.id === idHero);

    if(!hero) 
        throw new Error(`Hero with id : ${idHero}, not found `);

    return hero.name;

}