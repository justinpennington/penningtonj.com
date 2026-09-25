import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How penningtonj.com handles visitor information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="September 25, 2026">
      <p>
        This policy explains how penningtonj.com (the “Site”) handles
        information about visitors. The Site is a personal page for Justin
        Pennington, founder of Infraxio.
      </p>
      <h2>Information We Collect</h2>
      <p>
        The Site does not ask you to create an account or submit personal
        information. We use Vercel Web Analytics to understand aggregate
        traffic, such as page views, referring sites, and general device and
        country information. Vercel Web Analytics does not use cookies and does
        not track you across other websites.
      </p>
      <h2>Links to Other Sites</h2>
      <p>
        The Site links to other websites, including infraxio.com, LinkedIn, and
        a booking page hosted by Growth7. Information you provide on those sites
        is governed by their own privacy policies.
      </p>
      <h2>Cookies</h2>
      <p>The Site itself does not set cookies.</p>
      <h2>Children’s Privacy</h2>
      <p>
        The Site is not directed to children under 13, and we do not knowingly
        collect information from them.
      </p>
      <h2>Changes</h2>
      <p>
        We may update this policy from time to time. The “Last updated” date
        above reflects the most recent version.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about this policy can be sent to{" "}
        <a href="mailto:hello@infraxio.com">hello@infraxio.com</a>.
      </p>
    </LegalPage>
  );
}
