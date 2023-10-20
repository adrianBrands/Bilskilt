interface VehicleData {
  kjoretoydataListe: {
    forstegangsregistrering: {
      registrertForstegangNorgeDato: string;
    };
    godkjenning: Object;
    kjennemerke: [Object];
    kjoretoyId: Object;
    periodiskKjoretoyKontroll: Object;
    registrering: Object;
  };
}

export const fetchVehicleData = async (test:any): Promise<Array<VehicleData> | string | undefined> => {
  const api = `https://www.vegvesen.no/ws/no/vegvesen/kjoretoy/felles/datautlevering/enkeltoppslag/kjoretoydata?kjennemerke=${test}`;
  const corsEnabledUrl = "https://noroffcors.onrender.com/" + api;

  try {
    const getData = {
      method: "GET",
      headers: {
        "content-type": "application/json; charset=UTF-8",
        "SVV-Authorization": `${import.meta.env.VITE_API_KEY}`,
      },
    };
    const response = await fetch(corsEnabledUrl, getData);
    const data = await response.json();
    console.log(data)

    return data;
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
};
