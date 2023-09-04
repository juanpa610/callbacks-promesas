import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {
    const id = '5d86371fd55e2e2a30fe1cc4';

    const herosIds = heroes.map( (hero) => hero.id);
    console.debug(`💎🤑  herosIds`, herosIds);

    const heroPromises = getHeroesAsync(herosIds);

    for await( const hero of heroPromises) {
        element.innerHTML += `${hero.name}, `;
    }

    // if(await getHeroAsync(id)){
    //     element.innerHTML = 'Si esta el ';
    //     return;
    // }

    // element.innerHTML = 'No existe ese hero ';
}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find( hero => hero.id === id );
}