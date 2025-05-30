import './App.css'

function App() { 
  return (
    <>
      <div>
          <img src="./SNOWeb.png" className="logo" alt="Vite logo" height={'100px'} />
          <h1>¿Que buscas?</h1>
      </div>
      <div id="menu">
        <button onClick={() => window.open("https://wa.me/+525538903746", "_blank")}>
          <h3>Un Manual de Marca</h3>
          <p>Define la identidad visual y lineamientos de tu marca para garantizar coherencia en todos tus materiales.</p>
        </button>
        <button onClick={() => window.open("https://wa.me/+525538903746", "_blank")}>
          <h3>Un Plan de Mercadotecnia</h3>
          <p>Estrategia de tallada con tacticas, canales y calendario para alcanzar tus objetivos de ventas.</p>
        </button>
        <button onClick={() => window.open("https://wa.me/+525538903746", "_blank")}>
          <h3>Una Parrilla de Contenido</h3>
          <p>Calendario organizado de publicaciones y temas para mantener tu audiencia siempre conectada.</p>
        </button>
        <button onClick={() => window.open("https://wa.me/+525538903746", "_blank")}>
          <h3>Una web para vender</h3>
          <p>Sitio web optimizado, facil de usar y disenado para convertir visitas en clientes</p>
        </button>
        <button onClick={() => window.open("https://wa.me/+525538903746", "_blank")}>
          <h3>Edicion de video</h3>
          <p>Transformamos tu material en historias impactantes con cortes, s inmersivas que superponen elementos digitalesal mundo real desde cualquier dispositivo.</p>
        </button>
        <button onClick={() => window.open("https://wa.me/+525538903746", "_blank")}>
          <h3>Automatizar mi negocio</h3>
          <p>Implementacion de flujos y herramientas que ahorran tiempo y reducen errores operativos.</p>
        </button>
        <button onClick={() => window.open("https://wa.me/+525538903746", "_blank")}>
          <h3>Un display ad interactivo</h3>
          <p>Banner digital con elementos clicables y animaciones para captar atencion y clicks.</p>
        </button>
        <button onClick={() => window.open("https://wa.me/+525538903746", "_blank")}>
          <h3>Realidad Virtual</h3>
          <p>Entornos 3D inmersivos que trasladan al usuario a nuevas realidades y experiencias unicas.</p>
        </button>
        <button onClick={() => window.open("https://wa.me/+525538903746", "_blank")}>
          <h3>Realidad Aumentada</h3>
          <p>Superponemos elementos digitales al mundo real desde cualquier dispositivo.</p>
        </button>
      </div>
      <br/>
      <br/>
      <a href="https://wa.me/+525538903746">Otra cosa</a>
      <br/>
      <footer>
        Orthocana &copy; 2025
      </footer>
    </>
)}

export default App
