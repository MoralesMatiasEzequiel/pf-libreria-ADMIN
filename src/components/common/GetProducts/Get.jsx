import { useSelector } from "react-redux";
import style from "./Get.module.css";
import Table from 'react-bootstrap/Table';


const Get = () => {

    const { products } = useSelector(state => state.products);

    return (
        <div className={style.postcont}>
            <div className={style.filandor}>
                <p>{products.length} productos</p>
               
                <p>ordenar por :</p>
            </div>

            <ul className={style.list}>
                
                <li className={style.li}>

                    <p className={style.liid}> Id: </p>
                    <p className={style.liname}>Titulo:</p>
                    <p className={style.limarc}>Marca:</p>
                    <p className={style.liprec}>Precio:</p>
                    <p className={style.listo}>Stock:</p>
                    <p className={style.licat}>Sub-categ:</p>
                    <p className={style.lirat}>Rating:</p>
                    <p className={style.lista}>Estado:</p>
                </li>

                {products.map((pro, index) => {

                    return (
                        <li className={style.li}>

                            {/* <p>{index + 1}</p> */}

                            <p className={style.liid}>{pro._id}</p>

                            <p className={style.liname}> {pro.name}</p>

                            <p className={style.limarc}>{pro.brand}</p>

                            <p className={style.liprec}>{pro.price}</p>
                            <p className={style.listo}>{pro.stock}</p>
                            <p className={style.licat}>{pro.subcategories[0]}</p>
                            <p className={style.lirat}>{pro.rating}</p>
                            <p className={style.lista}>{pro.active}</p>

                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default Get;