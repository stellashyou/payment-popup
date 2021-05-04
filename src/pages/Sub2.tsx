import React, { ReactElement } from 'react'
import styled from 'styled-components'

const Styled = {
  Wrap: styled.div`
    height: 400px;
  `,
}

function Sub2(): ReactElement {
  return <Styled.Wrap>Sub2</Styled.Wrap>
}

export default Sub2
