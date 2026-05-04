import { redirect } from "next/navigation";

import AmericanVisaPageClient from "@/app/american_visa/page-client";
import { americanVisaContentPt } from "@/app/american_visa/content";

export const metadata = {
  title: "Advocacia de Imigração para os Estados Unidos",
  description: "Suporte jurídico em imigração para brasileiros que buscam vistos, Green Card e cidadania nos Estados Unidos."
};

export default function PortugueseRootPage() {
  if (process.env.SITE_VARIANT !== "american") {
    redirect("/en/");
  }

  return <AmericanVisaPageClient copy={americanVisaContentPt} />;
}
