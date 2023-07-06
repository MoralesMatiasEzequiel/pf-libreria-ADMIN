import style from "./DetailUser.module.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { updateUserStatus  } from "../../../redux/userActions";
import { getAllProducts } from "../../../redux/productsActions";

const DetailUser = () => {
  const dispatch = useDispatch();
  const { detail } = useSelector(state => state.user);
  const { products } = useSelector(state => state.products);
  

  useEffect(() => {
    dispatch(getAllProducts())
  }, [detail])

  const handleBanUser = () => {
    if(detail.active){
      dispatch(updateUserStatus(detail._id, false));
    } else {
      dispatch(updateUserStatus(detail._id, true));
    }
    
  };

  const getFavoriteNames = (favoriteIds) => {
    return favoriteIds.map((favoriteId) => {
      const product = products.find((product) => product._id === favoriteId);
      return product ? product.name : "";
    });
  };

  return (
      <div className={style.container}>
        
        <div className={style.conta}>
          <div className={style.imgContainer}>
            <img className={style.img} src={detail.picture} alt={detail.name}/>
            <h4>{detail.nickname}</h4>
          </div>
          <div className={style.dataContainer}>
            <p><span>Nombre: </span>{detail.name}</p>
            <p><span>Nickname: </span>{detail.nickname}</p>
            <p><span>E-mail: </span>{detail.email}</p>
            <p><span>Reviews: </span>{detail.reviews?.length === 0 ? "No hay reviews." : detail.reviews?.length + 1}</p>
            <p><span>Producto(s) favorito(s): </span>{detail.favorites?.length === 0 ? "No hay favoritos." : getFavoriteNames(detail.favorites).join(", ")}</p>
            <p><span>Compra(s) realizada(s): </span>{detail.orders?.length === 0 ? "No hay compras realizadas." : detail.orders?.length + 1}</p>
            <p><span>ID user: </span>{detail._id}</p>
            <p><span>Status: </span>{detail.active === true ? "Activo" : "Inactivo"}</p>
            {detail.active === true ? <button onClick={handleBanUser}>Bannear usuario</button> : <button onClick={handleBanUser}>Activar usuario</button>}
          </div>
        </div>
      </div>
  );
};

export default DetailUser;
