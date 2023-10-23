import styles from "./style";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";


const Root = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
           <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth} z-20`}>
            <Navbar></Navbar>


            </div>

           </div>

           <div className={`bg-primary ${styles.flexStart} container mx-auto`}>
            <div className={`${styles.boxWidth}`}>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
            </div>
           </div>
            
            
            

        </div>
    );
};

export default Root;