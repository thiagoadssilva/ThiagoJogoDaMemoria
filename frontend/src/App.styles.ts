import styles from 'styled-components'

export const Container = styles.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  padding: 50px 0;
`;

export const Info = styles.div`
  display: flex;
  flex-direction: column;
  width: auto;
`;

export const LogoLink = styles.a`
  diplay: block;
`;

export const InfoArea = styles.div`
  width: 100%;
  margin: 10px 0;
`;

export const GridArea = styles.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
