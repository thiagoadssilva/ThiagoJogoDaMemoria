import styles from 'styled-components'

const tema ={
  colors:{
    lightTheme: '#ffffff',
    darkTheme: '#000000',
    label: '#6a7d8b',
    value: '#101c40'
  }
}

export const Container = styles.div`
  margin: 20px 0;
`;

export const Label = styles.div`
  font-size: 15px;
  color: #6a7d8b;
`;

export const Value = styles.div`
  font-size: 37px;
  font-weight: bold;
  color: #101c40;
`;