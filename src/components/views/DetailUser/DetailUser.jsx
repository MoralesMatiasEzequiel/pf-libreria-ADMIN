import style from "./DetailUser.module.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { updateUserStatus  } from "../../../redux/userActions";

const DetailUser = () => {
  const dispatch = useDispatch();
  const { detail } = useSelector(state => state.user);
  const { products } = useSelector(state => state.products);
  const [ detailUser, setDetailUser ] = useState({});

  useEffect(() => {
    setDetailUser(detail)
  }, [detail]);

  const handleBanUser = () => {
    const updatedUser = { ...detailUser, active: false }; // Cambia el estado a "Inactivo"
    dispatch(updateUserStatus(updatedUser));
    setDetailUser(updatedUser); // Actualiza el estado localmente
  };

  const getFavoriteNames = (favoriteIds) => {
    return favoriteIds.map((favoriteId) => {
      const product = products.find((product) => product._id === favoriteId);
      return product ? product.name : "";
    });
  };

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
            <div>
              <h5>{detail.name}</h5>
              <p>ID: {detail._id}</p>
              <p>Nickname: {detail.nickname}</p>
              <p>E-mail: {detail.email}</p>
              <p>Reviews: {detail.reviews?.length === 0 ? "No hay reviews." : detail.reviews?.length + 1}</p>
              <p>Producto(s) favorito(s): {detail.favorites?.length === 0 ? "No hay favoritos." : getFavoriteNames(detail.favorites).join(", ")}</p>
              <p>Compra(s) realizada(s): {detail.orders?.length === 0 ? "No hay compras realizadas." : detail.orders?.length + 1}</p>
              <p>Status: {detail.active === true ? "Activo" : "Inactivo"}</p>
              <button onClick={handleBanUser}>Bannear usuarios</button>
            </div>
          </div>
        </div>
        <br />
        <div>
        <Link to={"/users/get"} className={style.linkBack}>{"Volver a lista de usuarios"}</Link>
        </div>
      </div>
    </div>
  );
};

export default DetailUser;
