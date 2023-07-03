
import style1 from "../GetProducts/GetProducts.module.css";
import style2 from "../PostProduct/PostProduct.module.css";

import validation from "../PostProduct/validation";

import { modifiedProduct, editProduct, findsByName, clearProductsOfSee } from "../../../redux/productsActions";
import { FormGroup, Input } from "reactstrap"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const PutPro = () => {

    const dispatch = useDispatch();

    const { productOfEdit, productsOfSee } = useSelector(state => state.products);

    const [prodOfEdit, setProdOfEdit] = useState({});
    const [errors, setErrors] = useState({});

    const [productOfSee, setProductOfSee] = useState([]);
    const [valueInput, setValueInput] = useState('');


    const handlePut = (product) => {
        dispatch(modifiedProduct(product))
    }

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

    const handleProductsOfSee = (event) => {
        setValueInput(event.target.value)
        dispatch(findsByName(event.target.value));
    }
    const handleclearProductsOfSee = (event) => {
        setProductOfSee([])
        setValueInput('')
        dispatch(clearProductsOfSee());
    }


    //--------------------------------- CLOUDINARY --------------------------
    const [image, setImage] = useState("")
    const [loading, setLoading] = useState(false)

    const uploadImage = async (event) => {
        const files = event.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "plumaApp");
        setLoading(true);
        const response = await fetch("https://api.cloudinary.com/v1_1/dirnuoddr/image/upload", {
            method: "POST",
            body: data,
        })
        const file = await response.json();
        setImage(file.secure_url);
        console.log(file.secure_url);
        setLoading(false);

        setProdOfEdit({
            ...prodOfEdit,
            [event.target.name]: file.secure_url
        })
    };

    const handleSubcaty = (event) => {
        setProdOfEdit({
            ...prodOfEdit,
            subcategories: [event.target.value],
        });
    };
    useEffect(() => {
        setProductOfSee(productsOfSee)
        setProdOfEdit(productOfEdit)
    }, [productOfEdit, productsOfSee])

    return (

        <div >
            {!prodOfEdit._id && <div >
                <h4>buscar producto</h4>
                <label htmlFor=""> buscar</label>
                <input value={valueInput} onChange={handleProductsOfSee} type="text" />
                <button onClick={handleclearProductsOfSee}>Limpiar busqueda</button>

            </div>}

            {!productOfEdit._id && productOfSee.length > 0 && <ul className={style1.list}>

                <li className={style1.li}>

                    <p className={style1.lista}>Editar</p>
                    <p className={style1.liname}>Titulo:</p>
                    <p className={style1.limarc}>Marca:</p>
                    <p className={style1.liprec}>Precio:</p>
                    <p className={style1.listo}>Stock:</p>
                    <p className={style1.licat}>Sub-categ:</p>
                    <p className={style1.lirat}>Rating:</p>

                </li>

                {productsOfSee.map(pro => {

                    return (
                        <li className={style1.li}>

                            <button className={style1.lista} onClick={() => handlePut(pro)}>
                                <i class="bi bi-pencil-square"> </i>
                            </button>


                            <p className={style1.liname}> {pro.name}</p>

                            <p className={style1.limarc}>{pro.brand}</p>

                            <p className={style1.liprec}>{pro.price}</p>

                            <p className={style1.listo}>{pro.stock}</p>

                            <p className={style1.licat}>{pro.subcategories[0]}</p>

                            <p className={style1.lirat}>{pro.rating}</p>



                        </li>
                    )
                })}

            </ul>}


            {prodOfEdit._id && <form action="" className={style2.form} onSubmit={handleSubmit}>
                <div className={style2.contfor1y2}>
                    <div className={style2.formuno}>
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

                    <div className={style2.formdos}>
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

                        {!image && <img src={prodOfEdit.image} style={{ width: "150px" }} />
}

                        {/* ------------- image ---------------- */}
                        <FormGroup className={style1.subirImg}>
                            <label htmlFor="image">Subir Imagen</label><br />
                            <Input type="file" name="image" placeholder="Subir imagen" onChange={uploadImage} />
                            {
                                loading ? (<p>Cargando imagen...</p>) : (<img src={image} style={{ width: "150px" }} />)
                            }
                        </FormGroup>

                        {errors.image && <p className="error">{errors.image}</p>}
                        {/* ------------- image ----------------  */}

                        <label htmlFor="subcategories">ID de la Subcategoria</label>
                        <input
                            name="subcategories"
                            value={prodOfEdit.subcategories}
                            type="text"
                            onChange={handleSubcaty}
                        />
                        {errors.subcategories && <p className="error">{errors.subcategories}</p>}
                    </div>
                </div>
                <button className={style2.createBtn} disabled={!prodOfEdit.brand || !prodOfEdit.description || !prodOfEdit.name || !prodOfEdit.image || errors.name || errors.brand || errors.image || errors.description || errors.stock || errors.price}>Editar producto</button>
            </form>}
        </div>
    )
}

export default PutPro;