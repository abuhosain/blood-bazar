import { Acme, Karla } from "next/font/google";

const acme = Acme({
  weight: "400",
  subsets: ["latin"],
});

const karla = Karla({
  weight: ["300", "400", "600", "700", "800"],
  subsets: ["latin"],
});

const font = {
  acme,
  karla,
};

export default font;
