import AmericanVisaPageClient from "../page-client";
import { americanVisaContentPt } from "../content";

export const metadata = {
  title: "Advocacia de Imigração para os Estados Unidos",
  description: "Suporte jurídico em imigração para brasileiros que buscam vistos, Green Card e cidadania nos Estados Unidos."
};

export default function AmericanVisaPortuguesePage() {
  return <AmericanVisaPageClient copy={americanVisaContentPt} />;
}
