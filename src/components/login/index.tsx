import { useEffect, useState } from "react";
import styles from './styles.module.scss';
import CustomBtn from "../buttons/orangeButton";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const win =localStorage;

    const [email, setEmail] = useState(win.getItem('email') || '');
    const [password,setPassword] = useState('');
    const navigate =useNavigate();

    const handleSubmit = (e:any) => {
        e.preventDefault();
        axios.post('http://localhost:3005/login',{email,password})
        .then(result => {
            console.log(result)
            if(result.data === "Success"){
                navigate('/home')
            }
        })
        win.clear();
        setEmail('');
        setPassword('');
    }

    useEffect(() => {
        const storedEmail = win.getItem('email');
        if (storedEmail !== null)
            setEmail(storedEmail);
    }, [])

    useEffect(() => {
        win.setItem('email', email);
    }, [email])

    return (
      <div className={styles.body}>
        <section className={styles.main}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.input}>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={styles.input}>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className={styles.input}>
                    <CustomBtn>Sign in</CustomBtn>
                </div>
            </form>
            <p>Not having account?</p>
            <Link to="/signup">
                <CustomBtn>Register</CustomBtn>
            </Link>
        </section>
      </div>  
    )
}

export default Login;
