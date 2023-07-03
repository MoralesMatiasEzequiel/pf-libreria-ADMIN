import { useSelector } from "react-redux";
import style from "./GetUsers.module.css";
import { NavLink } from "react-router-dom";
import { putUser } from "../../../redux/userActions";
import { useDispatch } from "react-redux";
import { putUserID } from "../../../redux/userActions";

const GetUsers = () => {

    const { users } = useSelector(state => state.user);
    // const dispatch = useDispatch();

    // const handlePut = (id)=>{
    //     dispatch(putUserID(id))
    // }
    return (
        <div className={style.postcont}>
            <div className={style.filandor}>
                <p>Filtrar por: </p>
                <p>Ordenar por: </p>
            </div>

            <ul className={style.list}>
                <div className={style.titlelist}>
                    <p className={style.liid}>Id:</p>
                    <p className={style.liname}>Nombre:</p>
                    <p>E-mail:</p>
                    <p>Status:</p>
                </div>
                
                {users.map((user, index = 1) => {
                    return (
                        <li key={index} className={style.li}>
                            <p>{index + 1}</p>
                            <p>{user._id}</p>
                            <p className={style.liname}> {user.name}</p>
                            {/* <p>{user.nickname}</p>
                            <p>{user.email}</p> */}
                            {/* <NavLink to="users/put" onClick={handlePut(user._id)} >EDITAR</NavLink> */}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default GetUsers;