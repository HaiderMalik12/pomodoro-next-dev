type Props = {
  isRunning: boolean;
  onStart: () => void;
  onReset: () => void;
};

const TimerControls = ({ isRunning, onStart, onReset }: Props) => {
  return (
    <div className="flex gap-4">
      {!isRunning && (
        <button
          onClick={onStart}
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
        >
          Start
        </button>
      )}
      <button
        onClick={onReset}
        className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
      >
        Reset
      </button>
    </div>
  );
};

export default TimerControls;
