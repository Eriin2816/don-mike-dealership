import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions | Don Mike Auto Dealership",
  description:
    "Terms and conditions for using the Don Mike Auto Dealership website and services.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalPageLayout
          title="Terms & Conditions"
          subtitle="Please read these terms carefully before using our website or services."
          lastUpdated="January 2025"
        >
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Don Mike Auto Dealership website
            (collectively, the &ldquo;Site&rdquo;) or contacting us through any means,
            you accept and agree to be bound by these Terms and Conditions and
            our Privacy Policy. If you do not agree to these terms, please
            discontinue use of our Site immediately.
          </p>

          <h2>2. Website Use</h2>
          <p>
            This Site is provided for informational and communication purposes
            related to our dealership services. You agree to use this Site only
            for lawful purposes. You may not use the Site in any way that:
          </p>
          <ul>
            <li>Violates any applicable local, state, or federal law or regulation</li>
            <li>Transmits unsolicited promotional or commercial content</li>
            <li>Attempts to interfere with or disrupt the Site&apos;s technical infrastructure</li>
            <li>Impersonates any person or entity</li>
          </ul>

          <h2>3. Vehicle Information Disclaimer</h2>
          <p>
            Vehicle descriptions, specifications, imagery, and related content
            on this Site are provided for illustrative and informational
            purposes only. All vehicle information is subject to change
            without notice. Don Mike Auto Dealership makes no representations
            or warranties regarding the accuracy, completeness, or currentness
            of vehicle information presented on this Site.
          </p>
          <p>
            Placeholder images are used where real inventory photography is
            not yet available. Actual vehicle appearance, trim levels, colors,
            and features may vary from images shown.
          </p>

          <h2>4. Pricing and Availability Disclaimer</h2>
          <p>
            No pricing, payment estimates, or availability claims on this Site
            constitute a binding offer, contract, or guarantee. All pricing
            is subject to change, market conditions, and applicable taxes,
            fees, and financing terms. Vehicle availability may change at any
            time without notice.
          </p>
          <p>
            Do not rely on any pricing or payment figures displayed on this
            Site as final or guaranteed. Final pricing and availability are
            confirmed only through direct communication with our dealership team.
          </p>

          <h2>5. Financing and Credit Disclaimer</h2>
          <p>
            Any references to financing options, payment ranges, or credit
            programs on this Site are illustrative only and do not constitute
            a credit offer, pre-approval, or guarantee of financing. Actual
            financing terms are subject to credit approval, lender requirements,
            vehicle selection, and applicable regulations. We make no guarantee
            of credit approval for any individual or transaction.
          </p>

          <h2>6. Third-Party Links and Services</h2>
          <p>
            Our Site may contain links to third-party websites, including
            scheduling and booking tools, lead management systems, and social
            media platforms. These links are provided for convenience only.
            Don Mike Auto Dealership does not endorse, control, or take
            responsibility for the content, privacy practices, or terms of
            any third-party websites.
          </p>
          <p>
            Booking and form tools embedded in this Site are provided by
            third-party platforms. Your use of those tools is subject to the
            respective third party&apos;s terms and privacy policies.
          </p>

          <h2>7. Intellectual Property</h2>
          <p>
            All content on this Site — including but not limited to text,
            images, logos, graphics, and design — is the property of Don Mike
            Auto Dealership or its licensors and is protected by applicable
            intellectual property laws. You may not reproduce, distribute,
            modify, or use any content from this Site without prior written
            permission.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, Don Mike Auto
            Dealership and its team members, agents, and affiliates shall not
            be liable for any indirect, incidental, special, or consequential
            damages arising from your use of, or inability to use, this Site
            or its content — including any errors or omissions in content,
            or any loss or damage of any kind arising from your use of the
            Site.
          </p>
          <p>
            Your use of this Site is entirely at your own risk. The Site is
            provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without any warranty,
            express or implied.
          </p>

          <h2>9. Updates to These Terms</h2>
          <p>
            We reserve the right to update or modify these Terms and Conditions
            at any time without prior notice. The most current version will
            always be posted on this page. Your continued use of the Site
            following any changes constitutes your acceptance of the revised
            terms.
          </p>

          <h2>10. Contact Information</h2>
          <p>
            For questions about these Terms and Conditions, please contact us:
          </p>
          <ul>
            <li><strong>Don Mike Auto Dealership</strong></li>
            <li>Gainesville, FL</li>
            <li>
              Phone:{" "}
              <a href="tel:+13528882293">+1 352-888-2293</a>
            </li>
            <li>
              Email:{" "}
              <a href="mailto:dansoumika@yahoo.com">dansoumika@yahoo.com</a>
            </li>
          </ul>
        </LegalPageLayout>
      </main>
      <Footer />
    </>
  );
}
