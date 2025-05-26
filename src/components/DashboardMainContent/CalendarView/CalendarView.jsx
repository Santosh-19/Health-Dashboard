import React from "react";
import styles from "./CalendarView.module.css";

const CalendarView = () => {
    const weekDays = [
      { day: "Mon", date: 25 },
      { day: "Tue", date: 26 },
      { day: "Wed", date: 27 },
      { day: "Thu", date: 28 },
      { day: "Fri", date: 29 },
      { day: "Sat", date: 30 },
      { day: "Sun", date: 31 },
    ];
  
    const appointments = {
      25: [{ time: "10:00" }, { time: "11:00" }, { time: "12:00" }],
      26: [{ time: "08:00" }, { time: "09:00", highlight: true }, { time: "10:00" }],
      27: [{ time: "12:00" }, { time: "13:00" }, { time: "14:00" }],
      28: [{ time: "10:00" }, { time: "11:00", highlight: true }, { time: "___" }],
      29: [{ time: "___" },{ time: "14:00" }, { time: "16:00" }],
      30: [{ time: "12:00" },{ time: "13:00" },{ time: "14:00" }],
      31: [{ time: "08:00" }, { time: "09:00", highlight: true }, { time: "10:00" }],
    };
  
    return (
      <div className={styles.calendar}>
        {/* Header */}
        <div className={styles.header}>
          <h2>October 2021</h2>
          <div className={styles.arrows}>
            <button className={styles.navButton}>&lt;</button>
            <button className={styles.navButton}>&gt;</button>
          </div>
        </div>
  
        {/* Weekly View */}
        <div className={styles.week}>
          {weekDays.map((day) => (
            <div key={day.date} className={styles.day}>
              <div
                className={`${styles.dateBox} ${
                  day.date === 26 ? styles.selected : ""
                }`}
              >
                <span className={styles.dayName}>{day.day}</span><br/><br/>
                <span className={styles.date}>{day.date}</span>
                <div className={styles.appointments}>
                {(appointments[day.date] || []).map((appt, index) => (
                  <div
                    key={index}
                    className={`${styles.appointment} ${
                      appt.highlight ? styles.highlight : ""
                    }`}
                  >
                    {appt.time}
                  </div>
                ))}
              </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.dateEvent}>
          <div className={styles.eventActive}>
            <p>Dentist</p>
            <p>09.00-11.00</p>
            <p>Dr. Cameron Willianmson</p>
          </div>
          <div className={styles.event}>
            <p>Physiotherapy Appoinment</p>
            <p>11.00-12.00</p>
            <p>Dr. Kevin Djones</p>
          </div>
        </div>
      </div>
    );
  };

export default CalendarView;
