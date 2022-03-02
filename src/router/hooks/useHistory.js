import { useContext } from 'react'
import { RouterContext  } from '../component/router'

export default function useHistory() {
    return useContext(RouterContext).history
}