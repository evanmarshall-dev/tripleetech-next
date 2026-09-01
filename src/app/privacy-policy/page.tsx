import NavBar from '@/components/NavBar/NavBar';
import styles from './legal.module.scss';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Triple E Technology Solutions. Learn how we collect, use, and protect your personal information.',
  path: '/privacy-policy',
});

const PrivacyPolicy = () => {
  return (
    <>
      <NavBar />
      <main className={styles.legalPage}>
        <div className={styles.container}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last Updated: January 2026</p>

          <section className={styles.section}>
            <h2>1. Introduction</h2>
            <p>
              Triple E Technology Solutions, Inc. (&quot;Company,&quot;
              &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed
              to protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              use our website and services.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>
              We may collect personal information that you provide, including:
            </p>
            <ul>
              <li>Name and contact information (email, phone, address)</li>
              <li>Company name and job title</li>
              <li>Account credentials</li>
              <li>Payment information</li>
              <li>Communications with our support team</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain
              information:
            </p>
            <ul>
              <li>IP address and device information</li>
              <li>Browser type and operating system</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and maintain our services</li>
              <li>Process transactions and send related information</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you technical notices and security alerts</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share information with:
            </p>
            <ul>
              <li>Service providers who assist in our operations</li>
              <li>Professional advisors (lawyers, accountants, etc.)</li>
              <li>Law enforcement when required by law</li>
              <li>Business partners with your consent</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. Data Security</h2>
            <p>
              As a cybersecurity company, we take data protection seriously. We
              implement industry-standard security measures to protect your
              information, including:
            </p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and audits</li>
              <li>Access controls and authentication measures</li>
              <li>Employee training on data protection</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>6. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>7. Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to enhance your experience
              on our website. You can control cookie preferences through your
              browser settings. Essential cookies are required for the website
              to function properly.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Data Retention</h2>
            <p>
              We retain your personal information only as long as necessary to
              fulfill the purposes for which it was collected, comply with legal
              obligations, and resolve disputes.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to children under 13. We do not
              knowingly collect personal information from children under 13. If
              we become aware of such collection, we will take steps to delete
              the information.
            </p>
          </section>

          <section className={styles.section}>
            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              and updating the &quot;Last Updated&quot; date.
            </p>
          </section>

          <section className={styles.section}>
            <h2>11. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact
              us:
            </p>
            <p>
              <strong>Email:</strong> privacy@tripleetech.com
              <br />
              <strong>Phone:</strong> (555) 555-5555
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;
