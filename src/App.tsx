import React from 'react'
import {Switch, Route, Link, HashRouter} from 'react-router-dom'
import Home from './pages/Home'
import Sub1 from './pages/Sub1'
import Sub2 from './pages/Sub2'
import styled from 'styled-components'

const Styled = {
  Wrap: styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
  `,

  Container: styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 500px;
    background-color: gainsboro;
  `,
}

function App() {
  return (
    <Styled.Wrap>
      <Styled.Container>
        <HashRouter>
          <ul>
            <li>
              <Link to='/sub1'>충전</Link>
            </li>
            <li>
              <Link to='/sub2'>쿠폰 등록</Link>
            </li>
          </ul>
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
