import Footer from "../Footer";
import Header from "../Header";
import styles from "./style.module.css";

interface Props {
  children?: React.ReactNode;
  id: string;
}

const Main = (props: Props) => {
  return (
    <div id="main-layout">
      <Header />
      <div className={styles.pageContainer} id={props.id ? props.id : "page"}>
        {props.children}
      </div>
      <Footer />
    </div>
  );
};
export default Main;
