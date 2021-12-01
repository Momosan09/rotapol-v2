const total = 123;

const Table = props => {
  return (
    <>
      <h1>Table</h1>
      <table>
        <tbody>
          <tr>
            <td>{total || 0}</td>
            <td>Total</td>
          </tr>
          <tr>
            <td></td>
            <td>Texto</td>
          </tr>
          <tr>
            <td></td>
            <td>Texto</td>
          </tr>
          <tr>
            <td></td>
            <td>Texto</td>
          </tr>
        </tbody>
      </table>


      {/*<div className="divr co0"><p>resultado1</p></div>
      <div className="divr co1"><p>resultado2</p></div>
      <div className="divr co0"><p>resultado3</p></div>
      <div className="divr co1"><p>resultado4</p></div>
      <div className="divr co0"><p>resultado5</p></div>
      <div className="divr co1"><p>resultado6</p></div>*/}

    </>

  );
};

export default Table;
