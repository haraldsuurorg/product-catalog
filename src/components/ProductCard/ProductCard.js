import Link from 'next/link';

import { postPathBySlug, sanitizeExcerpt } from 'lib/posts';

import Metadata from 'components/Metadata';

import { FaMapPin } from 'react-icons/fa';
import styles from './ProductCard.module.scss';

const ProductCard = ({ post, options = {} }) => {
  const { title, excerpt, slug, date, author, categories, isSticky = false } = post;
  const { excludeMetadata = [] } = options;

  const metadata = {};

  let ProductCardStyle = styles.ProductCard;

  if (isSticky) {
    ProductCardStyle = `${ProductCardStyle} ${styles.ProductCardSticky}`;
  }

  return (
    <div className={ProductCardStyle}>
      {isSticky && <FaMapPin aria-label="Sticky Post" />}
      <Link href={postPathBySlug(slug)}>
        <div>
            <img

            />
            <h3
                className={styles.ProductCardTitle}
                dangerouslySetInnerHTML={{
                    __html: title,
            }}
            />
            <p>

            </p>
        </div>
      </Link>
      <Metadata className={styles.ProductCardMetadata} {...metadata} />
      {excerpt && (
        <div
          className={styles.ProductCardContent}
          dangerouslySetInnerHTML={{
            __html: sanitizeExcerpt(excerpt),
          }}
        />
      )}
    </div>
  );
};

export default ProductCard;
