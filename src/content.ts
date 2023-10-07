import $ from "jquery";

interface RegistreringsData {
  forstegangsregistrering: {
    registrertForstegangNorgeDato: string;
  };
}

export function addElement(value: string | any) {
  const registrering: RegistreringsData = {
    forstegangsregistrering: {
      registrertForstegangNorgeDato: value.kjoretoydataListe[0].forstegangsregistrering.registrertForstegangNorgeDato,
    },
  };

  $(".content").append(`<p class=""><strong>Registrert første gang i Norge:</strong></p>
  <p>${registrering.forstegangsregistrering.registrertForstegangNorgeDato}</p>`);
}
