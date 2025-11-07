import Image from "next/image";
import styles from "./ServiceSnippets.module.scss";

const ServiceSnippets = () => {
  const serviceSnippetsItems = [
    {
      id: 1,
      title: "Remote IT Support",
      description:
        "Stay connected with our expert technicians for quick and efficient remote assistance.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&auto=format",
    },
    {
      id: 2,
      title: "Consulting Services",
      description:
        "Triple E Technology Solutions offers expert consulting to optimize your IT infrastructure.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop&auto=format",
    },
    {
      id: 3,
      title: "IT Product Solutions",
      description:
        "Explore our range of IT products designed to enhance your business operations.",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop&auto=format",
    },
  ];

  return (
    <section className={styles.serviceSnippets}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>SERVICES & SUPPORT</span>
          <h2 className={styles.title}>
            Expert IT Solutions Tailored for Your Success
          </h2>
          <p className={styles.subtitle}>
            From remote support to strategic consulting, we deliver
            comprehensive IT services that keep your business running smoothly
            and securely
          </p>
        </div>

        <div className={styles.serviceSnippetsGrid}>
          {serviceSnippetsItems.map((item) => (
            <article key={item.id} className={styles.serviceSnippetsCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={item.image}
                  alt={`${item.title} - Professional IT services illustration`}
                  width={400}
                  height={250}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.serviceSnippetsTitle}>{item.title}</h3>
                <p className={styles.serviceSnippetsDescription}>
                  {item.description}
                </p>
                {/* TODO: Add a link to the service/support detail page once created. */}
                <a href='#' className={styles.readMore}>
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSnippets;
