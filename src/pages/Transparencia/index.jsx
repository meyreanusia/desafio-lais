import { useEffect, useState } from "react";
import "./Transparencia.scss";
import ReactEcharts from "echarts-for-react"; 
export default function Transparencia() {
  const [transparencia, setTransparencia] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://0.0.0.0:3004/transparecia");
        if (!response.ok) {
          console.log(`Falha ao buscar os dados`);
        }
        const dados = await response.json();
        setTransparencia(dados);
      } catch (error) {
        console.log(`Erro ao buscar dados`, error);
      }
    };
    fetchData();
  }, []);

  const corGrafico = [ "rgba(255, 255, 255, 1)", "rgba(210, 32, 44, 1)","rgba(112, 112, 112, 1)","rgba(47, 46, 65, 1)"]; 
   const option = {
    title: {
      text: 'Usuários por curso',
      left: 'center',
      textStyle: {
        color: "rgba(210, 32, 44, 1)",
        fontSize: "1.5rem",
      }
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      bottom: -5,
      itemGap: 1,
      itemWidth: 7,
      itemHeight:7,
      margin: [0, 0, 0, 0 ],
      textStyle: {
        color: "rgba(47, 46, 65, 1)",
        fontSize:10,
        borderRadius: 10
      }

    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        stillShowZeroSum: false,
        label: {
            show: false
        },
        data:  transparencia.usuarios_por_curso?.map((curso, index) => (
          {
            value: curso.usuarios,
            name: `${curso.curso}: ${curso.usuarios} `,
            itemStyle: {
              color: corGrafico[index],
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },

          })) || [],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          }
        }
      }
    ]
  };


   const option2 = {
    title: {
      text: 'Usuários por Estado',
      left: 'center',
      textStyle: {
        color: "rgba(210, 32, 44, 1)",
        fontSize: "1.5rem",
      }
    },
    tooltip: {
      trigger: 'item'
    },
    graphic: [
      {
        type: 'image',
        left: 'center',
        top: 'middle',
        style: {
          image: '/graficoMapa.png', 
          width: 200,
          height: 150,
        }
      }
    ],
    legend: {
      orient: 'vertical',
      left: 'left',
      bottom: -5,
      itemGap: 1,
      itemWidth: 7,
      itemHeight:7,
      margin: [0, 0, 0, 0 ],
      textStyle: {
        color: "rgba(47, 46, 65, 1)",
        fontSize:10,
        borderRadius: 10
      }

    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        stillShowZeroSum: false,
        label: {
            show: false
        },
        data:  transparencia.usuarios_por_curso?.map((curso, index) => (
          {
            name: `${curso.curso}: ${curso.usuarios} `,
            itemStyle: {
              color: corGrafico[index],
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },

          })) || [],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          }
        }
      }
    ]
    
  };

  return (
    <div className="transparencia">
      <section className="containerDadosGerais">
        {console.log(transparencia)}
        <p>
          Início<strong>/Transparência</strong>
        </p>
        <h1>Transparência</h1>

        <section className="dadosGerais">
          <h3>Dados Gerais</h3>
          <div className="invest1">
            <img src="/inscritos.png" alt="" />
            <strong>Total de usuários registrados</strong>
            <p>{transparencia.dados_gerais?.usuarios_registrados}</p>
          </div>
          <div className="invest2">
            <img src="/arquivo.png" alt="" />
            <strong>Inscrições realizadas</strong>
            <p>{transparencia.dados_gerais?.incricoes_realizadas}</p>
          </div>
          <div className="invest3">
            <img src="/cursosAtivos.png" alt="" />
            <strong>Cursos ativos</strong>
            <p>{transparencia.dados_gerais?.cursos_ativos}</p>
          </div>
          <div className="invest4">
            <img src="/certificacao.png" alt="" />
            <strong>Direito à certificação</strong>
            <p>{transparencia.dados_gerais?.direito_certificacao}</p>
          </div>

          <div className="investimento1">
            <img src="/investimentoMedio.png" alt="" />
            <strong>Investimento médio por curso</strong>
            <p>{transparencia.dados_gerais?.investimento_medio_curso}</p>
          </div>
          <div className="investimento2">
            <img src="/investimentoAluno.png" alt="" />
            <strong>Direito à certificação</strong>
            <p>{transparencia.dados_gerais?.investimento_medio_aluno}</p>
          </div>
        </section>
      </section>

      <section className="containerGraficos" style={{width: '80%'}}>
          <ReactEcharts option={option} className="graficoPizza" style={{width: "50%", padding: 20, fontFamily: 'Montserrat'}}/>
           <ReactEcharts option={option2} className="graficoPizza" style={{width: "50%", padding: 20, fontFamily: 'Montserrat'}}/>
      </section>
    </div>
  );
}
