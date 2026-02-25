import styles from "./AdsTicker.module.css";

const AdsTicker = () => {
  const items = [
    {
      badge: "SV",
      text: "Shree Venkateshwara Institute of Education & Guidance",
    },
    {
      badge: "BEST",
      text: "Coaching for NEET, JEE & IIT",
    },
    {
      badge: "MD",
      text: "Dr. T. Kathirvel - Managing Director",
    },
    {
      badge: "CALL",
      text: "+91 99523 17770 / +91 98658 67789",
      isPhone: true,
    },
    {
      badge: "VISIT",
      text: "Dheeran Towers, SDN Colony 2nd St, Gobi (Tk), Erode (Dt) - 638452",
    },
    {
      badge: "MAIL",
      text: "kathirvel64@gmail.com",
    },
  ];

  const loopItems = [...items, ...items];

  return (
    <a
      className={styles.link}
      href="https://svasc.vercel.app/admission"
      aria-label="Admissions advertisement"
    >
      <div className={styles.bar}>
        <div className={styles.inner}>
        <div className={styles.track}>
          {loopItems.map((item, index) => (
            <div className={styles.item} key={`${item.badge}-${index}`}>
              <span className={styles.badge}>{item.badge}</span>
              <span className={item.isPhone ? styles.phone : styles.emph}>{item.text}</span>
              <span className={styles.sep}>•</span>
            </div>
          ))}
        </div>
        </div>
      </div>
    </a>
  );
};

export default AdsTicker;
