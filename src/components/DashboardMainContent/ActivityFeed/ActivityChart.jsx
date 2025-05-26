import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import styles from "./ActivityChart.module.css";

const ActivityChart = () => {
  const data = [
    { day: "Mon", activity: 3 },
    { day: "Tues", activity: 6 },
    { day: "Wed", activity: 4 },
    { day: "Thurs", activity: 5 },
    { day: "Fri", activity: 7 },
    { day: "Sat", activity: 5 },
    { day: "Sun", activity: 4 },
  ];

  return (
    <div className={styles.activityChart}>
      <div className={styles.header}>
        <h3 className={styles.title}>Activity</h3>
        <span className={styles.subtitle}>3 appointments this week</span>
      </div>
      <ResponsiveContainer width="100%" height={130}>
        <BarChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 0 }}>
          <XAxis dataKey="day" axisLine={false} tickLine={false} />
          <YAxis hide />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Bar dataKey="activity" fill="#29d4dd" radius={[10, 10, 0, 0]} barSize={10} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
