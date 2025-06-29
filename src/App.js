import Header from './sections/header';
import Background from './sections/background';
import ScrollReveal from './blocks/TextAnimations/ScrollReveal/ScrollReveal.jsx'
import About from './sections/about'
function App() {
  return (
    <>

      <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
        <Background />
      </div>
      <Header />
      <About/>
    </>

  );
}

export default App;
