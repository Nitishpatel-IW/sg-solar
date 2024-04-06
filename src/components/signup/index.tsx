import { useEffect, useState } from "react";
import styles from './styles.module.scss';
import CustomBtn from "../buttons/orangeButton";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const win = localStorage;

    const [name, setName] = useState(win.getItem('name') || '');
    const [email, setEmail] = useState(win.getItem('email') || '');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        axios.post('http://localhost:3005/register', { name, email, password })
            .then(result => {
                console.log(result)
                navigate('/login')
            })
            .catch(err => console.log(err))

        win.clear();
        setName('');
        setEmail('');
        setPassword('');
    }

    useEffect(() => {
        const storedName = win.getItem('name');
        const storedEmail = win.getItem('email');

        if (storedName !== null)
            setName(storedName);

        if (storedEmail !== null)
            setEmail(storedEmail);
    }, [])

    useEffect(() => {
        win.setItem('name', name);
        win.setItem('email', email);
    }, [name, email])

    return (
        <div className={styles.body}>
            <section className={styles.main}>
                <h2>Register</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.input}>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className={styles.input}>
                        <CustomBtn>Sign up</CustomBtn>
                    </div>
                </form>
                <p>Already have account?</p>
                <Link to="/login">
                    <CustomBtn>Login</CustomBtn>
                </Link>
            </section>
        </div>
    )
}

export default Signup;
