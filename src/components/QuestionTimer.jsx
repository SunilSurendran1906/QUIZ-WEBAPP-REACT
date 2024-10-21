import React, { useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";

export default function QuestionTimer({ timeout, onTimeOut, mode }) {
  const [remaining, setRemaining] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeOut, timeout);
    return () => clearTimeout(timer);
  }, [timeout, onTimeOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining((prevRemainingTime) => {
        const newTime = prevRemainingTime - 100;
        return newTime >= 0 ? newTime : 0;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ProgressBar
        now={(remaining / timeout) * 100}
        className={mode}
        animated
      />
    </>
  );
}
