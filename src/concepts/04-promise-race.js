/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = ( element ) => {

    element.innerHTML = 'Loading...';

    const renderValue  = ( value ) => {
        element.innerHTML = value;
    }

    // Me sirve para identificar cual de estas promesas es mas rápida y devuelve el resultado:
    // Por ejemplo cuando hay dos servidores y queremos ver cual de los dos me devuelve la dta mas rápido pra trabajar cons esta  
    Promise.race( [
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ]).then( ( data )  => {
       renderValue( data );
    }); 
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