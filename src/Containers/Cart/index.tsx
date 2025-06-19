import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header/Index';
import { Cart } from '@/components/Cart';
import LaterProductCard from "@/components/LaterProductCard"
import { Summary } from '@/components/Summary';
import { Delivery } from '@/components/Delivery';
import img from '@/config/img/productImg.svg';
import Head from 'next/head';
import { Container,CartContainer,CartFooter,CartSection,SummarySection,CartHeader } from './styles';
import { useState } from 'react';

export default function CartPage() {
  const { setCart, cart } = useState([]);

  return (
    <>
      <Head>
        <title>Axarca - Meu Carrinho</title>
      </Head>
      <Header />
      <Container>
        <div>
          <CartHeader>
            Meu carrinho (1)
          </CartHeader>
          <CartContainer>

            <CartSection>
              <Cart />
            </CartSection>
            <SummarySection>
              <Summary/>
              <Delivery/>
            </SummarySection>
          </CartContainer>
          {/*<div>*/}
          {/*  <LaterProductCard*/}
          {/*    img={img.src}*/}
          {/*    title="Caneca-AXARCA Estampada"*/}
          {/*    price="29,99"*/}
          {/*    BestSeller={false}*/}
          {/*    onClick={() => router.push('/product/4')}*/}
          {/*  />*/}
          {/*</div>*/}
        </div>

      </Container>
      <Footer />
    </>
  );
}
