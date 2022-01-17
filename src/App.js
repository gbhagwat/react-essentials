import './App.css';

//every React component has access to this object called 'props'
// 'props' object is going to hold all our properties for the component
function Header(props){
  console.log(props)
  return (
    <header>
      <h1>Elle's Kitchen</h1>
    </header>
  )
}

function Main(){
  return (
    <section>
      <p>We serve the most delicious food around.</p>
    </section>
  )
}

function Footer(){
  return (
    <footer>
      <p>It's true.</p>
    </footer>
  )
}


function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
