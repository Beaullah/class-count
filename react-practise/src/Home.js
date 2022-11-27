import React from 'react'

export default function Home() {
   function handleClick(){
    return(
      console.log("hello")
    )

  }
  function handleClickAgain (name){
    console.log('hello' + name)
  }
  return (
    <div className='home content'>
        <h2>Homepage</h2>
        <button onClick={handleClick}>Click me</button>
        <button onClick={ function handleClickAgain(){
          console.log('mario')
        }}>Click me again</button>
    </div>
  )
}
