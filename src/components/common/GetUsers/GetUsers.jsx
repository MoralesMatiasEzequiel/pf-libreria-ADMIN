import { useSelector } from "react-redux";
import style from "./GetUsers.module.css";
import { useDispatch } from "react-redux";
import { getUserID } from "../../../redux/userActions";
import { Link } from "react-router-dom";

const GetUsers = () => {

    const { users } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handlerDetailUser = (user) => {
        dispatch(getUserID(user))
    }

    return (
        <div className={style.postcont}>
            <div className={style.filandor}>
                <p>Filtrar por: </p>
                <p>Ordenar por: </p>
            </div>
            <ul className={style.list}>
                <li className={style.titlelist}>
                    <p className={style.id}>ID:</p>
                    <p className={style.nombre}>Nombre:</p>
                    <p className={style.nick}>Nickname:</p>
                    <p className={style.mail}>Email:</p>
                    <p className={style.status}>Status:</p>
                </li>      
                {users.map((user, index = 1) => {
                    return (
                        <li key={index} className={style.li}>
                            <Link to={'detail'}>
                                <button onClick={() => handlerDetailUser(user)}>
                                    <i class="bi bi-eye-fill"></i>
                                </button>
                            </Link>
                            <p className={style.linum}>{index + 1}</p>       
                            <p className={style.liid}>{user._id}</p>
                            <p className={style.liname}> {user.name}</p>
                            <p className={style.linick}>{user.nickname}</p>
                            <p className={style.liemail}>{user.email}</p>
                            <p className={style.liactive}>{user.active === true ? "Activo" : "Inactivo"}</p>
                        </li>                       
                    )
                })}
            </ul>
        </div>
    )
};

export default GetUsers;