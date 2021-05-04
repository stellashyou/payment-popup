import React, { ReactElement } from 'react'
import useQuery from '../hooks/useQuery'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Styled = {
  Wrap: styled.div`
    padding: 16px;
  `,
  Card: styled.div`
    width: 80%;
    height: 200px;
    background-color: #f2f2f2;
    border-radius: 8px;
    margin: 0 auto;
  `,
  SubWrap: styled.div`
    padding-top: 20px;
  `,
  Link: styled(Link)`
    display: inline-block;
    border: 1px solid #858585;
    width: 50px;
    text-align: center;
    margin-right: 10px;
  `,
  Button: styled.button`
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    box-sizing: border-box;
    font: initial;
    text-decoration: none;
    cursor: pointer;
    margin-top: 10px;
    width: 100%;
    height: 52px;
    background-color: #3581ff;
    color: #fff;
    font-size: 18px;
  `,
}

function Home(): ReactElement {
  const query = useQuery()
  const redirectUrl = query.get('redirect-url')

  const handleClickReturnHandler = (): void => {
    window.top.location.replace(
      `${redirectUrl}#/modules/payment-handler/?paykey=stella`
    )
  }

  return (
    <Styled.Wrap>
      <Styled.Card />
      <Styled.SubWrap>
        <Styled.Link to='/sub1'>SUB 1</Styled.Link>
        <Styled.Link to='/sub2'>SUB 2</Styled.Link>
      </Styled.SubWrap>

      <Styled.Button onClick={handleClickReturnHandler}>확인</Styled.Button>
    </Styled.Wrap>
  )
}

export default Home
