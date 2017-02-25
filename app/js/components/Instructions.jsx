import React from 'react'

const Instructions = () => (
  <section className='instructions'>
    <h3>How to Use a Fibonacci Clock</h3>

    <p>
      Believe it or not, you can tell time, in 5-minute increments, with just five boxes following the <a href='https://en.wikipedia.org/wiki/Fibonacci_number'>Fibonacci numbers</a>. Here's how:
    </p>

    <p>
      First, calculate the hours by counting all of the red and blue squares.
    </p>

    <p>
      Second, calculate the minutes by counting all the green and blue squares and multiplying by 5.
    </p>

    <p>
      Together, these numbers represent the closest 5-minute increment using a standard 12-hour clock. Isn't that cool?
    </p>
  </section>
)

export default Instructions
