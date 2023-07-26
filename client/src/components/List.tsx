import React from 'react'

interface IList{
    list: number[],
    answer: number,
    setPage: React.Dispatch<boolean>
}

const List = ({ list, answer, setPage }: IList): React.ReactElement => {
  return (
    <div className='list-container attention'>
        <div className='list-numbers'>
        { 
        !list.length ? 
          <p>No items to show</p> 
          :
          list.map((num: number) => <div style={{ backgroundColor:  num === answer ? 'yellow' : "#e4e4e4"  }} className="box">
          <strong>{num}</strong>
         </div>)
    }
    </div>

    <div className='go-back'>
    <div className='answer'>The nth number of Fibonacci is: {answer}</div>
        <button onClick={() => setPage(false)}>Go Back</button>
    </div>
    </div>
  )
}

export default List
