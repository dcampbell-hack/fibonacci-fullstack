import React from 'react'


interface IForm{
    submit: (e: any) => void,
    error: string, 
    setNumber: React.Dispatch<React.SetStateAction<number>>
}

const Form = ({ submit, setNumber, error  }: IForm): React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>  => {
  return (
    <form onSubmit={submit} className='attention'>
    <div className='form-controller'>
      <label>Enter Number</label>
      <input type='number' placeholder='Number' min='0' onChange={e => setNumber(parseInt(e.target.value))} />
      <button>Calculate</button>
     { error.length > 0 && <div className='error'>{error}</div> }
    </div>

  </form>
  )
}

export default Form
