import React from 'react'
import { useHistory } from 'umi'

function Center() {
  const history = useHistory()
  return (
    <div>Center
      <button onClick={() => {
        localStorage.removeItem("token")
        console.log(history)
      }}>logout</button>
    </div>
  )
}

Center.wrappers = ["@/wrappers/Auth"]

export default Center