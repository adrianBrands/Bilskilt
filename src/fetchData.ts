interface VehicleData {
  forstegangsregistrering: {
    registrertForstegangNorgeDato: string;
  };
  godkjenning: Object;
  kjennemerke: [Object];
  kjoretoyId: Object;
  periodiskKjoretoyKontroll: Object;
  registrering: Object;
}

export const VehicleData = async (): Promise<Array<VehicleData> | string | undefined> => {
  const api = "https://www.vegvesen.no/ws/no/vegvesen/kjoretoy/felles/datautlevering/enkeltoppslag/kjoretoydata?kjennemerke=bt13775";
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

    const { kjoretoydataListe } = data;

    console.log(kjoretoydataListe[0]);

    const { kjennemerke, kjoretoyId, periodiskKjoretoyKontroll, registrering } = kjoretoydataListe[0];
    console.log(kjoretoyId.kjennemerke);

    console.log(kjennemerke[0].kjennemerkekategori);
    
    return data;
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
};
