import React from 'react';
import '../../index.scss';

class Header extends React.Component {
    render() {
        return (
                <div className="header__bg">
                    <div className="header__left">
                        <div className="logo">
                            <h6>
                                ПІРНИ У НАВЧАННЯ
                            </h6>
                        </div>
                        <div className="header__text">
                            <h1>
                                StudyDive Pass - ваш персональний освітній абонемент
                            </h1>
                            <h4>
                                Широкий вибір освітніх подій від бізнесу до технологій і мистецтва. Лише ретельно відібрані освітні організації. Від 499 грн на місяць
                            </h4>
                        </div>
                    </div>
                    <div className="header__right">
                        <div className="header__narval"></div>
                    </div>
                </div>
        );
    }
}   

export default Header;