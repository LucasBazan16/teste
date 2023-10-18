import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone1426.module.css";

const IPhone1426: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/iphone-14-19");
  }, [navigate]);

  return (
    <div className={styles.iphone1426}>
      <img className={styles.iphone1426Child} alt="" src="/group-18.svg" />
      <div className={styles.iphone1426Item} />
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <div className={styles.iphone1426Inner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.email}>Email</div>
      <div className={styles.senha}>Senha</div>
      <div className={styles.login}>Login</div>
      <div className={styles.criarConta}>Criar Conta</div>
      <div className={styles.lembreMeParent}>
        <div className={styles.lembreMe}>Lembre-me</div>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.ouParent}>
        <div className={styles.ou}>ou</div>
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
      </div>
      <img className={styles.groupIcon} alt="" src="/group-41.svg" />
      <div className={styles.frame} onClick={onFrameContainerClick}>
        <div className={styles.titleAndDescription}>
          <div className={styles.permitirQueMy}>
            Permitir que “My Vélo” rastreie suas atividades?
          </div>
          <div className={styles.aoClicarEm}>
            Ao clicar em permitir você permite...
          </div>
          <div className={styles.frame1} />
        </div>
        <div className={styles.buttons}>
          <div className={styles.button1Preferred}>
            <div className={styles.title}>Não permitir</div>
          </div>
          <div className={styles.button1Preferred}>
            <div className={styles.title1}>Permitir</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPhone1426;
