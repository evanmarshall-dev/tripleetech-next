import styles from "./ServiceHighlight.module.scss";

const ServiceHighlight = () => {
  const serviceHighlightItems = [
    {
      id: 1,
      title: "Remote IT Support",
      description:
        "Stay connected with our expert technicians for quick and efficient remote assistance.",
      // date: "November 1, 2025",
      category: "Security",
    },
    {
      id: 2,
      title: "Consulting Services",
      description:
        "Triple E Technology Solutions offers expert consulting to optimize your IT infrastructure.",
      // date: "October 28, 2025",
      category: "Consulting",
    },
    {
      id: 3,
      title: "IT Product Solutions",
      description:
        "Explore our range of IT products designed to enhance your business operations.",
      // date: "October 25, 2025",
      category: "Products",
    },
  ];

  return (
    <section className={styles.serviceHighlight}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Services & Support</h2>
          <p className={styles.subtitle}>
            Here are a few of our highlighted services to help your business
            thrive
          </p>
        </div>

        <div className={styles.serviceHighlightGrid}>
          {serviceHighlightItems.map((item) => (
            <article key={item.id} className={styles.serviceHighlightCard}>
              <div className={styles.cardHeader}>
                <span className={styles.category}>{item.category}</span>
                {/* <time className={styles.date}>{item.date}</time> */}
              </div>
              <h3 className={styles.serviceHighlightTitle}>{item.title}</h3>
              <p className={styles.serviceHighlightDescription}>
                {item.description}
              </p>
              {/* TODO: Add a link to the service/support detail page once created. */}
              <a href='#' className={styles.readMore}>
                Read More →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlight;
