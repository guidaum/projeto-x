import { useRouter } from 'next/router';
import ProductEditPage from '@/Containers/ProductEdit';

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const productId = typeof id === 'string' ? Number(id) : undefined;

  return <ProductEditPage id={productId} />;
}
