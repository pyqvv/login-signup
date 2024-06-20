import React, { useState } from 'react'
import './LoginSignUp.css'
import styles from '../../CSS/loginSignUp.css';

const LoginSignUp = () => {

    const [action,setAction] = useState("회원가입");

  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            {/*<div className='underline'></div>*/}
        </div>
        <div className='inputs'>
            {action==="로그인"?<div></div>:<div className="input">
                <div className='field_name'>이름</div>
                <input type="text" placeholder='Name' />
            </div>}
            {action==="로그인"?<div></div>:<div className="input">
                <div className='field_name'>주민등록번호</div>
                <div className='input_input'>
                    <input className="input_birth" type="text" placeholder='000000' maxLength="6" pattern="[0-9]{6}" required/>
                    -
                    <input className="input_birth" type="text" placeholder='0******' maxLength="1" pattern="[1-4]{1}" required/>
                </div>
            </div>}
            <div className="input">
                <div className='field_name'>이메일</div>
                <input type="email" placeholder='Email Id'/>
            </div>
            <div className="input">
                <div className='field_name'>비밀번호</div>
                <input type="password" placeholder='Password' />
            </div>
            {action==="로그인"?<div></div>:<div className="input">
                <div className='field_name'>전화번호</div>
                <div className='input_input'>
                    <input className="input_tel" type="text" placeholder='000' maxLength="3" pattern="[0-1]{3}" required/>
                    -
                    <input className="input_tel" type="text" placeholder='0000' maxLength="4" pattern="[0-9]{4}" required/>
                    -
                    <input className="input_tel" type="text" placeholder='0000' maxLength="4" pattern="[0-9]{4}" required/>
                </div>
            </div>}
        </div>
        {action==="회원가입"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
        <div className="submit-container">
            <div className={action==="로그인"?"submit gray":"submit"} onClick={()=>{setAction("회원가입")}}>회원가입</div>
            <div className={action==="회원가입"?"submit gray":"submit"} onClick={()=>{setAction("로그인")}}>로그인</div>
        </div>
    </div>
  )
}

export default LoginSignUp
