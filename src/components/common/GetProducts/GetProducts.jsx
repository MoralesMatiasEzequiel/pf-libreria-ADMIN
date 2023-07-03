import { useDispatch, useSelector } from "react-redux";
import style from "./GetProducts.module.css";

import { modifiedProduct } from "../../../redux/productsActions";
import { Link } from "react-router-dom";
const GetProducts = () => {

    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products);

    const handlePut = (product) => {
        dispatch(modifiedProduct(product))
    }
    return (
        <div className={style.postcont}>
            <div className={style.filandor}>
                <p>{products.length} productos</p>

                <p>ordenar por :</p>
            </div>

            <ul className={style.list}>

                <li className={style.li}>

                    <p className={style.lista}>Editar</p>
                    <p className={style.liname}>Titulo:</p>
                    <p className={style.limarc}>Marca:</p>
                    <p className={style.liprec}>Precio:</p>
                    <p className={style.listo}>Stock:</p>
                    <p className={style.licat}>Sub-categ:</p>
                    <p className={style.lirat}>Rating:</p>
                    <p className={style.lista}>Estado:</p>

                    <p className={style.liid}> Id: </p>
                </li>

                {products.map((pro, index) => {

                    return (
                        <li className={style.li}>

                            <Link className={style.lista} onClick={() => handlePut(pro)} to="put" >
                                <i class="bi bi-pencil-square"> </i>
                            </Link>

                            <p className={style.liname}> {pro.name}</p>

                            <p className={style.limarc}>{pro.brand}</p>

                            <p className={style.liprec}>{pro.price}</p>

                            <p className={style.listo}>{pro.stock}</p>

                            <p className={style.licat}>{pro.subcategories[0]}</p>

                            <p className={style.lirat}>{pro.rating}</p>

                            <p className={style.lista}>{pro.active}</p>

                            <p className={style.liid}>{pro._id}</p>

                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default GetProducts;