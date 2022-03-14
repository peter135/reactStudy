import React, {useEffect,useRef,useImperativeHandle,forwardRef} from 'react'

const SonComponent = forwardRef((props,ref)=>{

    useImperativeHandle(ref, () => {
        return {
          logSon: () => {
            console.log('测试');
          }
        }
    },[])

    return(
        <>
            <div>   
                <input type="text" defaultValue={props.value} ref={ref} />
                <button onClick={() => console.log(ref.current)}>点击打印ref</button>
            </div>
        </>
    )

})

 const FatherComponent = () => {
    const sonRef = useRef()
    useEffect(()=>{
        sonRef.current.logSon() 
    },[])

    return (
        <>
            <SonComponent ref={sonRef} value='这是子组件的value值' />
        </>
    )
}

export default FatherComponent;