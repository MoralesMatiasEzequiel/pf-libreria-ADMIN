import style from "../PostProduct/PostProduct.module.css";

import validation from "../PostProduct/validation";

import { modifiedProduct, editProduct } from "../../../redux/productsActions";
// import { FormGroup, Input } from "reactstrap"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const PutPro = () => {

    const dispatch = useDispatch();

    const { productOfEdit } = useSelector(state => state.products);

    const [prodOfEdit, setProdOfEdit] = useState(productOfEdit);
    const [errors, setErrors] = useState({});


    const handleSubmit = async (event) => {
        event.preventDefault();

        dispatch(editProduct(prodOfEdit));
        dispatch(modifiedProduct({}))


    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setProdOfEdit((prodOfEdit) => ({
            ...prodOfEdit,
            [name]: name === "price" || name === "salePrice" || name === "stock" ? parseFloat(value) : value,
        }));
        setErrors(
            validation({
                ...prodOfEdit,
                [event.target.name]: event.target.value,
            })
        );
    };

    useEffect(() => {

    }, [productOfEdit])
    return (
        <div >
            <form action="" className={style.form} onSubmit={handleSubmit}>
                <div className={style.contfor1y2}>
                    <div className={style.formuno}>
                        <label htmlFor="name">Nombre</label>
                        <input
                            name="name"
                            value={prodOfEdit.name}
                            type="text"
                            onChange={handleChange}
                        />
                        {errors.name && <p className="error">{errors.name}</p>}

                        <label htmlFor="brand">Marca</label>
                        <input
                            name="brand"
                            value={prodOfEdit.brand}
                            type="text"
                            onChange={handleChange}
                        />
                        {errors.brand && <p className="error">{errors.brand}</p>}

                        <label htmlFor="stock">Stock disponible</label>
                        <input
                            name="stock"
                            value={prodOfEdit.stock}
                            type="number"
                            onChange={handleChange}
                        />
                        {errors.stock && <p className="error">{errors.stock}</p>}

                        <label htmlFor="price">Precio</label>
                        <input
                            name="price"
                            value={prodOfEdit.price}
                            type="number"
                            onChange={handleChange}
                        />
                        {errors.price && <p className="error">{errors.price}</p>}

                        <label htmlFor="salePrice">Precio de descuento</label>
                        <input
                            name="salePrice"
                            value={prodOfEdit.salePrice}
                            type="number"
                            onChange={handleChange}
                        />
                        {errors.salePrice && <p className="error">{errors.salePrice}</p>}
                    </div>

                    <div className={style.formdos}>
                        <label htmlFor="description">Descripcion</label>
                        <input
                            name="description"
                            value={prodOfEdit.description}
                            type="text"
                            onChange={handleChange}
                            rows="10"
                            cols="50"
                        />
                        {errors.description && <p className="error">{errors.description}</p>}

                        {/* ------------- image ---------------- */}
                        {/* <FormGroup className={style.subirImg}>
                            <label htmlFor="image">Subir Imagen</label><br />
                            <Input type="file" name="image" placeholder="Subir imagen" onChange={uploadImage} />
                            {
                                loading ? (<p>Cargando imagen...</p>) : (<img src={image} style={{ width: "150px" }} />)
                            }
                        </FormGroup> */}
                        {errors.image && <p className="error">{errors.image}</p>}
                        {/* ------------- image ----------------  onChange={handleSubcaty}*/}

                        <label htmlFor="subcategories">ID de la Subcategoria</label>
                        <input
                            name="subcategories"
                            value={prodOfEdit.subcategories}
                            type="text"

                        />
                        {errors.subcategories && <p className="error">{errors.subcategories}</p>}
                    </div>
                </div>
                <button className={style.createBtn} disabled={!prodOfEdit.brand || !prodOfEdit.description || !prodOfEdit.name || !prodOfEdit.image || errors.name || errors.brand || errors.image || errors.description || errors.stock || errors.price}>Crear producto</button>
            </form>
        </div>
    )
}

export default PutPro;