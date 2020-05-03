const promotions = ["SINGLE LOOK", "DOUBLE LOOK", "TRIPLE LOOK", "FULL LOOK"];

const getProductsInfo = (ids, productsList) => {
  productsList =
    productsList.filter((product) => ids.includes(product.id)) || [];
  const products = productsList.map((product) => ({
    name: product.name,
    category: product.category,
  }));

  const categories = [];

  productsList.map((item) => {
    if (categories.includes(item.category)) return false;
    categories.push(item.category);
  });

  const promotion = (categories) => {
    switch (categories.length) {
      case 1:
        return promotions[0];
      case 2:
        return promotions[1];
      case 3:
        return promotions[2];
      case 4:
        return promotions[3];
    }
  };

  let totalWithoutDiscount = 0;
  let totalWithDiscount = [];

  productsList.forEach((product, index) => {
    totalWithoutDiscount += product.regularPrice;
    product.promotions.forEach((promo) => {
      if (promo.looks.includes(promotion(categories))) {
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
    promotion: promotion(categories),
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
