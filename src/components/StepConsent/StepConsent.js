import edit from "../../assets/img/Edit.svg";
import bell from "../../assets/img/Bell.svg";
import React from "react";


function StepConsent() {
    return(
        <div className="step">
            <div className="step__status step__status_disabled">3</div>
            <div className="step__name step__name_disabled">Согласие</div>
            <div className="edit"><img src={edit} alt="изменить" className="edit__img"/>
                <div className="edit__text">Изменить</div>
            </div>
            <div className="step__content step__content__hidden">
                <div className="demands">
                    <div className="demands__name">Требуется ваше согласие по следующим пунктам:</div>
                    <ul className="demands__items">
                        <li className="demands__item">
                            <div className="demands__point">.</div>
                            Я подтверждаю, что вся представленная информация является достоверной и точной;
                        </li>
                        <li className="demands__item">
                            <div className="demands__point">.</div>
                            Я несу ответственность в соответствии с действующим законодательством Российской Федерации
                            за предоставление заведомо ложных или неполных сведений;
                        </li>
                        <li className="demands__item">
                            <div className="demands__point">.</div>
                            Я выражаю свое согласие на необходимое использование и обработку своих персональных данных,
                            в том числе в информационных системах;
                        </li>
                        <li className="demands__item">
                            <div className="demands__point">.</div>
                            Со сроками оказания государственной услуги ознакомлен.
                        </li>
                    </ul>
                </div>
                <div className="option option_not-marked">
                    <input type="checkbox" className="custom-checkbox option__checkbox" id="confirm-consent"
                           name="confirm-consent"/>
                    <label htmlFor="confirm-consent" className="option__accept">Я подтверждаю свое согласие со всеми
                        вышеперечисленными пунктами</label>
                </div>
                <div className="option option_not-marked">
                    <input type="checkbox" className="custom-checkbox option__checkbox" id="notified" name="notified"/>
                    <label htmlFor="notified" className="option__accept">Я уведомлен о том, что результат будет получен
                        в электронном виде</label>
                </div>
                <div className="option option_reminder">
                    <img src={bell} alt="" className="option__bell-img"/>
                    <div className="option__reminder">Пожалуйста, еще раз внимательно проверьте все данные перед
                        отправкой
                    </div>
                </div>
                <button className="button button_primary button_big">Отправить</button>
                <div className="option__storage-rules">Нажимая кнопку «Отправить», вы соглашаетесь с <a href="##"
                                                                                                        className="option__link">правилами
                    хранения и обработки персональных данных</a></div>
            </div>
        </div>
    )
}

export default StepConsent