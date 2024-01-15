import "./Parceiros.scss"
export default function Parceiros(){
    return(
        <div className="parceirosCard">
            <h2>Parceiros</h2>
            <section className="parceirosInicio">
                <div >
                    <strong>Governo do RN</strong>
                    <p>Governo do Estado do Rio Grande do Norte.</p>
                </div>
                <div>
                    <strong>SESAP</strong>
                    <p>Secretaria de Saúde Pública do Estado do Rio Grande do Norte.</p>
                </div>
                <div>
                    <strong>UFRN</strong>
                    <p>Universidade Federal do Rio Grande do Norte.</p>
                </div>
                <div>
                    <strong>HUOL</strong>
                    <p>Hospital Onofre Lopes: Hospital Universitário da UFRN (Universidade Federal do Rio Grande do Norte). </p>
                </div>
            </section>
        </div>
    )
}