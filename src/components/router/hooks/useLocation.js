import { useContext } from 'react'
import { RouterContext  } from '../component/router'

export default function  useLocation() {
    return useContext(RouterContext).location
}