import { useSelector } from "react-redux";
import style from "./GetUsers.module.css";
import { useDispatch } from "react-redux";
import { getUserID } from "../../../redux/userActions";
import { Link } from "react-router-dom";



const GetUsers = () => {

    const { users } = useSelector(state => state.user);
    const dispatch = useDispatch();

    // const handlePut = (id)=>{
    //     dispatch(putUserID(id))
    // }

    const handlerDetailUser = (user) => {
        dispatch(getUserID(user))
    }

    return (
        <div className={style.postcont}>
            <div className={style.filandor}>
                <p>Filtrar por: </p>
                <p>Ordenar por: </p>
            </div>
            <ul>
              <div className={style.titlelist}>
                  <p>ID:</p>
                  <p>Nombre:</p>
                  <p>Nickname:</p>
                  <p>E-mail:</p>
                  <p>Status:</p>
              </div>
            </ul>
            <ul className={style.list}>            
                {users.map((user, index = 1) => {
                    return (
                        <li key={index} className={style.li}>
                            <p>{index + 1}</p>       
                            <p>{user._id}</p>
                            <br />
                            <p className={style.liname}> {user.name}</p>
                            <br />
                            <p>{user.nickname}</p>
                            <br />
                            <p>{user.email}</p>
                            <br />
                            <p>{user.active === true ? "Activo" : "Inactivo"}</p>
                            {/* <NavLink to="users/put" onClick={handlePut(user._id)} >EDITAR</NavLink> */}
                            <Link to={'detail'}>
                                <button onClick={() => handlerDetailUser(user)}>
                                    <i class="bi bi-eye-fill"></i>
                                </button>
                            </Link>
                        </li>                       
                    )
                })}
            </ul>
        </div>
    )
};

export default GetUsers;