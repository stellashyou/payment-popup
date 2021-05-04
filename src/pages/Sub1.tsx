import React, { ReactElement } from 'react'
import styled from 'styled-components'

const Styled = {
  Wrap: styled.div`
    height: 400px;
  `,
}

function Sub1(): ReactElement {
  return <Styled.Wrap>Sub1</Styled.Wrap>
}

export default Sub1
