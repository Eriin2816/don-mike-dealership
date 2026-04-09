import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Don Mike Auto Dealership",
  description:
    "Don Mike Auto Dealership's privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalPageLayout
          title="Privacy Policy"
          subtitle="How Don Mike Auto Dealership collects, uses, and protects your information."
          lastUpdated="January 2025"
        >
          <h2>1. Information We Collect</h2>
          <p>
            When you interact with our website, booking tools, or contact
            forms, we may collect the following types of information:
          </p>
          <ul>
            <li><strong>Contact information:</strong> Name, phone number, email address</li>
            <li><strong>Vehicle preferences:</strong> Budget range, desired make/model, vehicle type, trade-in information</li>
            <li><strong>Communication preferences:</strong> Preferred contact method and timing</li>
            <li><strong>Technical data:</strong> IP address, browser type, pages visited, and other standard web analytics data</li>
          </ul>
          <p>
            We collect this information when you submit a form, book a call,
            send us an email, or use any interactive feature on our Site.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Respond to your vehicle inquiries and consultation requests</li>
            <li>Schedule and confirm appointments and calls</li>
            <li>Match you with appropriate vehicles and financing options</li>
            <li>Follow up on your inquiry as requested</li>
            <li>Improve our website and service experience</li>
            <li>Comply with applicable laws and regulations</li>
          </ul>
          <p>
            We do not sell, rent, or share your personal information with
            unaffiliated third parties for their own marketing purposes.
          </p>

          <h2>3. Contact and Lead Form Handling</h2>
          <p>
            When you submit a form on our website, your information is
            received by our team and may also be processed through third-party
            CRM and communication platforms (including HighLevel / LeadConnector)
            to facilitate follow-up and appointment scheduling.
          </p>
          <p>
            By submitting a form, you consent to being contacted by Don Mike
            Auto Dealership at the phone number or email address provided,
            including by automated text messages where applicable, for the
            purpose of responding to your inquiry.
          </p>

          <h2>4. Booking and Appointment Handling</h2>
          <p>
            Our booking calendar is powered by a third-party scheduling tool
            (HighLevel / LeadConnector). When you book a call, your name,
            contact information, and appointment preferences are stored in
            their system and shared with our team. Their use of your data
            is governed by their privacy policy.
          </p>

          <h2>5. Cookies and Analytics</h2>
          <p>
            Our Site may use cookies and similar tracking technologies to
            understand how visitors interact with our content. This may include:
          </p>
          <ul>
            <li>Session cookies for basic site functionality</li>
            <li>Analytics tools to track page visits and behavior patterns</li>
            <li>Third-party pixels associated with advertising platforms</li>
          </ul>
          <p>
            You can disable cookies in your browser settings, though some
            features of the Site may not function properly as a result.
          </p>

          <h2>6. Communication Consent</h2>
          <p>
            By submitting a form or booking a call on our Site, you agree
            that Don Mike Auto Dealership may contact you by phone (including
            automated dialers), SMS, and email for follow-up purposes
            related to your inquiry. Standard message and data rates may apply
            for SMS.
          </p>
          <p>
            You may opt out of marketing communications at any time by replying
            STOP to any text message, clicking unsubscribe in any email, or
            contacting us directly.
          </p>

          <h2>7. Data Sharing</h2>
          <p>
            We may share your information with:
          </p>
          <ul>
            <li><strong>Service providers:</strong> CRM platforms, scheduling tools, and email services used to operate our business</li>
            <li><strong>Lenders and finance partners:</strong> When you inquire about financing options (with your consent)</li>
            <li><strong>Legal authorities:</strong> When required by law or to protect our rights and property</li>
          </ul>
          <p>
            We do not share your information with other dealerships or
            unrelated businesses for marketing purposes.
          </p>

          <h2>8. Your Choices</h2>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Request access to the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information (where not required for legal or business purposes)</li>
            <li>Opt out of marketing communications at any time</li>
          </ul>
          <p>
            To exercise these rights, contact us at the information below.
          </p>

          <h2>9. Data Security</h2>
          <p>
            We take reasonable precautions to protect your personal information
            from unauthorized access, disclosure, or loss. However, no data
            transmission over the internet is entirely secure, and we cannot
            guarantee absolute security.
          </p>

          <h2>10. Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The most
            current version will always be available on this page, with the
            &ldquo;Last updated&rdquo; date reflecting the most recent revision. Continued
            use of our Site after any changes constitutes acceptance of the
            updated policy.
          </p>

          <h2>11. Contact Information</h2>
          <p>
            For privacy-related questions or requests, please contact us:
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
