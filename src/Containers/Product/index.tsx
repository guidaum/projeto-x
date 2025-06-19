import React, { useEffect, useState } from 'react';
import {
  Container,
  Image,
  Price,
  Button,
  ProductSection,
  MainImageSection,
  ProductDetail,
  ProductButton,
} from './styles';
import img from '@/config/img/productImg.svg';
import { Header } from '@/components/Header/Index';
import { Footer } from '@/components/Footer';
import { ButtonScroll, CardSection, HomeTitle } from '../Home/styles';
import { Oswald } from 'next/font/google';
import { theme } from '@/styles/theme';
import { FaChevronLeft, FaChevronRight, FaWhatsapp } from 'react-icons/fa';
import Carousel from '@/components/Carousel';
import { EmblaOptionsType } from 'embla-carousel';
import { useRouter } from 'next/router';
import axios from 'axios';
import { enviarParaWhatsApp } from '@/utils/whatsapp';
import { mastersDefault } from '@/utils/masters';

const oswald700 = Oswald({
  subsets: ['latin'],
  weight: '700',
});

const oswald400 = Oswald({
  subsets: ['latin'],
  weight: '400',
});

const oswald = Oswald({
  subsets: ['latin'],
});

const ProductPage = () => {
  const router = useRouter();
  const [imageSrc, setImageSrc] = useState('');
  const [product, setProduct] = useState({
    description: '',
    quantity: 1,
    value: 0,
    title: '',
    master: '',
  });
  const { id } = router.query;
  const fetch = async () => {
    await axios.get(`/api/products/${id}`).then((response) => {
      setProduct(response.data);
    });
    await axios
      .get(`/api/products/${id}/avatar`, {
        responseType: 'blob',
      })
      .then((response) => {
        const url = URL.createObjectURL(response.data);

        setImageSrc(url);
      });
  };
  const [actionPrevButtonProducts, setActionPrevButtonProducts] = useState(0);
  const [actionNextButtonProducts, setActionNextButtonProducts] = useState(0);
  const OPTIONS: EmblaOptionsType = { align: 'start' };
  function formatarDinheiro(valor: number) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  useEffect(() => {
    fetch();
  }, [id]);

  return (
    <>
      <Header />
      <Container>
        <ProductSection>
          <MainImageSection>
            <Image
              src={imageSrc}
              alt="Caneca-AXARCA Estampada"
              width={0}
              height={0}
              sizes="100vw"
            />
          </MainImageSection>

          <ProductDetail>
            <div className="info">
              <div
                className={oswald700.className}
                style={{ fontSize: 'x-large' }}
              >
                {product.title}
              </div>
              <div
                className={oswald400.className}
                style={{
                  color: '#3c3c3c',
                  marginTop: '8px',
                  marginLeft: '15px',
                  fontSize: '15px',
                }}
              >
                <span>{product.quantity} disponível</span>
              </div>
              <div className="description">{product.description}</div>
            </div>
            <div>
              <div className="master">
                <Image
                  src={
                    mastersDefault.find(
                      (master) => master.name === product.master,
                    )?.image.src
                  }
                  alt={product.master}
                  width={'1px'}
                />
                <div>
                  <div
                    className={oswald.className}
                    style={{ color: theme.colors.primary }}
                  >
                    De onde vem meu produto?
                  </div>
                  <div style={{ fontSize: '14px', color: '#818181' }}>
                    Esse produto foi confeccionado pelo mestre {product.master},
                    um dos muitos membros da AXARCA
                  </div>
                </div>
              </div>

              <Price className={oswald.className}>
                {formatarDinheiro(product.value)}
              </Price>
            </div>
          </ProductDetail>
          <ProductButton>
            <Button
              onClick={enviarParaWhatsApp}
              type="button"
              style={{
                width: '250px',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                justifyContent: 'center',
              }}
            >
              <FaWhatsapp size={20} />
              Comprar no Whatsapp
            </Button>
            {/*<Button
              type="button"
              style={{
                width: '250px',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                justifyContent: 'center',
                backgroundColor: theme.colors.primary,
              }}
            >
              Fale Conosco
            </Button>*/}
          </ProductButton>
        </ProductSection>

        <CardSection>
          <HomeTitle
            className={oswald700.className}
            style={{ color: theme.colors.primary }}
          >
            Os mais vendidos
            <div style={{ marginRight: '5vw' }}>
              <ButtonScroll
                className="prev"
                onClick={() =>
                  setActionPrevButtonProducts(actionPrevButtonProducts + 1)
                }
              >
                <FaChevronLeft size={20} />
              </ButtonScroll>
              <ButtonScroll
                className="next"
                onClick={() =>
                  setActionNextButtonProducts(actionNextButtonProducts + 1)
                }
              >
                <FaChevronRight size={20} />
              </ButtonScroll>
            </div>
          </HomeTitle>
          <div className="ourMasters" id="ourMasters">
            <Carousel
              slideType="productsCarousel"
              options={OPTIONS}
              bestSeller
              actionPrevButton={actionPrevButtonProducts}
              actionNextButton={actionNextButtonProducts}
            />
          </div>
        </CardSection>
      </Container>
      <Footer />
    </>
  );
};

export default ProductPage;
