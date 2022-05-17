import React from 'react'
import { useParams } from 'umi'

interface IParams {
    id: string
}

export default function Detail(props: any) {
    // 可以从props中获取传入的参数
    console.log(props)
    const params = useParams<IParams>()
    return (
        <div>
            Detail - {params.id}
        </div>
    )
}
