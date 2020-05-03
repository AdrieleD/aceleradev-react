const promotions = ["SINGLE LOOK", "DOUBLE LOOK", "TRIPLE LOOK", "FULL LOOK"];

const getProductsInfo = (ids, productsList) => {
  productsList =
    productsList.filter((product) => ids.includes(product.id)) || [];
  const products = productsList.map((product) => ({
    name: product.name,
    category: product.category,
  }));

  const categories = productsList.reduce((categories, product) => {
    return categories.includes(product.category)
      ? categories
      : [...categories, product.category];
  }, []);

  const promotion = promotions[categories.length - 1];

  let totalWithoutDiscount = 0;
  let totalWithDiscount = [];

  productsList.forEach((product, index) => {
    totalWithoutDiscount += product.regularPrice;
    product.promotions.forEach((promo) => {
      if (promo.looks.includes(promotion)) {
        totalWithDiscount.push(promo.price);
      }
    });

    if (!totalWithDiscount[index]) {
      totalWithDiscount.push(product.regularPrice);
    }
  });

  totalWithDiscount = totalWithDiscount.reduce(
    (totalWithDiscount, value) => totalWithDiscount + value,
    0
  );

  let discountValue = totalWithoutDiscount - totalWithDiscount;
  let discountPerc =
    ((100 * discountValue) / totalWithoutDiscount).toFixed(2) + "%";

  return {
    products,
    promotion,
    totalWithDiscount,
    discountValue,
    discountPerc,
  };
};

function getShoppingCart(ids, productsList) {
  const productsInfo = getProductsInfo(ids, productsList);
  return {
    products: productsInfo.products,
    promotion: productsInfo.promotion,
    totalPrice: productsInfo.totalWithDiscount.toFixed(2),
    discountValue: productsInfo.discountValue.toFixed(2),
    discount: productsInfo.discountPerc,
  };
}

module.exports = { getShoppingCart };
