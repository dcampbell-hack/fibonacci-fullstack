import { useState, useEffect } from 'react'
import Container from './components/Container'
import Form from './components/Form'
import List from './components/List'
import './App.css'

interface IData{
  status: boolean,
  answer: number,
  list: number[]
}

function App(): React.ReactElement {

  const [ page, setPage ] = useState<boolean>(false) 
  const [ answer, setAnswer ] = useState<number>(0)
  const [ number, setNumber ] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [ data, setData ] = useState<IData>({});
  const [ list, setList ] = useState<number[]>([])

  useEffect(() => {

  if(data.status === true){
    setAnswer(data.answer);
   setList([1, ...Object.values(data.list) ]);
   setPage(true)
  }

  console.log("useEffect", page, list)

  }, [data.status])

  async function submitForm(e:any): void{
    e.preventDefault();
    console.log(number)
  let response = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({number})
    })

    response = await response.json();

    if(response.status === false) setError("There was a problem. Try refreshing the app.")
    else if(response.status === true) console.log("Set Data", data), setData({ ...data, status: response.status, answer: response.answer, list: response.list })
    setNumber(0);
  }


  return (
     <main>
      <Container />
      { page ? <List list={list} setPage={setPage} answer={answer} /> : <Form submit={submitForm} setNumber={setNumber} error={error} /> }
     </main>
  )
}

export default App
