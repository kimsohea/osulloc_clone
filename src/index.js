import { greet } from "./component.js";

const script = () => {
	return `
  ${greet("헤더 될 예정입니다")}
  ${greet("main 될 예정입니다")}
  ${greet("footer 될 예정입니다")}
  `;
};

document.body.innerHTML += script();
