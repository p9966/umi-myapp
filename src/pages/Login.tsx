import React, { useState } from 'react'
import { useHistory } from 'umi'

export default function Login() {
  const [uid, setUid] = useState("")
  const [pwd, setPwd] = useState("")
  const history = useHistory()
  return (
    <div>
      <input type="text" onChange={(evt) => {
        setUid(evt.target.value)
      }} />
      <input type="password" onChange={(evt) => {
        setPwd(evt.target.value)
      }} />
      {uid} - {pwd}
      <button onClick={() => {
        fetch("/users/login", {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            uid,
            pwd
          })
        }).then(res => res.json()).then(res => {
          if (res.ok) {
            localStorage.setItem("token", uid)
            history.push("/center")
          }
          else {
            alert("用户名密码不匹配")
          }
        })
      }}>login</button>
    </div>
  )
}
