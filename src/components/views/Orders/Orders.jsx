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
              <p>Estado de la compra: {order.state}</p>
              <p>Nombre del comprador: {order.name} {order.surname}</p>
              <p>Correo: {order.email}</p>
              <p>Teléfono: {order.phone}</p>
              <p>DNI: {order.dni}</p>
              <p>Dirección: Calle {order.street}, n° {order.number}, piso {order.floor}, dpto {order.apartment}</p>
              <p>Ciudad: {order.city}, {order.province}</p>
              <p>Comentario(s): {order.comentary}</p>
              <p>Producto(s) comprado(s): {productNames.join(", ")}</p>
              <p>Costo final: ${order.finalPrice}.-</p>
              <p>----------------------------------------------------------------------------------</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
