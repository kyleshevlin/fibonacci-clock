import React from 'react'

const Instructions = () => (
  <section className='instructions'>
    <h3>How to Use a Fibonacci Clock</h3>

    <p>
      Believe it or not, you can tell time, in 5-minute increments, with just five boxes following the <a href='https://en.wikipedia.org/wiki/Fibonacci_number'>Fibonacci numbers</a>. Here's how:
    </p>

    <p>
      Each square is worth the length of one of its sides. Thus, if we assign the smallest squares the value of 1, you end up with five boxes whose values are 1, 1, 2, 3, and 5.
    </p>

    <p>
      To calculate the hours, add up the value of the red and blue squares. For example, if you have a red 1-square and a blue 5-square, you have 6 hours.
    </p>

    <p>
      Then, to calculate the minutes, add up the values of the green and blue squares and multiply this value by 5. For example, if you have a green 1-square, a blue 2-square, and a green 3-square, you have 30 minutes.
    </p>

    <p>
      Together, these numbers represent the closest 5-minute increment using a standard 12-hour clock. Isn't that cool?
    </p>
  </section>
)

export default Instructions
