import Link from 'next/link';

import { productPathBySlug } from 'lib/products';

import styles from './ProductCard.module.scss';

const ProductCard = ({ product = {} }) => {
  const { title, slug, featuredImage } = product;

  return (
    <div className={styles.productCard}>
      <Link href={productPathBySlug(slug)}>
        {featuredImage && <img src={featuredImage.node.sourceUrl} alt={title} className={styles.ProductCardImage} />}

        <h3
          className={styles.ProductCardTitle}
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />
      </Link>
    </div>
  );
};

export default ProductCard;
