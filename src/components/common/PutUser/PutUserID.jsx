import style from "./PutUserID.module.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from "react-router-dom";

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
          <div>
            <img className="card-img-top" src={detail.picture} alt={detail.name}/>
          </div>
            <div>
              <h5>{detail.name}</h5>
              <p>ID: {detail._id}</p>
              <p>Nickname: {detail.nickname}</p>
              <p>E-mail: {detail.email}</p>
              <p>Status: {detail.active === true ? "Activo" : "Inactivo"}</p>
            </div>
        <div className={style.linkDiv}>
        <Link to={"/users/get"} className={style.linkBack}>{"Volver a lista de usuarios"}</Link>
        </div>
    </div>
  );
};

export default PutUserID;
