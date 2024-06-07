import { useEffect, useState,useCallback } from "react"


export default function Pass() {
  const [length, setlength] = useState('8')
  const [isNum, setisNum] = useState(false)
  const [ischar, setischar] = useState(false)
  const [Password, setPassword] = useState('')

  const passwordGenerator = useCallback(() => {
    let Password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (isNum) str += "0123456789"
    if (ischar) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      Password+= str.charAt(char)
      
    }

    setPassword(Password)


  }, [length, isNum, ischar, setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length, isNum, ischar,passwordGenerator])

  const handlecopy = ()=>{
    window.navigator.clipboard.writeText(Password)
  }

  return (
        <>
        <div className="d-flex align-items-center" style={{height : '100vh'}}>
        <div className="container my-3  border rounded p-3 " style={{width :"50%"}} data-bs-theme="dark">
        <label htmlFor="Password" className="form-label" style={{color : "white"}}>Password Generater</label>
        <input type="text" id="Password" className="form-control " value={Password} onChange={(e)=> setPassword(e.target.value)} aria-describedby="passwordHelpBlock" />
        <div className="d-flex flex-row my-3 align-items-baseline">
        <input type="range" className="my-2" min={8} value={length} onChange={(e)=> setlength(e.target.value)} max={99} name="length" id="length" />
        <label htmlFor="length"  className="form-label mx-2 text-white">{length}</label>
        <input className="form-check-input my-2" type="checkbox" value={isNum} onChange={()=>{setisNum(!isNum)}} id="num"/>
        <label className="form-label mx-2 text-white" htmlFor="char">Include Numbers</label>
        <input className="form-check-input my-2" type="checkbox" value={ischar}  onChange={()=>{setischar(!ischar)}} id="char"/>
        <label className="form-label mx-2 text-white" htmlFor="char">Include Characters</label>
        <button type="button" onClick={handlecopy} className="btn btn-primary  mx-2">Copy</button>
        </div>
        </div>
        </div>
        </>


  )
}
