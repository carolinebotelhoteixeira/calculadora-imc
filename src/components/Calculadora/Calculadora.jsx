import React, { useState } from 'react';
import Resultado from '../Resultado/Resultado';
import styles from './Calculadora.module.css';

const Calculadora = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState({ imc: null, classificacao: '' });

  const calcularIMC = () => {
    const alturaMetros = parseFloat(altura) / 100;
    const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);

    let classificacao = '';
    if (imcCalculado < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imcCalculado >= 18.5 && imcCalculado < 24.9) {
      classificacao = 'Peso normal';
    } else if (imcCalculado >= 25 && imcCalculado < 29.9) {
      classificacao = 'Sobrepeso';
    } else if (imcCalculado >= 30 && imcCalculado < 34.9) {
      classificacao = 'Obesidade Grau 1';
    } else if (imcCalculado >= 35 && imcCalculado < 39.9) {
      classificacao = 'Obesidade Grau 2';
    } else {
      classificacao = 'Obesidade Grau 3';
    }

    setResultado({ imc: imcCalculado, classificacao });
  };

  return (
    <div className={styles.calculadora}>
      <div className={styles.inputGroup}>
        <label>Altura (cm):</label>
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Digite sua altura"
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Peso (kg):</label>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Digite seu peso"
        />
      </div>
      <button onClick={calcularIMC}>Calcular IMC</button>

      {/* Componente Resultado */}
      <Resultado imc={resultado.imc} classificacao={resultado.classificacao} />
    </div>
  );
};

export default Calculadora;
