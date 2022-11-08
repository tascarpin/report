import './App.css';
import Report from "./pages/Report";
import PopUpModal from "./components/PopUpModal";
import React, {useState} from "react";
import Modal from "react-modal";
import Draggable from "react-draggable";

Modal.setAppElement(document.getElementById('root'));

function App() {
    let barra = {
        title: {
            text: 'Gráfico de barra'
        },
        tooltip: {},
        legend: {
            data: ['sales']
        },
        xAxis: {
            data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']
        },
        yAxis: {},
        series: [
            {
                name: 'sales',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }
        ],
        width: 200,
        height: 200,

    };

    const linha = {
        title: {
            text: 'Gráfico de linha'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['visitantes']
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {},
        series: [
            {
                name: 'visitantes',
                type: 'line',
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                smooth: true,
            },
        ],
        width: 200,
        height: 200
    };

    const menu = {
        title: {
            grafico: 'Gráfico',
            imagem: 'Imagem'
        },
        grafico: {
            data: ['Barra', 'linha']
        },
    }

    const [inputsGraficoBarra, setInputsGraficoBarra] = useState([]);
    const [inputsGraficoLinha, setInputsGraficoLinha] = useState([]);
    const [inputsImagem, setInputsImagem] = useState([]);

    function handleAddGraficoBarra(title){
        barra.title.text = title;
        setInputsGraficoBarra([...inputsGraficoBarra, barra]);
    }

    function handleAddGraficoLinha(title){
        linha.title.text = title;
        setInputsGraficoLinha([...inputsGraficoLinha, linha]);
    }

    function handleAddImagem(){
        setInputsImagem([...inputsImagem, inputsImagem.length + 1]);
    }

    function handleClear(){
        setInputsGraficoBarra([]);
        setInputsGraficoLinha([]);
        setInputsImagem([]);
    }

  return (
    <div className="App">
        <PopUpModal
            handleAddGraficoBarra={handleAddGraficoBarra}
            handleAddGraficoLinha={handleAddGraficoLinha}
            handleAddImagem={handleAddImagem}
            handleClear={handleClear}
            menu={menu}
        ></PopUpModal>

        <div className="a4-body">
            <div className="page" size="A4">
                <h1>Relatório</h1>
                <Draggable>
                    <div border="2px solid red">
                        {inputsGraficoBarra.map((n) => (
                            <Report option={n}></Report>
                        ))}
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        {inputsGraficoLinha.map(() => (
                            <Report option={linha}></Report>
                        ))}
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        {inputsImagem.map(() => (
                            <Report option={barra}></Report>
                        ))}
                    </div>
                </Draggable>
            </div>
        </div>
    </div>
  );
}

export default App;
