import style from "./Users.module.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import GetUsers from "../../common/GetUsers/GetUsers";
import PutUsers from "../../common/PutUser/PutUser";
import { getAllUser, putUser } from "../../../redux/userActions";

const Users = () => {
    let { pathname } = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUser());  
        // dispatch(putUser()); 
    }, [])

    return (
        <div className={style.producontainer}>
            <div className={style.contbtn}>
                <Link to="get" className={style.links}>Ver usuarios</Link>
                <Link to="disa" className={style.links}>Banear usuarios</Link>
            </div>

            <div className={style.conttable}>
                {pathname === "/users/get" && <GetUsers />}
                {pathname === "/users/disa" && <PutUsers />}
            </div>
        </div>
    )
};

export default Users;