import React from 'react'

const Instructions = () => (
  <section className='instructions'>
    <h3>How to Use a Fibonacci Clock</h3>

    <p>
      Believe it or not, you can tell time, in 5-minute increments, with just five boxes following the <a href='https://en.wikipedia.org/wiki/Fibonacci_number'>Fibonacci numbers</a>. Here's how:
    </p>

    <p>
      Each square has a value associated with it. In this case, the value is the length of one of its sides. Hence, the sequence of 1, 1, 2, 3, 5.
    </p>

    <p>
      To calculate the hours, add up the value of the red and blue squares.
    </p>

    <p>
      Then, to calculate the minutes, add up the values of the green and blue squares, then multiply this value by 5.
    </p>

    <p>
      Together, these numbers represent the closest 5-minute increment using a standard 12-hour clock. Isn't that cool?
    </p>
  </section>
)

export default Instructions
