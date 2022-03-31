import styles from 'styled-components'

export const Container = styles.div`
  width: 200px;
  height: 50px;
  display: flex;
  background-color: #1550ff;
  border-radius: 10px;
  cursor: pointer;
  opacity: 1;
  transition: all ease .3s;

  &:hover{
    opacity: .8;
  }
`;

export const IconArea = styles.div`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgba(255,255,255, .2);
  padding: 0 15px;
`;

export const Icon = styles.img`
  height: 20px;
`;

export const Label = styles.div`
  height: inherit;
  color: #fff;
  display: flex;
  justify-content: cernter;
  align-items: center;
  flex: 1;
  padding: 0 20px;
`;
