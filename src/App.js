import React from 'react';
import './style/style.scss'
import {Header, Info, StepConsent, StepData, StepReceived, StepSelect} from "./components";
import check from "./assets/img/Check.svg";


function App() {

  //хук, предназначенный для хранения и обновления информации о заявлении. В конце выводит в консоль информацию о сформированном заявлении
  const [application, setApplication] = React.useState({})

  function setApplicationValue(value) {
    setApplication( {...application , ...value})
  }


  //хук используется чтобы переходить на следующий шаг после нажатия на кнопку. Состояние должно быть только числом, так как в компонентах используется строгое равенство. В скобках указывается номер шага, с которого начинается работа
  const [currStep, setCurrStep] = React.useState(1)
  //хук, используемый для скрытия трех шагов после отправки заявления и отображения "заявление принято"
  const [sent, setSent] = React.useState(false)


  //объект с методами для выбора шага. Позволяет перейти на следующий, если поля заполнены или изменить уже заполненный шаг
  const changeStep = {
    //функция принимает значение номера шага (оно хранится в компоненте и отображается в кружке слева) и передает значение следующего шага (добавляя +1 к текущему).
    next: function nextStep(stepNum, e) {
      setCurrStep(stepNum+1)
    },
    //функция для возвращения к выполненному шагу для его изменения
    edit: function editStep(stepNum) {
      setCurrStep(stepNum)
    },
  }

  //объект с методами для манипуляций со стилями заголовка шага и его номера
  const stepView = {
    //устанавливает цвет в зависимости от положения шага (если шаг выполнен, то есть его номер меньше текущего шага, то зеленый, если равен текущему шагу - синий, если меньше, то есть до него еще не дошли - серый)
    setStepColor: function setStepColor(step) {
      if (step === currStep) {
        return 'step__status_active'
      } else if (step > currStep) {
        return 'step__status_disabled'
      } else if (step < currStep) {
        return "step__status_completed"
      }
    },
    //передает для невыполненных шагов серый цвет текста в заголовке
    setStepNameColor: function setStepNameColor(step) {
      if (step <= currStep) {
        return ''
      } else if (step > currStep) {
        return 'step__name_disabled'
      }
    },
    //передает символ для номера шага в круге (галочку для выполненных шагов и число для текущих или невыполненных)
    setStepSymbol: function setStepSymbol(step) {
      if (step < currStep) {
        return <img src={check} alt="выполнено"/>
      } else if (step >= currStep) {
        return step
      }
    }
}

  //выводит после отправки заявление в консоль
  function applicationAccepted() {
    setSent(true)
    console.log(application)
    alert("Заявление принято. Данные вашего заявления вы можете увидеть в консоли")
  }

  return (
    <div className="App">
      <Header/>
      <main className="main">
        <Info/>
        <div className="container">
          <hr className="divider"/>
        </div>
        <section className="steps">
          <div className="container container_column">
            {!sent && <StepSelect setValue = {(value) => setApplicationValue(value)} currStep = {currStep} changeStep = {changeStep} stepView = {stepView} step = {1}/>}
            {!sent && <StepData setValue = {(value) => setApplicationValue(value)} currStep = {currStep} changeStep = {changeStep} stepView = {stepView} step = {2}/>}
            {!sent &&<StepConsent application = {application} currStep = {currStep} changeStep = {changeStep} stepView = {stepView} sendApplication = {() => applicationAccepted()} step = {3}/>}
            {sent && <StepReceived currStep = {currStep} changeStep = {changeStep} stepView = {stepView} step = {4}/>}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
