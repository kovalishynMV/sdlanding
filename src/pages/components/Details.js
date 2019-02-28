import React from 'react';
import '../../index.scss';

class Details extends React.Component {
    render() {
        return (
            <div className="details__bg">
                <h2 className="details__headline">
                    StudyDive Pass у деталях:
                </h2>
                <h3>
                    499 грн/місяць
                </h3>
                <h6>
                    промоціна для наших найперших 499 клієнтів
                </h6>

                <div className="details__cards">
                    <div className="details__card_green">
                        <p>Реєструйтеся першими на безкоштовні події наших партнерів та ексклюзивні події StudyDive</p>
                    </div>

                    <div className="details__card_blue">
                        <p>Відвідуйте до 3-х освітніх подій протягом місяця</p>
                        <h6>вартістю до 400 грн за 1 подію</h6>
                    </div>

                    <div className="details__card_purple">
                        <p>Почніть це все вже цього квітня</p>
                        <h6>Iнформація про точну дату початку буде відома трохи пізніше</h6>
                    </div>

                    <div className="details__card_yellow">
                        <p>Зберігайте ваші навчальні матеріали у власному кабінеті</p>
                    </div>

                    <div className="details__card_red">
                        <p>Отримуйте 20% знижку на події вартістю від 400 грн</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;