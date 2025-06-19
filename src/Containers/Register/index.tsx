import Head from 'next/head';
import { Header } from '@/components/Header/Index';
import { Footer } from '@/components/Footer';
import {
  Button,
  Container,
  Form,
  Input,
  RegisterLink,
  Subtitle,
  Title,
  InputsContainer,
  TextArea,
} from './styles';
import { Oswald } from 'next/font/google';
import { useContext, useState } from 'react';
import ImageUpload from '@/components/ImageInput';
import axios from 'axios';
import type { AxiosError } from 'axios';
import { AuthContext } from '@/context/AuthContext';

const oswald = Oswald({
  subsets: ['latin'],
  weight: '700',
});
const oswald400 = Oswald({
  subsets: ['latin'],
  weight: '400',
});

export default function RegisterPage() {
  const [avatar, setAvatar] = useState<File>();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [email, setEmail] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');

  const [nextStep, setNextStep] = useState(false);

  const { onLogIn } = useContext(AuthContext);

  async function signup() {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('password', password);
    formData.append('subtitle', subtitle);
    formData.append('description', description);
    if (avatar) {
      formData.append('avatar', avatar);
    }

    try {
      const response = await axios.post('/api/auth/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Usuário registrado:', response.data);
      onLogIn({ token: response.data.token, user: response.data.user });
    } catch (error) {
      const err = error as AxiosError;
      console.error('Erro no registro:', err.response?.data || err.message);
    }
  }

  return (
    <>
      <Head>
        <title>Axarca - Registrar</title>
      </Head>
      <Header />
      <Container>
        <Form>
          <Title className={oswald.className}>Crie uma conta</Title>
          <Subtitle className={oswald400.className}>
            Siga as instruções para facilitar o registro e explorar a AXARCA.
          </Subtitle>

          {!nextStep && (
            <>
              <InputsContainer>
                <ImageUpload onImageSelect={(file) => setAvatar(file)} />
                <Input
                  type="text"
                  placeholder="Nome completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Título"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                />
                <Input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Telefone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <TextArea
                  placeholder="Descrição"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </InputsContainer>
              <Button
                className={oswald400.className}
                onClick={() => {
                  setNextStep(true);
                }}
              >
                Avançar
              </Button>
            </>
          )}

          {nextStep && (
            <>
              <InputsContainer>
                <Input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  type="password"
                  placeholder="Confirmar senha"
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                />
              </InputsContainer>
              <Button
                onClick={() => {
                  signup();
                }}
              >
                Criar Conta
              </Button>
            </>
          )}

          <RegisterLink className={oswald400.className}>
            Já possui conta? <a href="/login">Entrar</a>
          </RegisterLink>
        </Form>
      </Container>
      <Footer />
    </>
  );
}
