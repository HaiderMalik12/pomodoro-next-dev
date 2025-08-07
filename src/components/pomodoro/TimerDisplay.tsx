type Props = {
  timeLeft: number;
};

const TimerDisplay = ({ timeLeft }: Props) => {
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="text-6xl font-bold text-gray-800">
      {minutes}:{seconds}
    </div>
  );
};

export default TimerDisplay;
