import styled from 'styled-components';

interface TypographyProps {
  active?: boolean;
}

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 56px;
  margin-left: 40px;
  border: 1px solid #000;
  border-radius: 10px;
  height: 100%;
`;

export const GridItem = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const Typography = styled.div<TypographyProps>`
  display: inline;
  font-size: 24px;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? '600' : 'normal')};
  color: ${(props) => (props.active ? 'black' : 'gray')};
`;

export const TextContent = styled.div`
  text-align: justify;
  margin: 0 140px;
  color: grey;
`;
