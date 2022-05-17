import React, { useEffect, useState } from 'react'
import { useHistory } from 'umi'

export default function Nowplaying() {
  const [list, setList] = useState([])
  const history = useHistory()

  useEffect(() => {
    fetch("/test.json").then(res => res.json()).then(res => {
      setList(res.data.films)
    })
  }, [])
  return (
    <div>
      {
        list.map((x: any) => (
          <li key={x.filmId} onClick={() => {
            history.push(`/detail/${x.filmId}`)
          }}>{x.name}</li>
        ))
      }
    </div>
  )
}
