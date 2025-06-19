import styled from 'styled-components';

// Styled Components
export const Container = styled.div`
  padding-top: 2vh;
  height: fit-content;
  width: 100%;
  background-color: #fff;
`;
export const ContainerHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: fit-content;
  width: 100vw;
  flex: 1;
  background-color: #fff;
`;

export const Form = styled.div`
  display: flex;
  justify-content: center;
  height: fit-content;
  width: 100%;
  background-color: #fff;

  background-color: white;
  margin: 30px;
  margin-top: 0;
  padding: 2rem;
  padding-top: 0;
  border-radius: 8px;

  text-align: center;
`;

export const Title = styled.h2`
  font-size: 40px;
  color: #e8712e;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  color: #03014c;
  margin-bottom: 30px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45rem;
  height: 35rem;
`;

export const Input = styled.input`
  flex: 1;
  margin: 10px;
  padding: 16px;
  background-color: #ddd;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  color: #818181;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const Button = styled.button`
  width: 90%;
  padding: 0.75rem;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #e8712e;
  color: white;
  border: none;
  border-radius: 52px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #c0392b;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  color: #3498db;

  a {
    color: #3498db;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ExternalLogin = styled.div`
  display: flex;
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 1rem;
`;

export const ExternalButton = styled.button`
  flex: 1;
  margin: 10px;
  justify-content: center;
  gap: 5px;
  border: 1px solid #ccc;
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
    margin-right: 0.5rem;
  }
`;

export const RegisterLink = styled.p`
  margin-top: 1rem;
  color: #e8712e;

  a {
    color: #e8712e;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const InputField = styled.input`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 12px;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
`;
