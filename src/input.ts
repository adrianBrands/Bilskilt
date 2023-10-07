import { fetchVehicleData } from "./fetchData";
import { vehicleData } from "./vehicleData";
export function numberPlateInput(): any {
  const input: Element | null = document.querySelector("#form");

  input?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form: HTMLFormElement | any = event.target;
    const go = form.numberPlate.value;
    vehicleData(fetchVehicleData(go));
  });
}
