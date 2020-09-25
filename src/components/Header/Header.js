import logo from "../../assets/img/Framelogo.svg";
import user from "../../assets/img/User.svg";
import React from "react";

function Header() {
    return (
        <header className="header">
            <div className="container container_space-between container_vertical-center">
                <a href="##" className="header__wrap">
                    <img src={logo} alt="Услуги и сервисы Пермского края" className="header__logo"/>
                    <div className="header__company-name">Услуги и сервисы Пермского края</div>
                </a>
                <div className="header__wrap">
                    <a href="##" className="header__user"><img src={user} alt="пользователь" className="header__user"/></a>
                    <a href="##" className="header__user-name">Константинопольский К.К</a>
                    <a href="##" className="header__logout">Выйти</a>
                </div>
            </div>
        </header>
    )
}

export default Header