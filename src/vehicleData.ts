import { addElement } from "./content";

interface RegistreringsData {
  forstegangsregistrering: {
    registrertForstegangNorgeDato: string;
  };
}

interface Godkjenning {
  godkjenning: {
    forstegangsGodkjenning: {
      bruktimport: {
        importland: {
          landNavn: string;
        };
      };
    };
  };
}

/*interface Kjennemerke {}

interface KjoretoyId {}

interface PeriodiskKjoretoyKontroll {}

interface RegistrertForstegangNorgeDato {}*/

export async function vehicleData(data: any) {
  const promise = Promise.resolve(data);

  promise
    .then((value) => {
      console.log(value.kjoretoydataListe[0]);
      addElement(value);
    })
    .catch((err) => {
      console.log(err);
    });

  const registrering: RegistreringsData = {
    forstegangsregistrering: {
      registrertForstegangNorgeDato: data.kjoretoydataListe[0].forstegangsregistrering.registrertForstegangNorgeDato,
    },
  };

  const godkjenning: Godkjenning = {
    godkjenning: {
      forstegangsGodkjenning: {
        bruktimport: {
          importland: {
            landNavn: data.kjoretoydataListe[0].godkjenning.forstegangsGodkjenning.bruktimport.importland.landNavn,
          },
        },
      },
    },
  };

  console.log(registrering.forstegangsregistrering.registrertForstegangNorgeDato);
  console.log(godkjenning.godkjenning.forstegangsGodkjenning.bruktimport.importland.landNavn);

  /* const { kjennemerke, kjoretoyId, periodiskKjoretoyKontroll, registrering } = kjoretoydataListe[0];

    const { fomTidspunkt, kjoringensArt }: { fomTidspunkt: string; kjoringensArt: Object } = registrering;

    console.log(fomTidspunkt);
    console.log(kjoringensArt);*/
}
