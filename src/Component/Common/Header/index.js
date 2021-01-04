import React ,{useContext, useEffect}from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BsBell, BsFillCaretDownFill } from "react-icons/bs"
import {Link} from "react-router-dom"
import { useHistory } from "react-router-dom"
import UserContext from '../../../context/UserContext'
import './styles.css'
const Header = () => {
    const history = useHistory()
    const [tab, setTab] = React.useState(0)
    const [user,setUser] = React.useState({})
    const {userData, setUserData} = useContext(UserContext)

    const onSetTab = (e) => {
        setTab(e)
    }
    useEffect(()=>{
        let data = localStorage.getItem("USER");
        data= JSON.parse(data);
        setUser({...data})
    },[])
    const logOutUser = ()=>{
        setUserData({
            token:undefined,
            user:undefined
        })
        localStorage.setItem("auth-token","")
        history.replace("/login");
    }
    return (
        <React.Fragment>
            <Container fluid className="Header">
                <Row>
                    <Col>
                        <div className="Header-left">
                            <div
                                className={`item ${tab === 0 ? "active" : ""}`}
                                onClick={() => onSetTab(0)}
                            >
                                <div>
                                    <span className="name">Home</span>
                                </div>
                            </div>
                                    <div
                                    className={`item ${tab === 1 ? "active" : ""}`}
                                    onClick={() => onSetTab(1)}
                                    >
                                    <div className="wrapper-item">
                                        <div>
                                            <span className="name">Nhân Viên</span>
                                            <BsFillCaretDownFill className="icon-drop"></BsFillCaretDownFill>
                                        </div>
                                        <div className="list-item">
                                            <p><Link to="/employee">Danh sách nhân viên</Link> </p>
                                            <p><Link to="/attendances/history">Lịch sử chấm công nv</Link></p>
                                        </div>
                                    </div>
                                </div>
                            
                            <div
                                className={`item ${tab === 2 ? "active" : ""}`}
                                onClick={() => onSetTab(2)}
                            >
                                <div className="wrapper-item">
                                    <div>
                                        <span className="name">Chấm Công</span>
                                        <BsFillCaretDownFill className="icon-drop"></BsFillCaretDownFill>
                                    </div>
                                    <div className="list-item">
                                        <p><Link to="/attendances/add">Chấm Công Ra Vào </Link></p>
                                        <p><Link to="/attendances/history">Lịch sử chấm công nv</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`item ${tab === 3 ? "active" : ""}`}
                                onClick={() => onSetTab(3)}
                            >
                                <div>
                                    <span className="name">Quản Lý dự án</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} md={2} xs={2} sm={2} className="header-right_">
                    {userData.user?(
                        <div className="header-right">
                            <div className="wrapper-item">
                                <div className="item-right" style={{minWidth:"150px"}}>
                                    <BsBell />
                                    <span>{user.fullname}</span>
                                    <BsFillCaretDownFill className="icon-drop"></BsFillCaretDownFill>
                                </div>
                                <div className="list-item">
                                    <p>xem profile</p>
                                    <p onClick={logOutUser}>Đăng xuất</p>
                                </div>
                            </div>
                        </div>
                    ):(<div></div>)}
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}


export default React.memo(Header)