import { Link } from "react-router-dom";
import "./App.css";
import Card from "./coponents/Card";
import { data } from "./constants/MOCK_DATA";

function App() {
  let log = Math.floor(Math.random() * 10);
  console.log(log, "This is being rendered on the main screen twice...");

  return (
    <div className=" p-8 flex flex-col justify-start items-center">
      <nav className="flex gap-4 p-4 bg-gray-800 text-white">
        <Link to="/about">About</Link>
        <Link to="/useState">Counter</Link>
        <Link to="/useEffect">Effect</Link>
        <Link to="/fetched">Data fetch</Link>
      </nav>

      <div className="w-full h-full p-8 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-xl">
        <img src="/hackaut.png" alt="HACKAUT" className="h-24 mb-4" />
        <h1 className="text-4xl font-bold pb-12">
          Welcome to Deep Dive into Dev
        </h1>

        <div className="flex flex-wrap gap-4 justify-center">
          {data.map((member, index) => (
            <Card
              key={index}
              name={member.name}
              dept={member.dept}
              gender={member.gender}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
