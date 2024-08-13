"use client";
import styles from "./page.module.css";
import Btn from "@/components/btns/btn";
import React, { useEffect, useState } from 'react';
export default function Info() {

const [users, setUsers] = useState([]);

useEffect(() => {
  getUser()
}, []);

  const inscribirse = () => {
    alert("Te estas inscribiendo")
  }

  const cerrarModal = () => {
    alert("Se cancela")
  }

  const getUser = async() => {
    const response = await fetch("/api/users");
    const data = await response.json();
    setUsers(data);
    console.log(data)
    return (data)
  }

  return (
    <main className={`${styles.main} ${styles.hola}`}>
      <h1 className={styles.main}>Hola Mundo!</h1>
      <p id={styles.cuerpo}>un tetxo largo que dice algo</p>
      <Btn textBtn="Inscribirse!!!" onClFunct={getUser} className="ok"/>
      <Btn onClFunct={cerrarModal} className="error" textBtn="Cancelar" />
      {users.length>0 && users[0]?.email}
      <br />
      {users.length>0 && users.map((algo) => <p>{algo.email}</p>)}
    </main>
  );
}