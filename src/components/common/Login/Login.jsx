import { useState } from 'react';
import validation from './validation';
import style from './Login.module.css';
import { changeStateLogged } from '../../../redux/adminActions';
import { useDispatch } from 'react-redux';

const Form = () => {

    const dispatch = useDispatch();

    const email = 'plumalibreria@gmail.com'
    const password = 'tulibritoAPP'

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userData.email === email && userData.password === password) {
            dispatch(changeStateLogged());
        } else {
            alert('El email o el password son incorrectos.');
        }
    }

    return(
        <div className={style.container}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <br/>
                <input name="email" type="email" value={userData.email} onChange={handleChange}/>
                <br/>
                <label htmlFor="password">Password:</label>
                <br/>
                <input name="password" type="password" value={userData.password} onChange={handleChange}/>
                <br/>
                <p><button type="submit">Submit</button></p>
            </form>
        </div>
    )
}

export default Form;