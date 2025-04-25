import { useEffect, useState } from "react";

const EffectPage = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-teal-500 to-cyan-700 text-white px-6">
      <h1 className="text-4xl font-bold mb-6">Effect Page</h1>
      <p className="mb-4 text-lg">This page shows current time using <code>useEffect</code>.</p>

      <div className="bg-white text-black rounded-xl shadow-lg p-6 max-w-xl text-center">
        <h2 className="text-2xl font-semibold">Current Time</h2>
        <p className="text-xl mt-4">
          {time.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};

export default EffectPage;
