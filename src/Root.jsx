import styles from "./style";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const Root = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
           <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
            <Navbar></Navbar>


            </div>

           </div>

           <div className={`bg-primary ${styles.flexStart} container mx-auto`}>
            <div className={`${styles.boxWidth} `}>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
           </div>
            
            
            

        </div>
    );
};

export default Root;