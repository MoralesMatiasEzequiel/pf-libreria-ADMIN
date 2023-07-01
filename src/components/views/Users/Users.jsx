import style from "./Users.module.css";
import GetUsers from "../../common/GetUsers/GetUsers";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../../redux/userActions";

const Users = () => {
    let { pathname } = useLocation();
    const dispatch = useDispatch();
    // const { currentUser } = useSelector(state => state.users);

    // useEffect(() => {
    //     dispatch(getAllUser())      
    // }, [currentUser, dispatch])


    return (
        <div className={style.producontainer}>
            <div className={style.contbtn}>
                <button><Link to="get">Ver usuarios</Link></button>
                <button><Link to="disa">Banear usuarios</Link></button>
            </div>

            <div className={style.conttable}>
                {pathname === "/users/get" && <GetUsers />}
            </div>

        </div>
    )
}

export default Users;