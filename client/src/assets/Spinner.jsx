import { useState, useEffect } from "react";

const Spinner = () => {
  const [randomEmoji, setRandomEmoji] = useState("🚀");
  const emojis = ["😊", "🌟", "🚀", "🎉", "🔥", "💡", "🌀"];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * emojis.length);
      setRandomEmoji(emojis[randomIndex]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="flex flex-col min-h-screen w-full items-center justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500">
          <div className="h-9 w-9 rounded-full bg-gray-200"></div>
        </div>
        <div className="flex items-center">
          <h1 className="text-gray-700 font-medium animate-pulse text-3xl text-center">
            Wait for a while..... {randomEmoji}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
