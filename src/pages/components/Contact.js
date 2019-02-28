import React from 'react';
import '../../index.scss';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            conditions: true,
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    render() {
        return (
            <div className="contact__main">
                <h2 className="contact__headline">
                    Цікаво? Нам теж :)
                </h2>

                <h4>Залиште ваші контакти, і ми повідомимо, коли абонементи будуть готові!</h4>

                <form>
                    <label>
                        Я ознайомлений і приймаю Умови користування сайтом та умови Політики конфіденційності
                        <input
                            name="conditions"
                            type="checkbox"
                            checked={this.state.conditions}
                            onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>
                        Я дозволяю обробку моїх персональних даних з метою отримання від StudyDive інформації про абонемент StudyDive.
                        <input
                            name="agreement"
                            type="checkbox"
                            checked={this.state.agreement}
                            onChange={this.handleInputChange} />
                    </label>
                </form>

                <form>
                    <label>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>

                    <label>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>

                    <label>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>

                    <button onClick={this.handleChange}>
                        Підписатися
                    </button>
                </form>
            </div>
        );
    }
}

export default Contact;