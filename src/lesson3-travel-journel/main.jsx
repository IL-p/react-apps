import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById('root'));

root.render(
  <>
  <App/>
  </>
);

/*const van = document.createElement('h1');
van.textContent = 'my vanella element';
van.className = "header"
document.getElementById("root").append(van)
*/