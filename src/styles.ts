import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const Wrapper = styled.div`
  background-color: #b8e1b2;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: white;
`

export const Row = styled.div`
  display: flex;
  gap: 15px;

  & + & {
    margin-top: 15px;
  }
`
