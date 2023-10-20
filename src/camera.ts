import { run } from "./OCR";
import { fetchVehicleData } from "./fetchData";
import { vehicleData } from "./vehicleData";

export function camera() {
  navigator.mediaDevices.enumerateDevices().then((devices) => {
    console.log(devices);
  });

  let canvas: any | null = document.querySelector("#canvas");
  let context: any = canvas.getContext("2d");
  let video: Element | any = document.querySelector("#video");
  let photo: Element | any = document.getElementById("imgInput");

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      video.srcObject = stream;
      video.play();
    });
  }

  document.getElementById("snap")?.addEventListener("click", (event) => {
    event.preventDefault();

    const image = context.drawImage(video, 0, 0, 640, 480);
    const data = canvas.toDataURL("image/png");
    photo.setAttribute("src", data);

    run(data)
      .then((result) => {
        vehicleData(fetchVehicleData(result));
        console.log(result);
      })
      .catch((error) => {
        console.error("OCR Error:", error);
      });
  });
}
