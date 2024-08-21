import { gql } from '@apollo/client';

export const PRODUCT_FIELDS = gql`
  fragment ProductFields on Product {
    id
    title
    slug
    link
    featuredImage {
      node {
        sourceUrl(size: LARGE)
      }
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  ${PRODUCT_FIELDS}
  query AllProducts {
    products(first: 10000) {
      edges {
        node {
          ...ProductFields
        }
      }
    }
  }
`;

export const QUERY_ALL_PRODUCTS_BY_SLUG = gql`
  query ProductBySlug($slug: ID!) {
    product(id: $slug, idType: SLUG) {
      ...ProductFields
    }
  }
  ${PRODUCT_FIELDS}
`;

export const QUERY_PRODUCTS_BY_PRODUCT_CATEGORY = gql`
  query ProductsByProductCategory($categoryName: String!) {
    productCategories(where: { search: $categoryName }) {
      edges {
        node {
          products {
            edges {
              node {
                id
                title
                slug
                link
                featuredImage {
                  node {
                    sourceUrl(size: LARGE)
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
