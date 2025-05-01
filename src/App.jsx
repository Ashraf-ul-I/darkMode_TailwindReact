
import "./App.css";
import { useDarkMode } from "./utils/useDarkMode";

function App() {
  const [isDarkMode,setDarkMode]=useDarkMode()
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <button
        className="bg-blue-600 dark:bg-gray-700 text-white px-6 py-2 rounded-lg mt-4 ml-4 shadow hover:bg-blue-700 dark:hover:bg-gray-600 transition"
        onClick={() => setDarkMode(!isDarkMode)}
      >
        Toggle {isDarkMode ? "Light" : "Dark"} Mode
      </button>

      <div className="p-4">
        <h1 className="text-3xl font-bold underline text-amber-600 dark:text-amber-300">
          Hello from the Tailwind Tales
        </h1>
      </div>

      <div className="flex flex-wrap">
        <div className="bg-red-500/30 dark:bg-red-700 p-4 m-4 rounded-lg flex-1 min-w-[200px]">
          Tailwind CSS is great
        </div>
        <div className="bg-emerald-500/30 dark:bg-emerald-700 p-4 m-4 rounded-lg flex-1 min-w-[200px]">
          Tailwind CSS is awesome
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="p-4 m-4 rounded-lg bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white shadow-md">
          We are learning gradients
        </div>
        <div className="p-4 m-4 rounded-lg bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white shadow-md">
          We are learning gradients
        </div>
      </div>
    
      <div>
        <h2 className="text-2xl font-bold mt-4 ml-4">Responsive Design</h2>
        <div className="flex flex-wrap justify-center items-center">
          <div className="bg-green-500/30 dark:bg-green-700 p-4 m-4 rounded-lg flex-1 min-w-[200px]">
            Responsive Item 1
          </div>
          <div className="bg-yellow-500/30 dark:bg-yellow-700 p-4 m-4 rounded-lg flex-1 min-w-[200px]">
            Responsive Item 2
          </div>
        </div>  
      </div>
      <div>
        <h2 className="text-2xl font-bold mt-4 ml-4">Hover Effects</h2>
        <div className="flex flex-wrap justify-center items-center">
          <div className="bg-blue-500/30 dark:bg-blue-700 p-4 m-4 rounded-lg flex-1 min-w-[200px] hover:bg-blue-600 dark:hover:bg-blue-800 transition duration-300">
            Hover Effect 1
          </div>
          <div className="bg-purple-500/30 dark:bg-purple-700 p-4 m-4 rounded-lg flex-1 min-w-[200px] hover:bg-purple-600 dark:hover:bg-purple-800 transition duration-300">
            Hover Effect 2
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;

