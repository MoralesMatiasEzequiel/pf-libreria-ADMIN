import style from "./Orders.module.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../../redux/ordersActions";

const Orders = () => {
    let { pathname } = useLocation();
    const dispatch = useDispatch();

    const { orders } = useSelector(state => state.orders);

    useEffect(() => {
        dispatch(getAllOrders())
    }, [])

    return (
        <div className={style.postcont}>
            <div className={style.filandor}>
                <p>{orders.length + 1} compras realizadas.</p>
                <p>Ordenar por: </p>
            </div>
            {orders.map((order, index) => {
                    return (
                        <div>
                            <p>Estado de la compra: {order.state}</p>
                            <p>Nombre del comprador: {order.name} {order.surname}</p>
                            <p>Correo: {order.email}</p>
                            <p>Teléfono: {order.phone}</p>
                            <p>DNI: {order.dni}</p>
                            <p>Dirección: Calle {order.street}, n° {order.number}, piso {order.floor}, dpto {order.apartment}</p>
                            <p>Ciudad: {order.city}, {order.province}</p>
                            <p>Comentario(s): {order.comentary}</p>
                            <p>Producto(s) comprado(s): {order.products.map(product => product + ", ")}</p>
                            <p>Costo final: ${order.finalPrice}.-</p>
                            <p>-----------------------------------------</p>
                        </div>
                    )
                })}
        </div>
    )
}

export default Orders;