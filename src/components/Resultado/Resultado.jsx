import React from 'react';
import styles from './Resultado.module.css';

const Resultado = ({ imc, classificacao }) => {
  if (imc === null) {
    return null; // Não exibe nada se o IMC ainda não foi calculado
  }

  return (
    <div className={styles.resultado}>
      <p>Seu IMC: {imc}</p>
      <p>Classificação: {classificacao}</p>
    </div>
  );
};

export default Resultado;
