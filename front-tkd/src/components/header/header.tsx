"use client";
import { useEffect, useState } from "react";
import styles from "./header.module.css";

export default function Header() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");//Siempre es "la cosa" y el set de "la cosa"

  useEffect(() => {
    console.log(`Me estoy modificnado`)
  }, [email]);

  const handleEmail = (e: { target: { value: string } }) => {
    console.log(e.target.value)
    setEmail(e.target.value);
  }

  const handlePassword = (e: { target: { value: string } }) => {
    console.log(e.target.value)
    setPassword(e.target.value);
  }

  const login = async() => {
    console.log(email, password);
    const response = await fetch('/api/login', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(
        {
          "username": email,
          "password": password
        }
      )
     });

    const data = await response.json();
    console.log(data)
    return (data)
  }

  return (
    <header className={`${styles.header}`}>
      <button type="button">Crear Cuenta</button>
        Email: <input type="text" placeholder="Email o Usuario" onChange={handleEmail}></input>
        Password: <input type="password" placeholder="Password" onChange={handlePassword}></input>
        <button type="button" onClick={login}>Inscribirse</button>
    </header>
  );
}