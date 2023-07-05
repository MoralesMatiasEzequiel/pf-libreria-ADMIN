import style from "./PutUser.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getUserByID } from "../../../redux/userActions";
import { updateUserStatus } from "../../../redux/userActions";

const PutUsers = () => {

    // const { userEdited } = useSelector(state => state.user);
    
    // const [userEdit, setUserEdit] = useState(userEdited);
    
    const { users } = useSelector(state => state.user);

    const [ editUser, setEditUser ] = useState("");
    // console.log(editUser);
    const dispatch = useDispatch();

    // const [ userEdit, setUserEdit ] = useState(
    //     {
    //         id: users._id,
    //         active: true
    //     }
    // );

    const handleChange = (event) => {
        setEditUser(event.target.value);
    };

    // const handleChangeB = (event) => {
    //     const { name, value } = event.target;
    //     setUserEdit((editUser) => ({
    //         ...editUser,
    //     }));
    // };
    

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          onSearch(editUser);
          setEditUser("");
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
            <div className={style.searchBar}>
                <h4>Editar usuario</h4>
                <input
                    name="_id"
                    type="search"
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    value={editUser}
                    placeholder="Ingrese ID del usuario:"
                />
                <button onClick={() => {
                onSearch(editUser);
                setEditUser("");
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