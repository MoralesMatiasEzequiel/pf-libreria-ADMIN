import style from "./PutUserID.module.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from "react-router-dom";
// import { addProductOnCart } from "../../../../redux/CartActions";

const PutUserID = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { userID } = useSelector(state => state.user);
  // console.log(userID);
  const userFound = userID.find(user => user._id === id);

  useEffect(() => {
    // Aquí puedes agregar la lógica para obtener los detalles del producto según su id
  }, [id, dispatch]);

  if (!userFound) {
    return <div>Usuario no encontrado</div>;
  }

  return (
    <div className={style.container}>
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <div className="card" style={{ width: "100%", height: "450px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "25px", marginBottom: "25px" }}>
            <img className="card-img-top" src={userFound.picture} alt={userFound.name} style={{ maxWidth: "300px", maxHeight: "400px" }} />
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="card" style={{ width: "100%", height: "450px", marginTop: "25px", marginBottom: "25px" }}>
            <div className="card-body" style={{ padding: "10px" }}>
              <h5 className="card-title" style={{ color: "#191919", fontFamily: "Montserrat, sans-serif", fontWeight: "bold", fontSize: "24px", padding: "10px" }}>{userFound.name}</h5>
              <p style={{ color: "#3F3F3F", fontSize: "18px", padding: "10px" }}>ID: {userFound._id}</p>
              <p style={{ color: "#3F3F3F", fontSize: "18px", padding: "10px" }}>Nickname: {userFound.nickname}</p>
              <p style={{ color: "#3F3F3F", fontSize: "18px", padding: "10px" }}>E-mail: {userFound.email}</p>
              <p style={{ color: "#3F3F3F", fontSize: "18px", padding: "10px" }}>Status: {userFound.active === true ? "Activo" : "Inactivo"}</p>
            </div>
          </div>
        </div>
        <div className={style.linkDiv}>
        <Link to={"/users/get"} className={style.linkBack}>{"Volver a lista de usuarios"}</Link>
        </div>
      </div>
    </div>
  );
};

export default PutUserID;
