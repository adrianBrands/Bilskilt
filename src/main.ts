import "./style.css";
import { numberPlateInput } from "./input";
import { camera } from "./camera";

const close = document.querySelector(".closeBt");
const open = document.querySelector(".openBt");
const hide: HTMLElement | any = document.querySelector(".hide");

close?.addEventListener("click", (event) => {
  event.preventDefault();
  hide.style.display = "none";
});

open?.addEventListener("click", (event) => {
  event.preventDefault();
  hide.style.display = "block";
});

camera();

const getWelcomeClass: HTMLElement | null = document.querySelector(".welcome");

const createH1: HTMLHeadingElement = document.createElement("h1");
createH1.className = "text-secondary";

const greeting: string = "Velkommen til Bilskilt Scanner";

createH1.append(greeting);

getWelcomeClass?.append(createH1);

numberPlateInput();

console.log(import.meta.env.VITE_API_KEY);
