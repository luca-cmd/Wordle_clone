import styles from '../../../styles/NavBar.module.css';

const NavBar: React.FC = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.title}>
        <h1>Wordle</h1>
      </div>
    </div>
  );
};

export default NavBar;
