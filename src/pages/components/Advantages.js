import React from 'react';
import '../../index.scss';

class Advantages extends React.Component {
    render() {
        return (
            <div className="advantages">

                <h2 className="advantages__headline">
                    Чому StudyDive Pass?
                </h2>

                <div className="advantages__box">
                    <div className="check"></div>
                    <h4>Ходіть на лекції з психології та теорії ігор, майстер-класи з літератури чи воркшопи з проектного менеджменту. Ми подбаємо про широту вибору</h4>
                </div>

                <div className="advantages__box">
                    <div className="check"></div>
                    <h4>Заощаджуйте разом із абонементом. Отримуйте найкращі ціни та ексклюзивні знижки на найцікавіші освітні події</h4>
                </div>

                <div className="advantages__box">
                    <div className="check"></div>
                    <h4>Обирайте з-поміж найкращих. Ми ретельно підходимо до вибору наших партнерів - освітніх організацій. Ми самостійно відвідуємо ті івенти, які рекомендуємо</h4>
                </div>

            </div>
        );
    }
}

export default Advantages;