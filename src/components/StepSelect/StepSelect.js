import edit from "../../assets/img/Edit.svg";
import React from "react";

function StepSelect() {
    return (
        <div className="step">
            <div className="step__status step__status_active">1</div>
            <div className="step__name">Выбор заявителя</div>
            <div className="edit"><img src={edit} alt="изменить" className="edit__img"/>
                <div className="edit__text">Изменить</div>
            </div>
            <div className="step__content ">
                <div className="option option_not-marked option_radio">
                    <input className="custom-radio option__radio" type="radio" id="individual" name="applicant-type"/>
                    <label htmlFor="individual" className="option__name">Константинопольский К.К.</label>
                    <div className="option__type">Физическое лицо</div>
                </div>
                <div className="option option_not-marked option_radio">
                    <input className="custom-radio option__radio" type="radio" id="entity" name="applicant-type"/>
                    <label htmlFor="entity" className="option__name">ООО «Константинополь»</label>
                    <div className="option__type">Юридическое лицо</div>
                </div>
                <button className="button button_primary button_big">Продолжить</button>
            </div>
        </div>
    )
}

export default StepSelect