import React from 'react'
import Button from './components/Button'
import Layout from './components/Layout'
import CodePointInfo from './components/CodePointInfo'
import RowInfo from './components/RowInfo'

function App() {

  const nombres = ['pepe', 'juan', 'maria', 'diego'];
  const resultado = nombres.map((nombre) => nombre.toUpperCase());
  console.log(resultado); 

const listaJSXNombres = [
  <div>pepe</div>,
  <div>juan</div>,
  <div>maria</div>,
  <div>diego</div>,
]


  return (
     <div>
      <h2>Nombres</h2>
      {listaJSXNombres}
     </div>
  )
}


const ContactScreen = () => {
  return (
    <Layout>
      <h2>Esta es la pagina de contacto</h2>
      <form action="">

      </form>
      <Button>
        Click <i class="bi bi-window-sidebar"></i>
      </Button>
    </Layout>
  )
}
const ProductsScreen = () => {
  return (
    <Layout>
      <h2>Esta es la pagina de productos</h2>
      <h3>Este es el subtitulo</h3>
      
    </Layout>
  )
}

function CodePointIn() {
  return (
      <CodePointInfo>
        <span>Unicode: U+F61F</span>
        <span>CSS: \F61F</span>
        <span>JS: \uF61F</span>
        <span>HTML: &#xF&1F ;</span>
      </CodePointInfo>
  )
}


function RowIn() {
  return (
  <>
    <RowInfo title="Icon font">
      <p>Using the web font? Copy, paste, and go.</p>
      <pre>
      <code>
        {`<i class="bi bi-window-sidebar"></i>`}
      </code>
      </pre>
      
    </RowInfo>
    <RowInfo title="Code Point">
      <span>Unicode: U+F61F</span>
      <br />
      <span>CSS: \F61F</span>
      <br />
      <span>JS: \uF61F</span>
      <br />
      <span>HTML: &#xF61F</span>
      <br />
    </RowInfo>
    <RowInfo title="Copy HTML">
      <p>Paste the SVG right into your project's code.</p>
      <code>
        {`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-window-sidebar" viewBox="0 0 16 16">
        <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
        <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1zM1 13V6h4v8H2a1 1 0 0 1-1-1m5 1V6h9v7a1 1 0 0 1-1 1z"/>
        </svg>`}
      </code >
    </RowInfo>
  </>
  )
}
export default App

