import styles from "./styles.module.css";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  const user = JSON.parse(localStorage.getItem("user"));
  const { firstName } = user;
  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Welcome {firstName}</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Main;
