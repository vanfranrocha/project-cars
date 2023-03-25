import styles from './LoginForm.module.css'
import AuthService from '../services/login.service'
import { useState } from 'react'

function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setEmail(username);
      };
    
      const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
      };
    const handleLogin = (e) => {
        e.preventDefault();
        setMessage("");
        const getToken = localStorage.getItem('userToken')
        AuthService.login(email, password).then(
            () => {
                if(getToken){
                    console.log(getToken)
                    setMessage(null)
                } else {
                    const resMessage = 'Email e/ou senha incorreto(s)'
                    setMessage(resMessage)
                }
            },
            (error) => {
                console.log(error)
            }
        )
    }
 return (
    <div>
        <form onSubmit={handleLogin} className={styles.formLogin}>
            <div className={styles.formGroup}>
                <label>E-mail</label>
                <input name='E-mail' value={email} onChange={onChangeUsername} type="text" aria-label='Usuário'></input>
            </div>
            <div className={styles.formGroup}>
                <label>Senha</label>
                <input name='Senha' value={password} onChange={onChangePassword} type="password" aria-label='Senha'></input>
            </div>
            <button type='submit' name="Entrar" className={styles.btnLogin}>Entrar</button>
            {message && (
                <div className={styles.formMessage}>
                    <strong>Atenção:</strong> {message}
                </div>
            )}
        </form>
    </div>
 )
}

export default LoginForm