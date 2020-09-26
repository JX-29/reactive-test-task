import edit from "../../assets/img/Edit.svg";
import React from "react";



function StepSelect({currStep, changeStep, step, stepView, setValue}) {

    const [option, setOption] = React.useState();

    function changeOption(optionName) {
        setOption(optionName)
    }

    //проверяет значение перед отправкой. Если ни один из вариантов не выбран, блокирует переход к следующему шагу
    function valueCheck() {
        if (option) {
            return (changeStep.next(step),
            setValue({applicantType: option})
            )
        } else {
            alert("Выберите тип заявителя")
            return false
        }
    }

    return (
        <div className="step">
            <div className={`step__status ${stepView.setStepColor(step)}`}>{stepView.setStepSymbol(step)}</div>
            <div className={`step__name ${stepView.setStepNameColor(step)}`}>Выбор заявителя</div>
            <div className={`edit ${currStep > step ? '' : 'edit_hidden'}`} onClick={() => changeStep.edit(step)}><img src={edit} alt="изменить" className="edit__img"/>
                <div className="edit__text">Изменить</div>
            </div>
            <div className={`step__content ${currStep === step ? '' : 'step__content_hidden'}`}>
                <div className={`option option_radio ${option === 'individual' ? 'option_marked' : 'option_not-marked'}`}>
                    <input className="custom-radio option__radio" type="radio" id="individual" name="applicant-type"/>
                    <label htmlFor="individual" className="option__name" onClick={() => changeOption("individual")}>Константинопольский К.К.</label>
                    <div className="option__type">Физическое лицо</div>
                </div>
                <div className={`option option_radio ${option === 'entity' ? 'option_marked' : 'option_not-marked'}`}>
                    <input className="custom-radio option__radio" type="radio" id="entity" name="applicant-type"
                           onClick={() => changeOption("entity")}/>
                    <label htmlFor="entity" className="option__name">ООО «Константинополь»</label>
                    <div className="option__type">Юридическое лицо</div>
                </div>
                <button className="button button_primary button_big" onClick={() => valueCheck()}>Продолжить</button>
            </div>
        </div>
    )
}

export default StepSelect