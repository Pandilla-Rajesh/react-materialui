import React, { useEffect, useReducer, useState } from 'react'

const inistialState = {count:0}
// const STATE = {error:false, loading:false, post:{}}

const Reducer=(state, action)=>{
   
    switch(action.type){
        case  'Increment':
            return {count: state.count+1};
        case 'Decrement':
            return {count: state.count-1};
        case 'Reset':
            return {count:0}
        default:
            throw new Error('Unknown action type')
    }
}

function Counter(){
    const [state, dispatch] = useReducer(Reducer, inistialState)
    const [count, setCount] = useState(0)
    useEffect(()=>{
        document.title = `You Clicked: ${count} times`
        console.log(count, `You Clicked ${count} times`)
    }, [count])

    return(
        <>
          <section>
            <div className='container ms-auto'>
                 <div className='flex flex-col flex-wrap w-auto items-center justify-center mb-10'>
                        <h2 className='text-3xl text-slate-50 mb-2'>Clicked Browser Window</h2>
                        <h1 className='text-4xl mb-3 font-semibold text-slate-50'>Count : {count}</h1>
                        <div className='flex gap-3'>
                                <button className='rounded px-3 py-2 bg-slate-800 text-slate-50' 
                        onClick={()=>setCount((prev) => prev+1)}>Increment</button>
                        <button className='bg-red-600 text-slate-50 px-3 py-2 rounded'
                       onClick={()=>{if(count > 0) setCount((prev) => prev-1)}}>Decrement</button>
                         <button className='rounded px-3 py-2 bg-pink-800'
                         onClick={()=>setCount((0))}>Reset</button>      
                        </div>
                    </div>
                <div className='row'>
                    <div className='bg-green-800 px-3 py-3 rounded-lg my-2'>
                        <h2 className='text-center font-semibold text-slate-50 text-3xl'>Welcome Reducer function</h2>
                    </div>
                    <div className='flex gap-3 justify-center items-center flex-col'>
                        <div>
                             <h1 className='text-3xl text-slate-50 mb-2 font-semibold'>Counter: {state.count}</h1>
                        </div>
                        <div className='flex gap-4'>
                             <button className='bg-blue-900 text-slate-50 px-3 py-2 rounded-lg shadow-lg' 
                        onClick={()=>dispatch({type:'Increment'})}>Ince+</button>
                        <button className='bg-purple-800 text-slate-50 rounded-lg px-3 py-2' 
                        onClick={()=>dispatch({type:'Decrement'})}>Dec-</button>
                        <button className='bg-red-900 text-slate-50 rounded-lg px-3 py-2' 
                        onClick={()=>dispatch({type:'Reset'})}>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
          </section>
        </>
    )
}

export default Counter