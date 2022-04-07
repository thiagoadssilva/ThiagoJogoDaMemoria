import styles from 'styled-components'

type ContainerProps ={
  showBackground: boolean
  opacity?: number
}

export const Container = styles.div<ContainerProps>`
  background-color: ${props => props.showBackground ? '#1550ff' : '#e2e3e3'};
  height: 100px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

type IconProps = {
  opacity?: number
}

export const Icon = styles.img<IconProps>`
  width: 40px;
  height: 40px;
  opacity: ${props => props.opacity ?? 1}
`;