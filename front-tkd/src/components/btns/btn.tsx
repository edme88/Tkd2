"use client";
import styles from "./btn.module.css";

interface ButtonPropsIterface{
    textBtn: string;
    onClFunct: () => void;
    className: string;
}
export default function Btn({textBtn, onClFunct, className}:Readonly<ButtonPropsIterface>) {
  return (
    <button className={`${styles.btn} ${styles[className]}`} onClick={onClFunct}>
        {textBtn}
    </button>
  );
}