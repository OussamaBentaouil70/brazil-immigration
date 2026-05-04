import { redirect } from "next/navigation";
import AmericanVisaPageClient from "@/app/american_visa/page-client";
import { americanVisaContentEn } from "@/app/american_visa/content";

export default function RootPage() {
  if (process.env.SITE_VARIANT === "american") {
    return <AmericanVisaPageClient copy={americanVisaContentEn} />;
  }

  redirect("/en/");
}
