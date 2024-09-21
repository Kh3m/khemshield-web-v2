"use client";

import Heading from "@/app/components/Generics/Heading";
import Text from "@/app/components/Generics/Text";
import { formatNumber } from "@/app/lib/formatNumber";
import React, { useState, useEffect, useRef } from "react";

// Define the types for the props
interface CountdownTimerProps {
  targetDate: string;
}

// Define the types for the state
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  // const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const hasMounted = useRef(false);

  useEffect(() => {
    hasMounted.current = true; // Set the mounted flag to true once the component is mounted
    setTimeLeft(calculateTimeLeft()); // Initialize time left once component is mounted
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (hasMounted.current) {
        // Only update time left if the component is still mounted
        setTimeLeft(calculateTimeLeft());
      }
    }, 1000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="flex gap-4">
      <TimerContent label={"days"} value={timeLeft.days} />
      <TimerContent label={"hours"} value={timeLeft.hours} />
      <TimerContent label={"minutes"} value={timeLeft.minutes} />
      <TimerContent label={"seconds"} value={timeLeft.seconds} isLast />
    </div>
  );
};

interface TimerContentProps {
  label: string;
  value: number;
  isLast?: boolean;
}
const TimerContent = ({
  label,
  value,
  isLast,
}: Readonly<TimerContentProps>) => {
  return (
    <div className="flex flex-col justify-center items-start">
      <div className="flex items-center gap-4">
        <Heading variant="h2">{formatNumber(value, { decimal: true })}</Heading>
        {!isLast && <Heading variant="h2">:</Heading>}
      </div>
      <Text color="primary">{label}</Text>
    </div>
  );
};

export default CountdownTimer;
