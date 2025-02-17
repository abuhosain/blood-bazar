import { Acme, Karla } from "next/font/google";

const acme = Acme({
  weight: "400",
});

const karla = Karla({
  weight: ["300", "400", "700", "800"],
});

const font = {
  acme,
  karla,
};

export default font;
