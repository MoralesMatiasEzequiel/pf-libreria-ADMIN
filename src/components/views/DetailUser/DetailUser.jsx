import style from "./DetailUser.module.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
// import { addProductOnCart } from "../../../../redux/CartActions";

const DetailUser = () => {
  const dispatch = useDispatch();
  const { detail } = useSelector(state => state.user);
  const [ detailUser, setDetailUser ] = useState({});

  useEffect(() => {
    setDetailUser(detail)
  }, [detail]);

  if (!detail) {
    return <div>Usuario no encontrado</div>;
  }

  return (
    <div className={style.container}>
      <div className="row">
        <div>
          <div>
            <img className="card-img-top" src={detail.picture} alt={detail.name} style={{ maxWidth: "300px", maxHeight: "400px" }} />
          </div>
        </div>
        <div>
          <div>
            <div >
              <h5>{detail.name}</h5>
              <p>ID: {detail._id}</p>
              <p>Nickname: {detail.nickname}</p>
              <p>E-mail: {detail.email}</p>
              <p>Reviews: {detail.reviews.length === 0 ? "No hay reviews." : detail.reviews}</p>
              <p>Productos favoritos: {detail.favorites.length === 0 ? "No hay favoritos." : detail.favorites}</p>
              <p>Órdenes de compra: {detail.orders.length === 0 ? "No hay compras realizadas." : detail.orders}</p>
              <p>Status: {detail.active === true ? "Activo" : "Inactivo"}</p>
            </div>
          </div>
        </div>
        <div>
        <Link to={"/users/get"} className={style.linkBack}>{"Volver a lista de usuarios"}</Link>
        </div>
      </div>
    </div>
  );
};

export default DetailUser;
