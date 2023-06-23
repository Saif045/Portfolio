import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "./useDarkSide";

export default function Switcher() {
  const [isDarkTheme, toggleTheme] = useDarkSide();

  return (
    <>
      <DarkModeSwitch
        className="self-center "
        moonColor="#ecce8e"
        sunColor="#270722"
        checked={isDarkTheme}
        onChange={toggleTheme}
        size={30}
      />
      {isDarkTheme ? "Dark" : "Light"}
    </>
  );
}
