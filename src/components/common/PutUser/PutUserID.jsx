import style from "./PutUserID.module.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from "react-router-dom";
// import { addProductOnCart } from "../../../../redux/CartActions";

const PutUserID = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detail } = useSelector(state => state.user);
  // console.log(userID);
  // const detail = detail.find(user => user._id === id);

  useEffect(() => {
 
  }, [id, dispatch]);

  if (!detail) {
    return <div>Usuario no encontrado</div>;
  }

  return (
    <div className={style.container}>
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <div className="card" style={{ width: "100%", height: "450px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "25px", marginBottom: "25px" }}>
            <img className="card-img-top" src={detail.picture} alt={detail.name} style={{ maxWidth: "300px", maxHeight: "400px" }} />
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="card" style={{ width: "100%", height: "450px", marginTop: "25px", marginBottom: "25px" }}>
            <div className="card-body" style={{ padding: "10px" }}>
              <h5 className="card-title" style={{ color: "#191919", fontFamily: "Montserrat, sans-serif", fontWeight: "bold", fontSize: "24px", padding: "10px" }}>{detail.name}</h5>
              <p style={{ color: "#3F3F3F", fontSize: "18px", padding: "10px" }}>ID: {detail._id}</p>
              <p style={{ color: "#3F3F3F", fontSize: "18px", padding: "10px" }}>Nickname: {detail.nickname}</p>
              <p style={{ color: "#3F3F3F", fontSize: "18px", padding: "10px" }}>E-mail: {detail.email}</p>
              <p style={{ color: "#3F3F3F", fontSize: "18px", padding: "10px" }}>Status: {detail.active === true ? "Activo" : "Inactivo"}</p>
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
