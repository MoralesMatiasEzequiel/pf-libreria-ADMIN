import style from "./Sidebar.module.css";
import React from "react";

const SideBar = () => {

    return (
        <div className={style.container}>
            <p className={style.title}>Panel administrador</p>

            <div className={style.img}></div>

            <div className={style.namecont}>

                <b className={style.name}> PAPAUPA</b>
                <p>Admin</p>
            </div>

            <div className={style.rutscont}>
                <ul className={style.rutsul}>
                    <li> <p>Productos</p> <i class="bi bi-dropbox"></i></li>
                    <li> <p>Usuarios</p><i class="bi bi-people-fill"></i></li>
                    <li> <p>Ordenes de compra</p><i class="bi bi-table"></i></li>
                    <li> <p>Métricas</p><i class="bi bi-speedometer2"></i></li>
                </ul>
                <div className={style.homecont}>

                    <i class="bi bi-shop"></i>
                  
                </div>
            </div>
        </div>
    )

};

export default SideBar;