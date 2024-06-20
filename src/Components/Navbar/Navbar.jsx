import { useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/loginSignUp');
    }

    return (
        <div className='nav'>
            <div className="nav-logo">원격진료시스템</div>
            <ul className="nav-menu">
                <li className="nav-home">홈</li>
                <li className="nav-reservation">진료 예약</li>
                <li className="nav-myPage">마이페이지</li>
                <li className="nav-login" onClick={handleClick}>회원가입/로그인</li>  
            </ul>
        </div>
    );
}

export default Navbar
