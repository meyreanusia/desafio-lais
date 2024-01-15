import { useState } from "react";

export default function useApiCursos() {
  const [modulos, setModulos] = useState([]);

  const handleBuscarModulos = async () => {
    try {
      const response = await fetch("http://0.0.0.0:3004/cursos");

      if (!response.ok) {
        throw new Error("Erro ao buscar módulos");
      }
      const data = await response.json();
      setModulos(data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleBuscarCurso = async (id) => {
    try {
      const response = await fetch(`http://0.0.0.0:3004/cursos/${id}`);

      if (!response.ok) {
        throw new Error("Erro ao buscar módulos");
      }
      const data = await response.json();
      setModulos(data);
    } catch (error) {
      console.error(error);
    }
  };
  return { handleBuscarModulos, modulos, handleBuscarCurso };
}
