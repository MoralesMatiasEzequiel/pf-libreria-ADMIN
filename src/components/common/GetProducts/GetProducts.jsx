import { useSelector } from "react-redux";
import style from "./GetProducts.module.css";

const GetProducts = () => {

    const { products } = useSelector(state => state.products);

    return (
        <div className={style.postcont}>
            <div className={style.filandor}>
                <p>Filtrar por: </p>
                <p>Ordenar por: </p>
            </div>



            <ul className={style.list}>

                <div className={style.titlelist}>
                    <p className={style.liid}>Id:</p>
                    <p className={style.liname}>Nombre:</p>
                    <p>Marca:</p>
                    <p>Precio:</p>
                    <p>Stock:</p>
                    <p>Categoría:</p>
                    <p>Rating:</p>
                    <p>Estado:</p>
                </div>
                
                {products.map((pro, index = 1) => {
                    return (
                        <li key={index} className={style.li}>
                            <p>{index + 1}</p>
                            <p>{pro._id}</p>
                            <p className={style.liname}> {pro.name}</p>
                            <p>{pro.brand}</p>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default GetProducts;