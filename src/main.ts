import "./style.css";
import { setTimeout } from "timers/promises";
import { fetchVehicleData } from "./fetchData";
import { numberPlateInput } from "./input";
import $ from "jquery";

const getWelcomeClass: HTMLElement | null = document.querySelector(".welcome");

const createH1: HTMLHeadingElement = document.createElement("h1");

const greeting: string = "Velkommen til Bilskilt Scanner";

createH1.append(greeting);

getWelcomeClass?.append(createH1);



numberPlateInput();
