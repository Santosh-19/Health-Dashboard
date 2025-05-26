import React from "react";
import styles from "./Header.module.css";
import { Bell, Plus, Menu } from "lucide-react";

const Header = ({toggleSidebar}) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1><span style={{color:'#3bd1d4'}}>Health</span><span style={{color:'#271f50'}}>care</span></h1>
      </div>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search..." />
        <div className={styles.icon}>
          <Bell />
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.userProfile}>
          <img
            src="src\assets\avtar-img.jpg"
            alt="User Avatar"
            className={styles.avatar}
          />
          <span className={styles.userName}>John</span>
        </div>
        <button className={styles.addButton}>
          <Plus />
        </button>
        <button className={styles.menuButton} onClick={toggleSidebar}>
            <Menu/>
        </button>
      </div>
    </header>
  );
};

export default Header;
