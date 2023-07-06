import style from "./Users.module.css";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllUser } from "../../../redux/userActions";
import GetUsers from "../../common/GetUsers/GetUsers";
import DetailUser from "../DetailUser/DetailUser";

const Users = () => {
    let { pathname } = useLocation();
    const dispatch = useDispatch();


    const handleReset = () => {

        dispatch(getAllUser());
    }

    return (
        <div className={style.producontainer}>
            <div className={style.contbtn}>

                <Link onClick={handleReset} to="get" className={style.links}>Ver Usuarios</Link>
            </div>

            <div className={style.conttable}>
                {pathname === "/users/get" && <GetUsers />}
                {pathname === "/users/detail" && <DetailUser />}
            </div>
        </div>
    )
};

export default Users;