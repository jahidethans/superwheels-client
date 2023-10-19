import { features } from "../Constants";
import styles, { layout } from "../style";
import Button from "./Button";

const TryOurService = () => {
    return (
        <section id="features" className={layout.section}>
            <div className={layout.sectionInfo}>
             <h2 className={styles.heading2}>You choose the car, <br className="sm:block hidden" /> we'll handle the <br className="sm:block hidden" /> transportation.</h2>
             <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Select your ideal car, and leave the logistics to us. We specialize in hassle-free transportation, ensuring your chosen vehicle arrives at your doorstep safely and swiftly, giving you peace of mind.</p>

             <Button styles="mt-10"/>
            </div>  
            <div className={`${layout.sectionImg} flex-col`}>
                {
                    features.map((feature, index)=>(
                        <div key={feature.id} className={`flex flex-row p-6 rounded-[20px] ${index === features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
                            <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                                <img src={feature.icon} alt="icon" className="w-[50%] h-[50%]  object-contain "  />
                            </div>
                            <div className="flex-1 flex flex-col ml-3">
                                <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">{feature.title}</h4>
                                <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">{feature.content}</p>
                            
                            </div>
                        </div>
                    ))
                }
            </div>   
        </section>
    );
};

export default TryOurService;