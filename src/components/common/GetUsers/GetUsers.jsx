import { useSelector } from "react-redux";
import style from "./GetUsers.module.css";

const GetUsers = () => {

    const { users } = useSelector(state => state.user);

    return (
        <div className={style.postcont}>
            <div className={style.filandor}>
                <p>Filtrar por: </p>
                <p>Ordenar por: </p>
            </div>

            <ul className={style.list}>
                <div className={style.titlelist}>
                    <p>Id:</p>
                    <p>Nombre:</p>
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
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default GetUsers;