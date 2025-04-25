import { useState } from "react";

const CountPage = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-tr from-blue-500 to-purple-600 text-white">
      <h1 className="text-4xl font-bold mb-4">Count Page</h1>
      <p className="text-lg mb-6">This is a simple counter page using useState.</p>
      
      <h2 className="text-2xl font-semibold mb-4">The count is {count}</h2>

      <div className="flex gap-4">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded text-white font-bold"
        >
          -
        </button>
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded text-white font-bold"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CountPage;
