import './App.css';

function App() {
  return (
    <div className='page'>
      <header className="header">
        <div className="layout">
          <img className='logo' src="https://image.winudf.com/v2/image/aW8uc21hbGxkYXRhbGFiLmFuZHJvaWQuY29udGV4dF9pY29uXzBfYzE3ZDkyZWM/icon.png?w=340&fakeurl=1" alt=''/>
        </div>
      </header>
      <div className="layout">
        <div className="page__wrapper">
          <div className="sidebar">
            <nav className='menu'>
              <ul>
                <li>
                  <a href="#s">Feed</a>
                </li>
                <li>
                  <a href="#S">Message</a>
                </li>
                <li>
                  <a href="#s">Music</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="body"></div>
        </div>
      </div>

    </div>
  );
}

export default App;
