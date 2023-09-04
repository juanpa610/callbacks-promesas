// las funciones generadoras, nos generan una secuencia de valores los cuales
// nos puede servir en diferentes casos

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionComponent = ( element ) => {

    const genId = idGenerator();

    const btn = document.createElement('button');
    btn.innerHTML = 'Current id: 0 ';
    element.append(btn);

    btn.addEventListener( 'click', () => {
        btn.innerHTML = `Current id: ${genId.next().value}`
    })
};


function* idGenerator(year) {
    let currentId = 0;

    while (true) {
        yield ++currentId;
    }
}

function* myFirstGeneratorFunction() {

    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercero valor';
    yield 'Cuarto valor';

    return 'ya no hay mas valores ';
    return 'ya no se puede hacer nada';
}