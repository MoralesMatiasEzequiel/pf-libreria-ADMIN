import style from "./Products.module.css";
import Post from "../../common/PostProducts/Post";
import Get from "../../common/GetProducts/Get";
import PutPro from "../../common/PutProducts/PutPro";
import DisaPro from "../../common/DisabledProducts/DisaPro";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../redux/productsActions";

const Products = () => {
    let { pathname } = useLocation();
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getAllProducts())
        
      }, [])


    return (
        <div className={style.producontainer}>
            <div className={style.contbtn}>
                <button><Link to="get">Ver productos</Link></button>
                <button><Link to="post">Crear productos</Link></button>
                <button><Link to="put">Editar productos</Link></button>
                <button><Link to="disa">des/habilitar productos</Link></button>
            </div>

            <div className={style.conttable}>
                {pathname === "/products/post" && <Post />}
                {pathname === "/products/get" && <Get />}
                {pathname === "/products/disa" && <DisaPro />}
                {pathname === "/products/put" && <PutPro />}
            </div>

        </div>
    )
}

export default Products;