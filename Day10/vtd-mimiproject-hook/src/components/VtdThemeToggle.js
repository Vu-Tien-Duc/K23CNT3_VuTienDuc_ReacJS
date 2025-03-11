import { useTheme } from "../context/VtdThemeContext";


export default function VtdThemeToggle(){
    const {theme , toggleTheme}    = useTheme();
    return (
        <button onClick={toggleTheme}>
            Chuyển sang {theme === "light" ? "tối" : "sáng"}
        </button>
    );
}