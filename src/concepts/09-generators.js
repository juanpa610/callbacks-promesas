// las funciones generadoras, nos generan una secuencia de valores los cuales
// nos puede servir en diferentes casos

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionComponent = ( element ) => {

    const myGenerator = myFirstGeneratorFunction();

    console.debug(`💎🤑  myGenerator.next();`, myGenerator.next());
    console.debug(`💎🤑  myGenerator.next();`, myGenerator.next());
    console.debug(`💎🤑  myGenerator.next();`, myGenerator.next());
    console.debug(`💎🤑  myGenerator.next();`, myGenerator.next());
    console.debug(`💎🤑  myGenerator.next();`, myGenerator.next());

};



function* myFirstGeneratorFunction() {

    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercero valor';
    yield 'Cuarto valor';

    return 'ya no hay mas valores ';
    return 'ya no se puede hacer nada';
}