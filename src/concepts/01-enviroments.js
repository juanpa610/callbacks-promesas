
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const environmentsComponent = ( element ) => {
    
    console.debug(import.meta.env);

    const html = `
        DEV: ${import.meta.env.DEV} <br>
        PROD: ${import.meta.env.PROD} <br>
        KEY: ${import.meta.env.VITE_API_KEY} <br>
    `;
    
    element.innerHTML = html;
};