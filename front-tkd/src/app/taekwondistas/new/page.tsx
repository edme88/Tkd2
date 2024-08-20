"use client";
import Input from "@/components/inputs/inputs";
import InputDate from "@/components/inputs/inputs.date";
import InputNumber from "@/components/inputs/inputs.number";
import { useState } from "react";
export default function NewTaekwondista() {

//Taekwondista
const [name, setName] = useState("");
const [surname, setSurname] = useState("");
const [dni, setDni] = useState("");
const [birthDate, setBirthDate] = useState("");
const [address, setAddress] = useState("");
//categoria
//instructor a cargo
const [weight, setWeight] = useState("");
const [height, setHeight] = useState("");
//genero
//nacionalidad
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");

//Contacto de Emergencia
const [nameContacto, setNameContacto] = useState("");
const [surnameContacto, setSurnameContacto] = useState("");
const [phoneContacto, setPhoneContacto] = useState("");
const [vinculoContacto, setVinculoContacto] = useState("");

  return (
    <section className="formTkd">
        <fieldset>
            <legend>Nuevo Taekwondista:</legend>
            <Input id={"nombre"} placeholder={"Ingrese su Nombre"} labelTxt={"Nombre"} setInputValue={setName}></Input>
            <Input id={"apellido"} placeholder={"Ingrese su Apellido"} labelTxt={"Apellido"} setInputValue={setSurname}></Input>
            <InputNumber id={"dni"} placeholder={"Ingrese su DNI"} labelTxt={"DNI"} setInputValue={setDni}></InputNumber>
            <InputDate id={"fecha-nacimiento"} labelTxt={"Fecha de Nacimiento"} setInputValue={setBirthDate}></InputDate>
            <Input id={"direccion"} placeholder={"Ingrese su Dirección"} labelTxt={"Dirección"} setInputValue={setAddress}></Input>
            Categoría
            Instructor a Cargo
            <InputNumber id={"peso"} placeholder={"Ingrese su Peso"} labelTxt={"Peso"} setInputValue={setWeight}></InputNumber>
            <InputNumber id={"altura"} placeholder={"Ingrese su Altura"} labelTxt={"Altura"} setInputValue={setHeight}></InputNumber>
            Genero
            Nacionalidad
            <InputNumber id={"celular"} placeholder={"Ingrese su Celular"} labelTxt={"Celular"} setInputValue={setPhone}></InputNumber>
            <Input id={"email"} placeholder={"Ingrese su Email"} labelTxt={"Email"} setInputValue={setEmail}></Input>
        </fieldset>
        <fieldset>
            <legend>Contacto de Emergencia:</legend>
            <Input id={"nombreContacto"} placeholder={"Nombre de Contacto"} labelTxt={"Nombre de Contacto"} setInputValue={setNameContacto}></Input>
            <Input id={"apellidoContacto"} placeholder={"Apellido de Contacto"} labelTxt={"Apellido de Contacto"} setInputValue={setSurnameContacto}></Input>
            <InputNumber id={"celularContacto"} placeholder={"Celular de Contacto"} labelTxt={"Celular"} setInputValue={setPhone}></InputNumber>
            <Input id={"vinculo"} placeholder={"Vínculo"} labelTxt={"Vínculo"} setInputValue={setVinculoContacto}></Input>
        </fieldset>
        <button type="button">Guardar Datos</button>
    </section>
  );
}