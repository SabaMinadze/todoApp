import { useState, useRef } from "react";



function Test1() {
  
  function handleclick() {
    setCount(count + 1)
    
  }

  function reset() {
    setCount(7)
  }

  function submit(e) {
    setInpt(e.target.value)
    console.log(inpt);
    
  }
  

  const [count, setCount] = useState(0)
  const [inpt, setInpt] = useState("")
  const num1 = useRef(10)
  const btnRef = useRef(null)
  const txtRef = useRef(null)
  const bodyRef = useRef(null)

  function changeColor() {
    if (btnRef.current) {
      btnRef.current.style.backgroundColor = "red";
      txtRef.current.textContent = "hi"
      txtRef.current.style.marginLeft = "200px"
      bodyRef.current.style.backgroundColor = "orange"

    }
    
  }

  

  
  return (
    <div className="main" ref={bodyRef}>
      <h1>Hello world</h1>
      <button onClick={handleclick}>increase</button>
      <h2>{count}</h2>
      <button onClick={reset}>decrease</button>
      <br/><br/>
      <input type="text" name="txt1" required onChange={submit}/>
      <br/><br/>
      <input type="submit" value="Add text" onClick={() => {
        setInpt("testtest123")
      }}/>
      <h1></h1>
      <br /><br />
      <h2>{inpt}</h2>
      <button ref={btnRef} onClick={changeColor}>Appear Text</button>
      <h1 ref={txtRef}></h1>
    </div>
  )
}

export default Test1