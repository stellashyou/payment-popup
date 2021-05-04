import React from 'react'
import { Switch, Route, HashRouter } from 'react-router-dom'
import Home from './pages/Home'
import Sub1 from './pages/Sub1'
import Sub2 from './pages/Sub2'
import styled from 'styled-components'

const Styled = {
  Wrap: styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: rgba(38, 45, 57, 0.72);
  `,

  Container: styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 0;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 0;
  `,
}

function App() {
  return (
    <Styled.Wrap>
      <Styled.Container>
        <HashRouter>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/sub1' component={Sub1} />
            <Route path='/sub2' component={Sub2} />
          </Switch>
        </HashRouter>
      </Styled.Container>
    </Styled.Wrap>
  )
}

export default App
