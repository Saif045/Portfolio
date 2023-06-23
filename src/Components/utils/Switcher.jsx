import useWindowSize from "@rooks/use-window-size";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "./useDarkSide";

export default function Switcher() {
  const [isDarkTheme, toggleTheme] = useDarkSide();
  const { innerWidth, innerHeight } = useWindowSize();

  return (
    <>
      <DarkModeSwitch
       
        moonColor={Number(innerWidth) > 500 ? "#ecce8e" : "#000"}
        sunColor={Number(innerWidth) > 500 ? "#270722" : "#000"}
        checked={isDarkTheme}
        onChange={toggleTheme}
        size={30}
      />

      <span onClick={toggleTheme}>{isDarkTheme ? "Dark" : "Light"}</span>
    </>
  );
}
