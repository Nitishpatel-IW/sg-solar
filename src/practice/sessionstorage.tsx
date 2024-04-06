import { useEffect, useState } from "react";
import styles from './style.module.scss';
import CustomBtn from "../components/buttons/orangeButton";

const Sessionstorage = () => {
    const win = sessionStorage;

    const [name, setName] = useState(win.getItem('name') || '');
    const [email, setEmail] = useState(win.getItem('email') || '');


    const handleSubmit = (e: any) => {
        e.preventDefault();
        win.clear();
        setName('');
        setEmail('');
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
                <h2>Session Storage</h2>
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
                        <CustomBtn>Submit</CustomBtn>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Sessionstorage;
