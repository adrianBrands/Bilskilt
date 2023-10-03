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

    const { kjoretoydataListe }: { kjoretoydataListe: any } = data;

    const { kjennemerke, kjoretoyId, periodiskKjoretoyKontroll, registrering } = kjoretoydataListe[0];

    console.log(kjoretoyId.kjennemerke);
    console.log(`kjennemerkekategori: ${kjennemerke[0].kjennemerkekategori}`);
    console.log(`Kontroll frist: ${periodiskKjoretoyKontroll.kontrollfrist}`);

    const { fomTidspunkt, kjoringensArt }: { fomTidspunkt: string; kjoringensArt: Object } = registrering;

    console.log(fomTidspunkt);
    console.log(kjoringensArt);

    return data;
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
};
