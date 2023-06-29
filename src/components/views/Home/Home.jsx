import style from "./Home.module.css";
import SideBar from "../../common/Sidebar/Sidebar";

const Home = () => {

    return (
        <div className={style.container}>
            <div>
                <SideBar />        
            </div>
        </div>   
    )
}

export default Home;