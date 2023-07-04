import style from "./PutUser.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getUserByID } from "../../../redux/userActions";

const PutUsers = () => {

    const { userEdited } = useSelector(state => state.user);

    const [userEdit, setUserEdit] = useState(userEdited);

    // const { users } = useSelector(state => state.user);
    const [ editUser, setEditUser ] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    // const [ editUser, setEditUser ] = useState(formUser());
    // const [ userEdit, setUserEdit ] = useState(
    //     {
    //         id: users._id,
    //         active: true
    //     }
    // );

    const handleChange = (event) => {
        setEditUser(event.target.value);
    };

    const handleChangeB = (event) => {
        const { name, value } = event.target;
        setUserEdit((editUser) => ({
            ...editUser,
        }));
    };
    

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          onSearch(editUser);
          setEditUser("");
          navigate(`/users/${editUser}`); 
        }
    };

    const onSearch = async (_id) => {
        if (_id) {
          dispatch(getUserByID(_id));
        }
    };




    const handleSubmit = () => {
        
    }

    return (
        <div className={style.postcont}>
            <div>
                <h1>Editar usuario</h1>
                <label htmlFor="id">Ingrese el ID del usuario: </label>
                <input
                    name="id"
                    type="search"
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    value={editUser}
                    placeholder="Buscar usuario"
                />
                <button onClick={() => {
                onSearch(editUser);
                setEditUser("");
                navigate(`/users/${editUser}`);
                }}>Buscar</button>
            </div>
            
        </div>
    )
};

export default PutUsers;

/*
return (
        <div className={style.postcont}>
            <ul className={style.list}>                
                {users.map((user, index = 1) => {
                    return (
                        <li key={index} className={style.li}>
                            <p>{index + 1}</p>
                            <p>Id: {user._id}</p>
                            <p>Nombre: {user.name}</p>
                            <p>Nickname: {user.nickname}</p>
                            <p>E-mail: {user.email}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
*/