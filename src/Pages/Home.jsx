import Banner from "../components/Banner";
import BrandNames from "../components/BrandNames";
import Business from "../components/Business";
import Comments from "../components/Comments";
import TryOurService from "../components/TryOurService";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Business></Business>
            <BrandNames></BrandNames>
            <TryOurService></TryOurService>
            <Comments></Comments>
        </div>
    );
};

export default Home;