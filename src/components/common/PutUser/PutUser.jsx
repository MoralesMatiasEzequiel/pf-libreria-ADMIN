import { useSelector } from "react-redux";
import style from "./PutUser.module.css";
import { useState } from "react";

const PutUsers = () => {

    const { users } = useSelector(state => state.user);
    const [ userEdit, setUserEdit ] = useState(
        {
            id: users._id,
            active: true
        }
    );

    const handleSubmit = () => {
        
    }

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
};

export default PutUsers;