import { feedback } from "../Constants";
import styles from "../style";
import { quotes } from "../assets";

const Comments = () => {
    return (
        <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>

         {/* this below self closing div had styles */}
          <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient"/>

            <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
                <h1 className={styles.heading2}>What people are <br className="sm:block hidden" /> saying about us</h1>
                <div className="w-full md:mt-0 mt-6">
                    <p className={`${styles.paragraph} text-left max-w-[450px]`}>Discover the voices of our satisfied customers. Hear their stories, experiences, and testimonials about their journey with us. Find out why they trust us for their car buying needs.</p>
                </div>
            </div>
            <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
                {feedback.map((card)=>(
                    <div key={card.id} className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
                        <img src={quotes} alt="double_quotes" className="w-[42px] h-[27px] object-contain"/>
                        <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">{card.content}</p>
                    
                        <div className="flex flex-row">

                        <img src={card.img} alt={card.name} className="w-[48px] h-[48px] rounded-full"  />

                        <div className="flex flex-col ml-4">
                            <h2 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">{card.name}</h2>
                            <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">{card.title}</p>
                        </div>
                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
};

export default Comments;