import { greet } from "./component.js";
import "./scss/style.scss";

const script = () => {
  return `
  ${greet("헤더 될 예정입니다")}
  ${greet("main 될 예정입니다")}
  ${greet("footer 될 예정입니다")}
  `;
};

document.body.innerHTML += script();
