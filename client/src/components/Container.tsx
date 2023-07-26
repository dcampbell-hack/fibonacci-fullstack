import React from 'react'

const Container = () => {
  return (
    <div className="container">
    <header>
      <h2>Fib Calculator</h2>
    </header>

    <div>
        <h1>Calculate fibonacci numbers fast!</h1>
        <p>Use the world's best fibonacci Calculator!</p>
    </div>

    <div className='testimonial'>
    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3149&q=80" width="90px" height="auto" />
      <div className='review'>
      <p>Simply the best fibonacci calculator of all time. It is the first app I open when I wake up.</p>
        <div className='author'>
          <h3>Jacob Smith</h3>
          <i>Mathematician</i>
        </div>
      </div>
    </div>
</div>
  )
}

export default Container
