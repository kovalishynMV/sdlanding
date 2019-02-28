import React from 'react';
import '../../index.scss';
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import Checkbox from './Checkbox'
import Input from './Input'

class Contact extends React.Component {
    state = { checked: false }

    handleCheckboxChange = event => {
        this.setState({ checked: event.target.checked })
    }

    render() {
        return (
            <div className="contact__main">
                <h2 className="contact__headline">
                    Цікаво? Нам теж :)
                </h2>

                <h4>Залиште ваші контакти, і ми повідомимо, коли абонементи будуть готові!</h4>

                <form>
                    <label style={{ paddingBottom: 20 }}>
                        <Checkbox
                            checked={this.state.checked}
                            onChange={this.handleCheckboxChange}
                        />
                        <h5 style={{ marginLeft: 15 }}>Я ознайомлений і приймаю <a href=""> Умови користування сайтом </a> та <a href="">умови Політики конфіденційності</a> </h5>
                    </label>

                    <label style={{ paddingBottom: 40 }}>
                        <Checkbox
                            checked={this.state.checked}
                            onChange={this.handleCheckboxChange}
                        />
                        <h5 style={{ marginLeft: 15 }}>Я дозволяю обробку моїх персональних даних з метою отримання від StudyDive інформації про абонемент StudyDive.</h5>
                    </label>
                </form>

                <div className="contact__inputs" style={{ marginBottom: 40 }}>
                    <label>
                        <input 
                            value={this.state.value} onChange={this.handleChange}
                            type="text"
                            placeholder="Ваше ім'я"
                        />
                    </label>

                    <label>
                        <input 
                            value={this.state.value} onChange={this.handleChange}
                            type="text"
                            placeholder="Номер телефону"
                        />
                    </label>

                    <label>
                        <input 
                            value={this.state.value} onChange={this.handleChange}
                            type="text"
                            placeholder="E-mail"
                        />
                    </label>

                    <button className="mainButton" onClick={this.handleChange}>
                        Підписатися
                    </button>
                </div>
            </div>
        );
    }
}

export default Contact;