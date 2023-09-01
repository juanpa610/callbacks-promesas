import './style.css'
import { environmentsComponent } from './src/concepts/01-enviroments'
import { callbacksComponent } from './src/concepts/02-callbcks';
import { promiseComponent } from './src/concepts/03-promises';


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="./javascript.svg" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1> 
    
    <div class="card">
    
    </div>
    
  </div>
`
const element = document.querySelector('.card');

// environmentsComponent( document.querySelector('.card'))
// callbacksComponent( element );

promiseComponent( element );