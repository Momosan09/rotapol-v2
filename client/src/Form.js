import Radios from './Radios';

const Form = props => {


  const handleSubmit = e => {
    e.preventDefault();
    console.log('calculando...');
  };


  const {
    medida,
    precioTela,
    paño,
    modelo,
    setMedida,
    setPaño,
    setPrecioTela,
    setModelo,
    setValor
    } = props;

  // const handleClick = () => {
  //   setMedida("");
  //   setPaño("");
  //   setPrecioTela("");
  // };

  return (
    <>
        <div className="DivForFromStyle AllContainer">
      <form className="FormLeft" onSubmit={handleSubmit}>
        <div className="DivForFromStyle">
          <div className="LabelStyleExtern">
        <label className="LabelStyle Tooltip" >Medida</label>                       {/* LABEL*****/}
        {/* ToolTip */}
    <div class="tooltip ">(?)
  <span class="tooltiptext TooltipForm2Comprar">Medida en Cm</span>
</div>
        {/* ToolTip */}
          </div>
        <div className="InputTextStyleExtern Inverted">
        <input placeholder="Medida en Cm" onChange={e => setMedida(e.target.value)} value={medida} type="number" min="1" className="TextLeftForm InputTextStyleIntern"/>
        <h2 className="AdjustHSize">Cm</h2>
        </div>
        </div>
        <div className="DivForFromStyle">
          <div className="LabelStyleExtern">
{/*           <label className="LabelStyle" >Modelos</label>         */}            {/* LABEL*****/}
          </div>
        <Radios setValor={setValor} setModelo={setModelo} modelo={modelo} />
        </div>
        <div className="DivForFromStyle">
        <div className="LabelStyleExtern">
        <label className="LabelStyle" >Precio de confeccion por paño</label>{/* LABEL*****/}
        </div>
        <div className="InputTextStyleExtern">
        <p>$</p>
        <input placeholder="############" onChange={e => setPaño(e.target.value)} value={paño} type="number" min="1" className="TextLeftForm InputTextStyleIntern"/>
        </div>
        </div>
        <div className="DivForFromStyle">
        <div className="LabelStyleExtern">
        <label className="LabelStyle" >Precio de tela por metro</label>     {/* LABEL*****/}
        </div>
        <div className="InputTextStyleExtern">
        <p>$</p>
        <input placeholder="############" onChange={e => setPrecioTela(e.target.value)} value={precioTela} type="number" min="1" className="TextLeftForm InputTextStyleIntern"/>
        </div>
        </div>
      </form>
      </div>
    </>
  );
};

export default Form;
