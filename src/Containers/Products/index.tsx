import React, { useEffect, useState } from 'react';
import { Container, GridContainer, GridItem } from './styles';
import img from '@/config/img/productImg.svg';

import { Header } from '@/components/Header/Index';
import { Footer } from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { useRouter } from 'next/router';
import axios from 'axios';
import Image from 'next/image';
import image from '@/config/img/Frame 427321766.png';
const ProductsPage = () => {
  const router = useRouter();
  const [items, setItems] = useState<
    {
      id: number;
      title: string;
      value: number;
      avatarUrl?: string;
    }[]
  >([]);

  const fetch = async () => {
    await axios.get('/api/products').then(async (data) => {
      setItems(data.data);
      for (let i = 0; i < items.length; i++) {
        await getAvatarURL(i);
      }
    });
  };
  async function getAvatarURL(index: number) {
    await axios
      .get(`/api/products/${items[index].id}/avatar`, {
        responseType: 'blob',
      })
      .then((response) => {
        const url = URL.createObjectURL(response.data);
        const masterUpdate = [...items];
        masterUpdate[index].avatarUrl = url;
        setItems(masterUpdate);
        console.log(items);
      });
  }
  function formatarDinheiro(valor: number) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }
  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Header />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '2rem',
        }}
      >
        <Image src={image.src} alt="Nossos Produtos" width={500} height={270} />
      </div>
      <Container>
        <GridContainer>
          {items.map((item, index) => (
            <ProductCard
              img={img.avatarUrl || ''}
              key={item.id}
              title={item.title}
              price={formatarDinheiro(item.value)}
              BestSeller={false}
              onClick={() => router.push(`../product/${item.id}`)}
              id={item.id}
            />
          ))}
        </GridContainer>
      </Container>
      <Footer />
    </>
  );
};

export default ProductsPage;
