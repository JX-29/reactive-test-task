import React from "react";
import check from "../../assets/img/Check.svg";

function StepReceived({currStep, step, stepView}) {

    return (
        <div className="step step_received">
            <div className="step__status step__status_completed"><img src={check} alt="выполнено"/></div>
            <div className={`step__name ${stepView.setStepNameColor(step)}`}>Заявление принято</div>
            <div className={`step__content ${currStep === step ? '' : 'step__content_hidden'}`}>
                <div className="step__desc">Номер заявления <span className="step__app-number">RU-1234567</span>. Максимальный срок предоставления услуги — 20 рабочих дней. Следите за статусом заявления в Личном кабинете.</div>
                <div className="step__desc">Если у вас остались вопросы по оказанию услуги, пожалуйста, обращайтесь по телефону +7 (342) 123-45-67.</div>
                <div className="step__wrap">
                    <button className="button button_primary button_small">Вернуться в каталог</button>
                    <button className="button button_ghost button_small">Перейти в личный кабинет</button>
                </div>
            </div>
        </div>
    )
}

export default StepReceived