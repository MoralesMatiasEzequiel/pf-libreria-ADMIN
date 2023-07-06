
import style3 from "../GetProducts/GetProducts.module.css";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';


import {getUserID, nameOrderByAZ, nameOrderByZA, userOrderByAZ, userOrderByZA, usersbyInactive } from "../../../redux/userActions";

const GetUsers = () => {

    const { users } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handlerDetailUser = (user) => {
        dispatch(getUserID(user))
    }
    const nameOrderAZ = () => {
        dispatch(nameOrderByAZ())
    }
    const nameOrderZA = () => {
        dispatch(nameOrderByZA())
    }
    const userOrderAZ = () => {
        dispatch(userOrderByAZ())
    }
    const userOrderZA = () => {
        dispatch(userOrderByZA())
    }
    const byInactive = () => {
        dispatch(usersbyInactive())
    }
    return (
        <div className={style3.postcont}>
            <div className={style3.filandor}>
                <p>{users.length} Usuarios</p>

                <div className={style3.filters}>
                    <Dropdown as={NavItem}>
                        <Dropdown.Toggle as={NavLink}>Nombre</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={nameOrderAZ}>A-Z</Dropdown.Item>
                            <Dropdown.Item onClick={nameOrderZA}>Z-A</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className={style3.filters}>
                    <Dropdown as={NavItem}>
                        <Dropdown.Toggle as={NavLink}>Usuario</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={userOrderAZ}>A-Z</Dropdown.Item>
                            <Dropdown.Item onClick={userOrderZA}>Z-A</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className={style3.filters}>
                    <Dropdown as={NavItem}>
                        <Dropdown.Toggle as={NavLink}>Estado</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={byInactive} >Inactivos - Activos</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>

            <ul className={style3.list}>
                <li className={style3.li2}>
                    <p className={style3.editar}>Editar</p>
                    <p className={style3.nombre}>Nombre</p>
                    <p className={style3.nombre}>Nombre de Usuario</p>
                    <p className={style3.nombre2}>Email</p>
                    <p className={style3.estado}>Estado</p>
                </li>
                {users.map((user, index = 1) => {
                    return (
                        <li key={index} className={style3.li2}>
                            <Link to={'detail'} className={style3.editar} onClick={() => handlerDetailUser(user)}>
                                <i class="bi bi-eye-fill"></i>
                            </Link>
                            <p className={style3.nombre}> {user.name}</p>
                            <p className={style3.nombre}>{user.nickname}</p>
                            <p className={style3.nombre2}>{user.email}</p>
                            <p className={style3.estado}>{user.active === true ? "Activo" : "Inactivo"}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default GetUsers;



// <div className={style3.postcont}>
//             <div className={style3.filandor}>
//                 <p>Filtrar por: </p>
//                 <p>Ordenar por: </p>
//             </div>
//             <ul className={style3.list}>
//                 <li className={style3.titlelist}>
//                     <p className={style3.id}>ID:</p>
//                     <p className={style3.nombre}>Nombre:</p>
//                     <p className={style3.nick}>Nickname:</p>
//                     <p className={style3.mail}>Email:</p>
//                     <p className={style3.status}>Status:</p>
//                 </li>
//                 {users.map((user, index = 1) => {
//                     return (
//                         <li key={index} className={style3.li}>
//                             <Link to={'detail'}>
//                                 <button onClick={() => handlerDetailUser(user)}>
//                                     <i class="bi bi-eye-fill"></i>
//                                 </button>
//                             </Link>
//                             <p className={style3.linum}>{index + 1}</p>
//                             <p className={style3.liid}>{user._id}</p>
//                             <p className={style3.liname}> {user.name}</p>
//                             <p className={style3.linick}>{user.nickname}</p>
//                             <p className={style3.liemail}>{user.email}</p>
//                             <p className={style3.liactive}>{user.active === true ? "Activo" : "Inactivo"}</p>
//                         </li>
//                     )
//                 })}
//             </ul>
//         </div>