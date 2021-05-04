import React, { ReactElement } from 'react'
import useQuery from '../hooks/useQuery'

function Home(): ReactElement {
  const query = useQuery()
  const redirectUrl = query.get('redirect-url')

  const handleClickReturnHandler = (): void => {
    window.top.location.replace(
      `${redirectUrl}#/modules/payment-handler/?paykey=stella`
    )
  }

  return (
    <div>
      <div>모듈</div>
      <button onClick={handleClickReturnHandler}>통팝업웹결제창 테스트</button>
    </div>
  )
}

export default Home
