import style from "./Products.module.css";
import PostProduct from "../../common/PostProduct/PostProduct";
import GetProducts from "../../common/GetProducts/GetProducts";
import PutPro from "../../common/PutProducts/PutPro";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts, modifiedProduct, clearProductsOfSee } from "../../../redux/productsActions";
import { getSubcategories } from "../../../redux/subcategoriesActions";

const Products = () => {
    let { pathname } = useLocation();
    const dispatch = useDispatch();

    const handleReset = () => {
        dispatch(modifiedProduct({}))   
        dispatch(clearProductsOfSee());  
    }

    useEffect(() => {
        dispatch(getAllProducts()) 
        dispatch(getSubcategories())
    }, [])


    return (
        <div className={style.producontainer}>
            <div className={style.contbtn}>
                <Link onClick={handleReset} to="get" className={style.links}>Ver productos</Link>
                <Link onClick={handleReset} to="post" className={style.links}>Crear productos</Link>
                <Link to="put" className={style.links}>Editar productos</Link>
            </div>
            <div className={style.conttable}>
                {pathname === "/products/get" && <GetProducts />}
                {pathname === "/products/post" && <PostProduct />}
                {pathname === "/products/put" && <PutPro />}
            </div>

        </div>
    )
}

export default Products;