import React from 'react'
import Center from '@/pages/Center'
import { Redirect } from 'umi'

export default function Auth(props: any) {
    if (localStorage.getItem("token")) {
        return (
            <div>
                {props.children}
            </div>
        )
    }

    return <Redirect to='/login' />

}