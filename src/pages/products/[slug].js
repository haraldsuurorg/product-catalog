import { getProductBySlug } from 'lib/products';
import { getAllProducts } from 'lib/products';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Content from 'components/Content';

export default function Product({ product }) {
  return (
    <Layout>
      <Header>
        <h1>{product.title}</h1>
      </Header>
      <Content>
        <div>
          <img src={product.featuredImage.node.sourceUrl} alt={product.title} />
        </div>
      </Content>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { product } = await getProductBySlug(params.slug);

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const { products } = await getAllProducts();

  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}
