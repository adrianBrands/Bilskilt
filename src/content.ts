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

  $(".content").empty().append(`<p class="mt-5"><strong>Registrert første gang i Norge:</strong></p>
  <p class="display-6">${registrering.forstegangsregistrering.registrertForstegangNorgeDato}</p>`);
}
