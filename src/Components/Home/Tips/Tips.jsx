import React from "react";
import './Tips.css';

const Tips = () => {
    return (
        <div className="container-fluid py-5">
            <div className="row row-tips justify-content-center text-center">
                <div className="card card-tips col-md-3 mx-3">
                    <div className="card-body">
                        <h4 className="card-title card-title-tips">Preparação para a Chegada do Pet</h4>
                        <p className="card-text card-text-tips">Prepare sua casa e família para receber um novo animal de estimação com segurança e conforto, incluindo itens essenciais e uma introdução gradual a outros animais de estimação, se aplicável.</p>
                    </div>
                </div>

                <div className="card card-tips col-md-3 mx-3">
                    <div className="card-body">
                        <h4 className="card-title card-title-tips">Cuidados Básicos e Saúde</h4>
                        <p className="card-text card-text-tips">Garanta a saúde e felicidade do seu pet com cuidados essenciais, como uma dieta adequada, exercícios regulares, visitas ao veterinário e esterilização/castração.</p>
                    </div>
                </div>

                <div className="card card-tips col-md-3 mx-3">
                    <div className="card-body">
                        <h4 className="card-title card-title-tips">Comportamento e Treinamento</h4>
                        <p className="card-text card-text-tips">Desenvolva uma relação sólida com seu animal de estimação ao entender seu comportamento único, utilizando técnicas de treinamento baseadas em reforço positivo e promovendo uma socialização adequada desde cedo.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tips;
