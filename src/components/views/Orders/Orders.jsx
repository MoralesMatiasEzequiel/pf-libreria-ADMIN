import style from "./Orders.module.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../../redux/ordersActions";
import { getAllProducts } from "../../../redux/productsActions";

const Orders = () => {
  let { pathname } = useLocation();
  const dispatch = useDispatch();

  const { orders } = useSelector((state) => state.orders);
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllOrders());
    dispatch(getAllProducts())
  }, []);

  const getProductNames = (productIds) => {
    return productIds.map((productId) => {
      const product = products.find((product) => product._id === productId);
      return product ? product.name : "";
    });
  };

  return (
    <div className={style.container}>
      <div className={style.filandor}>
        <h2>{orders.length + 1} compras realizadas.</h2>
        <p>Ordenar por: </p>
      </div>
      <div className={style.dataCont}>
        {orders.map((order, index) => {
          const productNames = getProductNames(order.products);
          console.log(productNames);
          return (
            <div className={style.data} key={index}>
              <p><span>Estado de la compra: </span>{order.state}</p>
              <p><span>Nombre del comprador: </span>{order.name} {order.surname}</p>
              <p><span>Correo: </span>{order.email}</p>
              <p><span>Teléfono: </span>{order.phone}</p>
              <p><span>DNI: </span>{order.dni}</p>
              <p><span>Dirección:</span> Calle {order.street}, n° {order.number}, piso {order.floor}, dpto {order.apartment}</p>
              <p><span>Ciudad: </span>{order.city}, {order.province}</p>
              <p><span>Comentario(s): </span>{order.comentary}</p>
              <p><span>Producto(s) comprado(s): </span>{productNames.join(", ")}</p>
              <p><span>Costo final: </span>${order.finalPrice}.-</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
