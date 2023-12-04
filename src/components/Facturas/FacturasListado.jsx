import React, { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";
import { listFacturas } from "../../graphql/queries";

const FacturasListado = () => {
  const client = generateClient();
  const [arrayFacturas, setArrayFacturas] = useState([]);

  // List all items
  async function listarFacturas() {
    try {
      const result = await client.graphql({ query: listFacturas });
      if (result) {
        console.log(result);
        setArrayFacturas(result.data.listFacturas.items);
      }
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    listarFacturas();
  }, []);

  return (
    <>
      {arrayFacturas.map((it, contador) => (
        <div className="mb-4" key={contador}>
          <div>{`Id: ${it.id}`}</div>
          {`Factura N°: ${it.numero} con el costo total de: ${it.total}`}
        </div>
      ))}
    </>
  );
};

export default FacturasListado;

//<p key={contador++}>{`Factrura N°: ${it.numero} con un total de: ${it.total}`}</p>;
