import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./sidebar.module.css";
export default function SideBar() {
  return (
    <div>
      <div className={styles.sidebar}>
        <Logo />
        <AppNav />

        <Outlet />
        <footer className={styles.footer}>
          <p className={styles.copyright}>
            &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
          </p>
        </footer>
      </div>
    </div>
  );
}
