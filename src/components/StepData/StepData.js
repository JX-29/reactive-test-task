import edit from "../../assets/img/Edit.svg";
import React from "react";




class StepData extends React.Component {

    state = {
        lastName: '',
        firstName: '',
        patronymic: '',
        email: '',
        tel: '',
        docType: '',
        passportId: '',
        passportSeries: '',
        day: '',
        month: '',
        year: '',
    }

    //вносим значение из поля в нужное свойство state. Передаем название поля и ивент
    changeValue = (fieldValue, e) => {
        this.setState({
            [fieldValue]: e.target.value
        })
    }

    render() {
        const {currStep, changeStep, step, stepView, setValue} = this.props
        const {lastName, firstName, patronymic, email, tel, docType, passportId, passportSeries, day, month, year} = this.state


        //проверяет заполненность всех значений полей заявления. Функция стрелочная чтобы не сбивать контекст state
        const fieldsFilled = () => {
            if (lastName && firstName && patronymic && email && tel && docType && passportId && passportSeries && day && month && year) {
                return (changeStep.next(step), setValue(this.state))
            } else {
                alert('Заполните все поля')
                return false
            }
        }

        return (
            <div className="step">
                <div className={`step__status ${stepView.setStepColor(step)}`}>{stepView.setStepSymbol(step)}</div>
                <div className={`step__name ${stepView.setStepNameColor(step)}`}>Данные заявителя</div>
                <div className={`edit ${currStep > step ? '' : 'edit_hidden'}`} onClick={() => changeStep.edit(step)}><img src={edit} alt="изменить" className="edit__img"/>
                    <div className="edit__text">Изменить</div>
                </div>
                <div className={`form step__content ${currStep === step ? '' : 'step__content_hidden'}`}>
                    <label className="input input_large">
                        <span className="input__name">Фамилия</span>
                        <input type="text" name="last name" className="input__field" onChange={(e) => this.changeValue('lastName', e)} value={lastName}/>
                    </label>
                    <label className="input input_large">
                        <span className="input__name">Имя</span>
                        <input type="text" name="first name" className="input__field"  onChange={(e) => this.changeValue('firstName', e)} value={firstName}/>
                    </label>
                    <label className="input input_large">
                        <span className="input__name">Отчество</span>
                        <input type="text" name="patronymic" className="input__field"  onChange={(e) => this.changeValue('patronymic', e)} value={patronymic}/>
                    </label>
                    <label className="input input_large">
                        <span className="input__name">Электронная почта</span>
                        <input type="email" name="email" className="input__field"  onChange={(e) => this.changeValue('email', e)} value={email}/>
                    </label>
                    <label className="input input_large">
                        <span className="input__name">Телефон</span>
                        <input type="tel" name="tel" className="input__field"  onChange={(e) => this.changeValue('tel', e)} value={tel}/>
                    </label>
                    <div className="form__identification-title">Документ, удостоверяющий личность</div>
                    <label className="input input_large">
                        <span className="input__name">Документ</span>
                        <input type="text" name="doctype" className="input__field"  onChange={(e) => this.changeValue('docType', e)} value={docType}/>
                    </label>
                    <div className="form__wrap">
                        <label className="input input_160px">
                            <span className="input__name">Серия</span>
                            <input type="text" name="serial" className="input__field"  onChange={(e) => this.changeValue('passportSeries', e)} value={passportSeries}/>
                        </label>
                        <label className="input input_256px">
                            <span className="input__name">Номер</span>
                            <input type="text" name="number" className="input__field"  onChange={(e) => this.changeValue('passportId', e)} value={passportId}/>
                        </label>
                    </div>
                    <div className="form__date-title">Когда выдан</div>
                    <div className="form__wrap">
                        <label className="input input_120px">
                            <span className="input__name input__name_gray">День</span>
                            <input type="text" name="day" className="input__field"  onChange={(e) => this.changeValue('day', e)} value={day}/>
                        </label>
                        <label className="input input_120px">
                            <span className="input__name input__name_gray">Месяц</span>
                            <input type="text" name="month" className="input__field"  onChange={(e) => this.changeValue('month', e)} value={month}/>
                        </label>
                        <label className="input input_176px">
                            <span className="input__name input__name_gray">Год</span>
                            <input type="text" name="year" className="input__field"  onChange={(e) => this.changeValue('year', e)} value={year}/>
                        </label>
                    </div>
                    <button className="button button_primary button_big" onClick={() => fieldsFilled()}>Продолжить</button>
                </div>
            </div>
        )
    }
}

export default StepData