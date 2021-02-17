import React, { useEffect, useState } from 'react';
import './add.css';


export default function Add(props) {
    const [display, setdisplay] = useState("form-none");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [emailWrong, setEmailWrong] = useState(true);
    const [id, setId] = useState("");
    const [idError, setIdError] = useState("");
    const [idWrong, setIdWrong] = useState(true);
    const [firstName, setfirstName] = useState("");
    const [firstNameError, setfirstNameError] = useState("");
    const [firstNameWrong, setfirstNameWrong] = useState(true);
    const [lastName, setlastName] = useState("");
    const [lastNameError, setlastNameError] = useState("");
    const [lastNameWrong, setlastNameWrong] = useState(true);
    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [phoneWrong, setPhoneWrong] = useState(true);

    const [formValid, setFormValid] = useState(false);


    function AddForm() {
        setdisplay("form-active")
    }

    useEffect(() => {
        if (emailWrong || idWrong || firstNameWrong || lastNameWrong || phoneWrong) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailWrong, idWrong, firstNameWrong, lastNameWrong, phoneWrong])


    function emailHandler(e) {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError("Некорректный email")
            setEmailWrong(true)
        } else {
            setEmailError("")
            setEmailWrong(false)
        }
    }

    function idHandler(e) {
        setId(e.target.value)
        if (e.target.value) {
            setIdError('')
            setIdWrong(false)
        } else {
            setIdError('id не может быть пустым')
            setIdWrong(true)
        }
    }

    function firstNameHandler(e) {
        setfirstName(e.target.value)
        const re = /^[a-zA-Z]+$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setfirstNameError("Некорректное Имя")
            setfirstNameWrong(true)
        } else {
            setfirstNameError("")
            setfirstNameWrong(false)
        }
    }

    function lastNameHandler(e) {
        setlastName(e.target.value)
        const re = /^[a-zA-Z]+$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setlastNameError("Некорректная фамилия")
            setlastNameWrong(true)
        } else {
            setlastNameError("")
            setlastNameWrong(false)
        }
    }
    function phoneHandler(e) {
        setPhone(e.target.value)
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        if (!re.test(String(e.target.value).toLowerCase())) {
            setPhoneError("Некорректный номер телефона")
            setPhoneWrong(true)
        } else {
            setPhoneError("")
            setPhoneWrong(false)
        }
    }

    function AddItem(e) {

        let value = {
            id: id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            address: {
                streetAddress: 'Данные неизвестны',
                city: 'Данные неизвестны',
                state: 'Данные неизвестны',
                zip: 'Данные неизвестны'
            },
            description: 'Данные неизвестны',
        }

        props.getItem(value)
        setId("")
        setEmail("")
        setfirstName("")
        setlastName("")
        setPhone("")
        setFormValid(false)
        setIdWrong(true)
        setEmailWrong(true)
        setfirstNameWrong(true)
        setlastNameWrong(true)
        setPhoneWrong(true)
    }
    return (
        <>
            <button onClick={AddForm}>
                Добавить
            </button>
            <form className={display} onSubmit={e => { e.preventDefault(); }}>
                <label >
                    <p>Id</p>
                    <div>{idError}</div>
                    <input type="number" onChange={idHandler} value={id} name="id" placeholder="Enter id" />
                </label>
                <label >
                    <p>firstName</p>
                    <div>{firstNameError}</div>
                    <input onChange={firstNameHandler} value={firstName} name="firstName" type="text" placeholder="Enter firstName" />
                </label>
                <label >
                    <p>lastName</p>
                    <div>{lastNameError}</div>
                    <input onChange={lastNameHandler} value={lastName} name="lasttName" type="text" placeholder="Enter lastName" />
                </label>
                <label >
                    <p>email</p>
                    <div>{emailError}</div>
                    <input onChange={emailHandler} value={email} name="email" type="text" placeholder="Enter your email" />
                </label>
                <label >
                    <p>phone</p>
                    <div>{phoneError}</div>
                    <input onChange={phoneHandler} value={phone} name="phone" type="text" placeholder="Enter phone" />
                </label>
                <button onClick={AddItem} disabled={!formValid} >Добавить в таблицу</button>
            </form>

        </>
    )
}