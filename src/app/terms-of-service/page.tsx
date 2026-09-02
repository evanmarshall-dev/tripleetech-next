import NavBar from '@/components/NavBar/NavBar';
import styles from './legal.module.scss';
import { buildMetadata } from '@/lib/metadata';
import { BreadcrumbJsonLd } from '@/lib/breadcrumbs';

export const metadata = buildMetadata({
  title: 'Terms of Service',
  description:
    'Terms of Service for Triple E Technology Solutions. Read our terms and conditions for using our services.',
  path: '/terms-of-service',
});

const TermsOfService = () => {
  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: 'Terms of Service', path: '/terms-of-service' }]}
      />
      <NavBar />
      <main className={styles.legalPage}>
        <div className={styles.container}>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.lastUpdated}>Last Updated: January 2026</p>

          <section className={styles.section}>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the services provided by Triple E
              Technology Solutions, Inc. (&quot;Company,&quot; &quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;), you accept and agree to be
              bound by these Terms of Service. If you do not agree to these
              terms, please do not use our services.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Description of Services</h2>
            <p>
              Triple E Technology Solutions provides cybersecurity services,
              including but not limited to endpoint security, network security,
              cloud security, consulting services, and security assessments.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. User Responsibilities</h2>
            <p>As a user of our services, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information when required</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>
                Notify us immediately of any unauthorized use of your account
              </li>
              <li>Use our services in compliance with all applicable laws</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Intellectual Property</h2>
            <p>
              All content, trademarks, service marks, and logos displayed on our
              website and services are the property of Triple E Technology
              Solutions or their respective owners. You may not use, reproduce,
              or distribute any content without prior written permission.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Triple E Technology
              Solutions shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising from your use
              of our services.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Confidentiality</h2>
            <p>
              We understand the sensitive nature of cybersecurity services. All
              client information is treated as confidential and protected in
              accordance with our Privacy Policy and applicable data protection
              regulations.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Service Level Agreements</h2>
            <p>
              Specific service level agreements (SLAs) are detailed in
              individual service contracts. These terms supplement but do not
              replace contractual SLA obligations.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Termination</h2>
            <p>
              We reserve the right to terminate or suspend access to our
              services at our discretion, without notice, for conduct that we
              believe violates these Terms of Service or is harmful to other
              users, us, or third parties.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes
              will be effective immediately upon posting. Your continued use of
              our services after changes constitutes acceptance of the new
              terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2>10. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> legal@tripleetech.com
              <br />
              <strong>Phone:</strong> (555) 555-5555
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default TermsOfService;
