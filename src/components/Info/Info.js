import React from "react";
import arms from "../../assets/img/Framearms.svg";

function Info() {
    return (
        <section className="info">
            <div className="container container_space-between">
                <div className="info__wrap info__wrap_big">
                    <h1 className="info__title">Выдача градостроительного плана земельного участка</h1>
                    <p className="info__desc">Градостроительный план земельного участка выдается в целях обеспечения субъектов градостроительной деятельности информацией, необходимой для <br/> архитектурно-строительного проектирования, строительства, реконструкции объектов капитального строительства в границах земельного участка.</p>
                </div>
                <div className="info__wrap info__wrap_small"><img src={arms} alt="герб" className="info__arms"/>
                    <div className="info__provided-by">Услугу предоставляет</div>
                    <div className="info__provider">Орган местного самоуправления</div>
                </div>
            </div>
        </section>
    )
}

export default Info