// Timer.js: A code to add a countdown to your application.
// Demo: https://codesandbox.io/s/timer-js-h26hf6

import React from 'react'
import { useEffect } from 'react';

// Create 2 useState Hooks, [minutes, setMinutes] and [seconds, setSeconds] and pass those to this component as a prop
// Just like done below

const Timer = ({ minutes, setMinutes, seconds, setSeconds }) => {

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)

        return () => {
            clearInterval(myInterval);
        };
    });

    return (

        // You can edit these features according to your project, however use the correct variables for errorless result.
        <div>
            {minutes === 0 && seconds === 0
                ? <h1>Timeup</h1>
                : <h1>⏰ {minutes} Minutes {seconds < 10 ? `0${seconds}` : seconds} Seconds</h1>
            }
        </div>
    )
}

export default Timer;

// Furthremore, please refer to the demo for details how to include this in any project.
// Demo: https://codesandbox.io/s/timer-js-h26hf6

// Thanks,
// Hiferli.

