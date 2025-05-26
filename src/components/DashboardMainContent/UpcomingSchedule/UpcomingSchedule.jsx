import React from "react";
import styles from "./UpcomingSchedule.module.css";

const UpcomingSchedule = () => {
  const schedule = [
    {
      day: "Thursday",
      events: [
        { title: "Health checkup complete", time: "11:00 AM", icon: "💉" },
        { title: "Ophthalmologist", time: "14:00 PM", icon: "👁️" },
      ],
    },
    {
      day: "Saturday",
      events: [
        { title: "Cardiologist", time: "12:00 AM", icon: "❤️" },
        { title: "Neurologist", time: "16:00 PM", icon: "🧑‍⚕️" },
      ],
    },
  ];

  return (
    <div className={styles.schedule}>
      <h2 className={styles.title}>The Upcoming Schedule</h2>
      {schedule.map((daySchedule, index) => (
        <div key={index} className={styles.day}>
          <h3 className={styles.dayTitle}>On {daySchedule.day}</h3>
          <div className={styles.events}>
            {daySchedule.events.map((event, idx) => (
              <div key={idx} className={styles.event}>
                <div className={styles.eventInfo}>
                  <span className={styles.eventTitle}>
                    {event.title} {event.icon}
                  </span>
                  <span className={styles.eventTime}>{event.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
