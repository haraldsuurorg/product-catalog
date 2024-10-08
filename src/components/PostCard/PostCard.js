import Link from 'next/link';

import { postPathBySlug } from 'lib/posts';

import Metadata from 'components/Metadata';

import { FaMapPin } from 'react-icons/fa';
import styles from './PostCard.module.scss';

const PostCard = ({ post, options = {} }) => {
  const { title, slug, date, featuredImage, isSticky = false } = post;
  const { excludeMetadata = [] } = options;

  const metadata = {};

  if (!excludeMetadata.includes('date')) {
    metadata.date = date;
  }

  // if (!excludeMetadata.includes('author')) {
  //   metadata.author = author;
  // }
  // if (!excludeMetadata.includes('categories')) {
  //   metadata.categories = categories;
  // }

  let postCardStyle = styles.postCard;

  if (isSticky) {
    postCardStyle = `${postCardStyle} ${styles.postCardSticky}`;
  }

  return (
    <div className={postCardStyle}>
      {isSticky && <FaMapPin aria-label="Sticky Post" />}
      {featuredImage && <img src={featuredImage.sourceUrl} alt={title} />}

      <Metadata className={styles.postCardMetadata} {...metadata} />

      <h3
        className={styles.postCardTitle}
        dangerouslySetInnerHTML={{
          __html: title,
        }}
      />
      <Link href={postPathBySlug(slug)}>
        <div className="button">Loe rohkem</div>
      </Link>
    </div>
  );
};

export default PostCard;
