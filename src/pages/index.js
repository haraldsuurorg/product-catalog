// vana !!

import useSite from 'hooks/use-site';
import { getPostsByCategoryId } from 'lib/posts';
import { getProductsByProductCategory } from 'lib/products';
import { WebsiteJsonLd } from 'lib/json-ld';

import Layout from 'components/Layout';
import Section from 'components/Section';
import Container from 'components/Container';
import PostCard from 'components/PostCard';
import ProductCard from 'components/ProductCard';

import styles from 'styles/pages/Home.module.scss';

export default function Home({ posts, products }) {
  const { metadata = {} } = useSite();
  const { title, description } = metadata;

  return (
    <Layout>
      <WebsiteJsonLd siteTitle={title} />

      <Section className={styles.highHero}>
        <Container>
          <h1
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </Container>
      </Section>

      <Section>
        <Container className={styles.productWrapper}>
          <h2>Populaarsed tooted</h2>
          <ul className={styles.products}>
            {products.map((product) => {
              return (
                <li key={product.slug}>
                  <ProductCard product={product} />
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container className={styles.postWrapper}>
          <h2>Uudised</h2>
          <ul className={styles.posts}>
            {posts.map((post) => {
              return (
                <li key={post.slug}>
                  <PostCard post={post} />
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>
    </Layout>
  );
}

export async function getStaticProps() {
  const productCategoryName = 'Populaarne';
  const { products } = await getProductsByProductCategory(productCategoryName);

  const categoryId = 9;
  const { posts } = await getPostsByCategoryId({ categoryId });

  return {
    props: {
      products,
      posts,
    },
  };
}

// import useSite from 'hooks/use-site';
// import { getPaginatedPosts } from 'lib/posts';
// import { WebsiteJsonLd } from 'lib/json-ld';

// import Layout from 'components/Layout';
// import Header from 'components/Header';
// import Section from 'components/Section';
// import Container from 'components/Container';
// import PostCard from 'components/PostCard';
// import Pagination from 'components/Pagination';

// import styles from 'styles/pages/Home.module.scss';

// export default function Home({ posts, pagination }) {
//   const { metadata = {} } = useSite();
//   const { title, description } = metadata;

//   return (
//     <Layout>
//       <WebsiteJsonLd siteTitle={title} />
//       <Header>
//         <h1
//           dangerouslySetInnerHTML={{
//             __html: title,
//           }}
//         />

//         <p
//           className={styles.description}
//           dangerouslySetInnerHTML={{
//             __html: description,
//           }}
//         />
//       </Header>

//       <Section>
//         <Container>
//           <h2 className="sr-only">Posts</h2>
//           <ul className={styles.posts}>
//             {posts.map((post) => {
//               return (
//                 <li key={post.slug}>
//                   <PostCard post={post} />
//                 </li>
//               );
//             })}
//           </ul>
//           {pagination && (
//             <Pagination
//               addCanonical={false}
//               currentPage={pagination?.currentPage}
//               pagesCount={pagination?.pagesCount}
//               basePath={pagination?.basePath}
//             />
//           )}
//         </Container>
//       </Section>
//     </Layout>
//   );
// }

// export async function getStaticProps() {
//   const { posts, pagination } = await getPaginatedPosts({
//     queryIncludes: 'archive',
//   });
//   return {
//     props: {
//       posts,
//       pagination: {
//         ...pagination,
//         basePath: '/posts',
//       },
//     },
//   };
// }
