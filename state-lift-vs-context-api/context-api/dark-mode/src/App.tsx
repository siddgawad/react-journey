import { ThemeProvider } from "./context/ThemeProvider";
import { ThemeSwitcher } from "./context/ThemeSwitcher";

export default function App(){
  return(
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  )
}