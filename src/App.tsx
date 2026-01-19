import { useEffect, useState } from "react";
import NumberPlate from "./components/NumberPlate";
import { generateRandomVrm } from "./utils/utils";

function App() {
  const [vrm, setVrm] = useState<string>("");
  const [motion, setMotion] = useState<boolean>(true);

  useEffect(() => {
    const randomVRMonTimer = setInterval(() => {
      const newVrm = generateRandomVrm();
      setVrm(() => newVrm);
      setMotion((prev) => !prev);
    }, 5000);

    return () => clearInterval(randomVRMonTimer);
  }, []);

  return (
    <div className="App w-full h-screen flex items-center justify-center bg-gray-200">
      <NumberPlate vrm={vrm} size="2xl" motion={motion} />
    </div>
  );
}

export default App;
