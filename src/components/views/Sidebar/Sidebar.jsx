import style from "./Sidebar.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {

    return (
        <div className={style.container}>
            <p className={style.title}>Panel administrador</p>

            <div className={style.img}></div>

            <div className={style.namecont}>
                <p>Diego Velázquez</p>
                <p>Administrador</p>
            </div>

            <div className={style.rutscont}>
                <ul className={style.rutsul}>
                    <li>
                        <NavLink className={style.btnNav} to={"/products"} >
                            <div className={style.divli}>
                            <i class="bi bi-archive-fill"></i> 
                            <p>Productos</p>
                            <i class="bi bi-caret-right-fill"></i>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={style.btnNav} to={"/users"}>
                            <div className={style.divli}>
                            <i class="bi bi-people-fill"></i>
                            <p>Usuarios</p>
                            <i class="bi bi-caret-right-fill"></i>
                            </div>
                        </NavLink>
                    </li>
                    <li >
                        <NavLink className={style.btnNav} to={"/orders"}>
                            <div className={style.divli} >
                            <i class="bi bi-table"></i>
                            <p>Compras</p>
                            <i class="bi bi-caret-right-fill"></i>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={style.btnNav} to={"/metrics"}>
                            <div className={style.divli}>
                            <i class="bi bi-speedometer2"></i> <p>Métricas</p>
                            <i class="bi bi-caret-right-fill"></i>
                            </div>
                        </NavLink>
                    </li>
                </ul>
                <div className={style.homecont}>
                    <i class="bi bi-shop"></i>
                </div>
            </div>
        </div>
    )

};

export default SideBar;