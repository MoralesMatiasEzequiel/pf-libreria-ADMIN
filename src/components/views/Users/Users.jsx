import style from "./Users.module.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllUser, putUser } from "../../../redux/userActions";
import GetUsers from "../../common/GetUsers/GetUsers";
import DetailUser from "../DetailUser/DetailUser";

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
                <p className={style.links}>Usuarios</p>
            </div>

            <div className={style.conttable}>
                {pathname === "/users/get" && <GetUsers />}
                {pathname === "/users/detail" && <DetailUser />}
            </div>
        </div>
    )
};

export default Users;