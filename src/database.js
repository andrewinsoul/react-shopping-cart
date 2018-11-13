let total = 0;
const store = [
  {
    id: 1,
    name: 'HP 16RAM Laptop',
    quantity: 4,
    price: 4500000,
  },
  {
    id: 2,
    name: 'Play Station Portable',
    quantity: 3,
    price: 200000
  },
  {
    id: 3,
    name: 'Xbox game',
    quantity: 1,
    price: 120000
  },
  {
    id: 4,
    name: 'Advanced Scientific Calculator',
    quantity: 1,
    price: 120000
  },
];
for (let item in store) {
  total += store[item].price;
}
const exportList = [store, total];
export default exportList;
