
import Navbar from './navbar';
import Home from './home';

function App() {
  const title = 'welcome to the web app'
  const visits = '50'
  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
      <Home/>
        {/* <h1>{title}</h1>
        <p>Visited {visits} times</p>
        <p>{Math.random() * 10}</p>
        <a href='HTTP://google.com'>GOOGLE</a> */}
      </div>
      
      
    </div>
  );
}

export default App;
