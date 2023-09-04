/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwait2Component = async  ( element ) => {
    console.time('Start')

    // const value1 = await slowPromise();
    // const value2 = await mediumPromise();
    // const value3 = await fastPromise();


    //Promise all espera a que cada promesa se resuelva para asignar el valor  
    const [value1, value2, value3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise() 
    ]);

    element.innerHTML = `${value1} <br/> ${value2} <br/> ${value3}`;

    console.timeEnd('Start');
};

const slowPromise = ( ) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Slow promise');
        }, 2000);
    });
};

const mediumPromise = ( ) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Medium  promise');
        }, 1500);
    });
};

const fastPromise = ( ) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Fast promise');
        }, 1000);
    });
};