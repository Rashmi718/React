import { useState } from "react"

function App() {
  const [color , setColor] = useState('white');

  return (
    <>
      
      <div className="w-full h-screen duration-200"
        style = {{backgroundColor : color}}>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-5">
        <div className="flex flex-wrap justify-center gap-12 
        shadow-lg bg-white px-3 py-1 rounded-3xl">

          <button 
          onClick={()=> setColor('black')}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor : 'black'}}>
            black
          </button>

          <button 
          onClick={()=> setColor('red')} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor : 'red'}}>
            red
          </button>

          <button 
          onClick={()=> setColor('pink')}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor : 'pink'}}>
            pink
          </button>

          <button 
          onClick={()=> setColor('blue')}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor : 'blue'}}>
            blue
          </button>

          <button
          onClick={()=> setColor('olive')}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor : 'olive'}}>
            olive
          </button>

          <button
          onClick={()=> setColor('lavender')}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor : 'lavender'}}>
            lavender
          </button>

          <button
          onClick={()=> setColor('yellow')}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor : 'yellow'}}>
            yellow
          </button>

          <button
          onClick={()=> setColor('brown')}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor : 'brown'}}>
            brown
          </button>

          <button
          onClick={()=> {
            const color = prompt("Enter a color")
            setColor(color)
          }}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl bg-black"
          style={{backgroundColor : 'color'}}>
           + 
          </button>

        </div>
        </div>
      </div>
    </>
  )
}

export default App
