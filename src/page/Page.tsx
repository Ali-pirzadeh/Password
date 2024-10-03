import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import "./page.css";
import { Col, Row } from 'react-bootstrap';

export const Page = () => {
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(FaRegEyeSlash);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ email: false, password: false });

    const seeHandler = () => {
        if (type === 'password') {
            setType("text");
            setIcon(FaRegEye);
        } else {
            setType("password");
            setIcon(FaRegEyeSlash);
        }
    };

    const handleSubmit = () => {
        const newErrors = {
            email: email === "",
            password: password === ""
        };
        setErrors(newErrors);

        if (!newErrors.email && !newErrors.password) {
            // Submit form
            console.log("Form submitted");
        }
    };

    return (
        <>
            <Row className='wraper'>
                <Col className='input-fields col-12'>
                    <input 
                        placeholder='نام' 
                    />
                </Col>
                <Col className='input-fields col-12'>
                    <input 
                        placeholder='نام خانوادگی' 
                    />
                </Col>
                <Col className='input-fields col-12'>
                    <input 
                        placeholder='ایمیل' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">ایمیل اجباری است</span>}
                </Col>
                <Col className='input-fields col-12 '>
                    <input 
                        type={type} 
                        placeholder='رمز عبور' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={errors.password ? 'error' : ''}
                    />
                    {errors.password && <span className="error-message">رمز عبور اجباری است</span>}
                    <h3 onClick={seeHandler}>{icon}</h3>
                </Col>
                <button 
                    className='btn' 
                    onClick={handleSubmit}
                    disabled={email === "" || password === ""}
                >
                    ارسال
                </button>
            </Row>
        </>
    );
};
