"use client";
import styles from "./nav.module.css";

export default function Nav() {

  return (
    <nav className={styles.nav}>
      <a href="nuevoTkd.html" className={styles.a}>
        <span>Practicantes</span>
      </a>
      <a href="nuevoDojan.html" className={styles.a}>
          <span>Dojans</span>
      </a>
      <a href="nuevoTorneo.html" className={styles.a}>
          <span>Torneos</span>
      </a>
      <a href="nuevaCapacitacion.html" className={styles.a}>
          <span>Capacitaciones</span>
      </a>
      <a href="nuevoExamen.html" className={styles.a}>
          <span>Exámenes</span>
      </a>
      <div className={styles.submenu}>
          <a href="nuevoTkd.html"><span>Ingresar Nuevo Taekwondista</span></a>
          <a href="listarTkds.html"><span>Listar Taekwondistas</span></a>
      </div>
    </nav>
  );
}