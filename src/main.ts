import "./style.css";
import { displayVehicleData } from "./vehicleData";
const getWelcomeClass: HTMLElement | null = document.querySelector(".welcome");

const createH1: HTMLHeadingElement = document.createElement("h1");

const greeting: string = "Velkommen til Bilskilt Scanner";

createH1.append(greeting);

getWelcomeClass?.append(createH1);

console.log("hello");

displayVehicleData()


