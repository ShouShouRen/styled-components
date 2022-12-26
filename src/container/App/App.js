import React from 'react';
import Logo from './logo.png';
import './App.css'


function App() {
  const [isSignInClick, setSignInClick] = React.useState(false)
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
            <div className='search'>搜尋</div>
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
      </header>
    </div>
  );
}

export default App;
