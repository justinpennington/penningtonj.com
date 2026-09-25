import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using penningtonj.com.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" updated="September 25, 2026">
      <p>
        By using penningtonj.com (the “Site”), you agree to these terms. If you
        do not agree, please do not use the Site.
      </p>
      <h2>Use of the Site</h2>
      <p>
        The Site is provided for general information about Justin Pennington
        and Infraxio. You may view and share its content for personal,
        non-commercial purposes. You may not misuse the Site, attempt to
        disrupt it, or access it through automated means that place an
        unreasonable load on it.
      </p>
      <h2>Intellectual Property</h2>
      <p>
        Unless otherwise noted, the content on the Site, including text,
        images, and design, is owned by Justin Pennington or used with
        permission. Product names such as IFX Hub, Growth7, IFX Bid, and DockOps
        belong to their respective owners.
      </p>
      <h2>No Professional Advice</h2>
      <p>
        Content on the Site is for general information only and is not
        professional advice. Engagements with Infraxio are governed by separate
        written agreements.
      </p>
      <h2>Third-Party Links</h2>
      <p>
        The Site links to third-party websites. We are not responsible for
        their content or practices.
      </p>
      <h2>Disclaimer and Limitation of Liability</h2>
      <p>
        The Site is provided “as is” without warranties of any kind. To the
        fullest extent permitted by law, we are not liable for any damages
        arising from your use of the Site.
      </p>
      <h2>Governing Law</h2>
      <p>These terms are governed by the laws of the State of Florida.</p>
      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href="mailto:hello@infraxio.com">hello@infraxio.com</a>.
      </p>
    </LegalPage>
  );
}
