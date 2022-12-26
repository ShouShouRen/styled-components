import React from 'react';
import Logo from './logo.png';
import './App.css'


function App() {
  // const [isSignInClick, setSignInClick] = React.useState(false)
  const [searchStart, setSearchStart] = React.useState(false)
  return (
    <div>
      <header style={{
        padding: 60
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <div>
            <img src={Logo} />
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div className='search'>
              <i onClick={() => setSearchStart(!searchStart)} className='fas fa-search'></i>
              <input className={searchStart ? 'open' : ''} placeholder="搜尋網站目標" type='text' />
            </div>
            <div className='navigation'>
              <ul>
                <li>Recipes</li>
                <li>Dinner TV</li>
                <li>Cooking School</li>
                <li>About</li>
              </ul>
            </div>
            <div>
              <button className='sign-in-btn'>Sign Up</button>
            </div>
          </div>
        </div>
        <div style={{
          marginTop: 110
        }}>
          <div style={{ fontSize: 48, fontWeight: 600 }}>Let's Get Cooking</div>
          <div style={{ marginTop: 25, fontSize: 16 }}>Explore the best recipes from around the world.</div>
          <button style={{ marginTop: 25, padding: '10px 25px' }}>Explore Recipes</button>
        </div>
      </header>
    </div>
  );
}

export default App;
