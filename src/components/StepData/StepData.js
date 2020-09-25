import edit from "../../assets/img/Edit.svg";
import React from "react";

function StepData() {
    return (
        <div className="step">
            <div className="step__status step__status_disabled">2</div>
            <div className="step__name step__name_disabled">Данные заявителя</div>
            <div className="edit"><img src={edit} alt="изменить" className="edit__img"/>
                <div className="edit__text">Изменить</div>
            </div>
            <form className="form step__content step__content__hidden">
                <label className="input input_large">
                    <span className="input__name">Фамилия</span>
                    <input type="text" name="last name" className="input__field"/>
                </label>
                <label className="input input_large">
                    <span className="input__name">Имя</span>
                    <input type="text" name="first name" className="input__field"/>
                </label>
                <label className="input input_large">
                    <span className="input__name">Отчество</span>
                    <input type="text" name="patronymic" className="input__field"/>
                </label>
                <label className="input input_large">
                    <span className="input__name">Электронная почта</span>
                    <input type="email" name="email" className="input__field"/>
                </label>
                <label className="input input_large">
                    <span className="input__name">Телефон</span>
                    <input type="tel" name="tel" className="input__field"/>
                </label>
                <div className="form__identification-title">Документ, удостоверяющий личность</div>
                <label className="input input_large">
                    <span className="input__name">Документ</span>
                    <input type="text" name="doctype" className="input__field"/>
                </label>
                <div className="form__wrap">
                    <label className="input input_160px">
                        <span className="input__name">Серия</span>
                        <input type="text" name="serial" className="input__field"/>
                    </label>
                    <label className="input input_256px">
                        <span className="input__name">Номер</span>
                        <input type="text" name="number" className="input__field"/>
                    </label>
                </div>
                <div className="form__date-title">Когда выдан</div>
                <div className="form__wrap">
                    <label className="input input_120px">
                        <span className="input__name input__name_gray">День</span>
                        <input type="text" name="day" className="input__field"/>
                    </label>
                    <label className="input input_120px">
                        <span className="input__name input__name_gray">Месяц</span>
                        <input type="text" name="month" className="input__field"/>
                    </label>
                    <label className="input input_176px">
                        <span className="input__name input__name_gray">Год</span>
                        <input type="text" name="year" className="input__field"/>
                    </label>
                </div>
                <button className="button button_primary button_big">Продолжить</button>
            </form>
        </div>
    )
}

export default StepData