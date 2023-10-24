import { createRoot } from 'react-dom/client'
import './style.css'

const root= createRoot(document.querySelector('#root'))

const num1=1;

root.render(
<>
 <h1 className='urn'>Hello {num1 + "Hell" + Date.now()}</h1>
<h2>Helllo {/* hhhh*/}</h2>
 </>
)