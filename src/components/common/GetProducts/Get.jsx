import { useSelector } from "react-redux";
import style from "./Get.module.css";

const Get = () => {

    const { products } = useSelector(state => state.products);

    return (
        <div className={style.postcont}>
            <div className={style.filandor}>
                <p>filtrar por : </p>
                <p>ordenar por :</p>
            </div>



            <ul className={style.list}>

                <div className={style.titlelist}>
                    <p className={style.liid}> id: </p>
                    <p className={style.liname}>titulo:</p>
                    <p>marca:</p>
                    <p>precio:</p>
                    <p>stock:</p>
                    <p>sub-categ:</p>
                    <p>rating:</p>
                    <p>estado:</p>
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

export default Get;