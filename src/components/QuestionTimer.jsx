import React, { useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";

export default function QuestionTimer({ timeout, onTimeOut, mode }) {
  const [remaining, setRemaining] = useState(timeout);

  // Handle timer countdown and call onTimeOut when time runs out
  useEffect(() => {
    const timer = setTimeout(onTimeOut, timeout); // When time is up, trigger onTimeOut
    return () => clearTimeout(timer);
  }, [timeout, onTimeOut]);

  // Update remaining time and progress every 100ms
  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining((prevRemainingTime) => {
        const newTime = prevRemainingTime - 100;
        return newTime >= 0 ? newTime : 0; // Ensure time doesn't go below 0
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ProgressBar
        now={(remaining / timeout) * 100} // Calculate progress as percentage
        className={mode}
        animated
      />
    </>
  );
}
