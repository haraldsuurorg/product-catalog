import { getApolloClient } from "./apollo-client";

import {
  QUERY_ALL_PRODUCTS,
  QUERY_ALL_PRODUCTS_BY_SLUG,
  QUERY_PRODUCTS_BY_PRODUCT_CATEGORY,
} from "data/products";

/**
 * productPathBySlug
 */

export function productPathBySlug(slug) {
  return `/product/${slug}`;
}

/**
 * getAllProductsn
 */

export async function getAllProducts() {
  const apolloClient = getApolloClient();
  const data = await apolloClient.query({
    query: QUERY_ALL_PRODUCTS,
  });

  const products = data?.data.products.edges.map(({ node }) => node);

  return {
    products,
  };
}

/**
 * getProductBySlug
 */

export async function getProductBySlug(slug) {
  const apolloClient = getApolloClient();
  const data = await apolloClient.query({
    query: QUERY_ALL_PRODUCTS_BY_SLUG,
    variables: {
      slug,
    },
  });

  const product = data?.data.product;

  return {
    product,
  };
}

/**
 * getProductsByTaxonomy
 */

export async function getProductsByProductCategory(categoryName) {
  const apolloClient = getApolloClient();

  const result = await apolloClient.query({
    query: QUERY_PRODUCTS_BY_PRODUCT_CATEGORY,
    variables: { categoryName },
  });

  const products = result?.data.productCategories.edges[0]?.node?.products.edges.map(({ node }) => node) || [];

  return {
    products,
  };
}