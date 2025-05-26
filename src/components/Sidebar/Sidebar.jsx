import React from "react";
import styles from "./Sidebar.module.css";
import { Home, Calendar, Clipboard, PieChart, ChartBar, Settings, ChartColumnDecreasing, ShieldUser } from "lucide-react";

const Sidebar = ({isVisible}) => {
  const navigationLinks = [
    { name: "Dashboard", icon: <Home /> },
    { name: "History", icon: <Clipboard /> },
    { name: "Calendar", icon: <Calendar /> },
    { name: "Appointments", icon: <PieChart /> },
    { name: "Statistics", icon: <ChartColumnDecreasing /> },
    { name: "Tests", icon: <Clipboard /> },
    { name: "Chat", icon: <ChartBar /> },
    { name: "Support", icon: <ShieldUser /> },
    { name: "Setting", icon: <Settings /> },
  ];

  return (
    <aside className={styles.sidebar} style={{
        display: isVisible ? "block" : "none",
        transition: "transform 0.3s ease",
      }}>
      <h3 className={styles.heading}>General</h3>
      <nav>
        <ul className={styles.navList}>
          {navigationLinks.map((link, index) => (
            <li key={index} className={styles.navItem}>
              <span className={styles.icon}>{link.icon}</span>
              <span className={styles.label}>{link.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
