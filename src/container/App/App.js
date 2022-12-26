import React from 'react';
import Logo from './logo.png';
import './App.css';
import{
  StyledAppHeader,
  StyledAppHeaderContent,
  StyledAppHeaderNavigationBar,
  StyledExploerButton,
  StyledSignInButton
}from './App.Styled';

function App() {
  // const [isSignInClick, setSignInClick] = React.useState(false)
  const [searchStart, setSearchStart] = React.useState(false)
  return (

    <StyledAppHeader>
      <StyledAppHeaderNavigationBar>
        <div>
          <img src={Logo} />
        </div>
        <div className='navigation-list'>
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
            <StyledSignInButton>Sign Up</StyledSignInButton>
          </div>
        </div>
      </StyledAppHeaderNavigationBar>
      <StyledAppHeaderContent>
        <div className='content-title'>Let's Get Cooking</div>
        <div className='content-text'>
          <p>Explore the best recipes from around the world.</p>
          <p>Make cooking enjoyble again.</p>
        </div>
        <StyledExploerButton>Explore Recipes</StyledExploerButton>
      </StyledAppHeaderContent>
    </StyledAppHeader>
  );
}

export default App;
