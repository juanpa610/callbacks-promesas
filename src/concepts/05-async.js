// async transforma para este ejemplo la función finHero para que esta retorne no 
// el name de un hero si  no que retorne una promesa que resuelve el name de un hero;

import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = ( element ) => {

    const idHero1 = '5d86371f1efebc31def272e2';

    findHero(idHero1).then((name) => {
        element.innerHTML = name;
    }).catch((err) => {
        element.innerHTML = err;
    });
};

/**
 * 
 * @param {String} idHero 
 * @returns {Promise<String>}
 */
const findHero = async (idHero) => {

    const hero = heroes.find( hero => hero.id === idHero);

    return hero?.name;

}