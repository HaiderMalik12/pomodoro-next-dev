"use client";

import { useEffect, useState, useRef } from "react";
import TimerDisplay from "@/components/pomodoro/TimerDisplay";
import TimerControls from "@/components/pomodoro/TimerControls";

const PomodoroTimer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsRunning(false);
      alert("Pomodoro complete!");
    }
  }, [timeLeft]);

  const handleStart = () => setIsRunning(true);
  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(25 * 60);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <TimerDisplay timeLeft={timeLeft} />
      <TimerControls
        isRunning={isRunning}
        onStart={handleStart}
        onReset={handleReset}
      />
    </div>
  );
};

export default PomodoroTimer;
