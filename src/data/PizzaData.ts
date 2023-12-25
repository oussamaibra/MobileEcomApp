/* eslint-disable prettier/prettier */
const PizzaData = [
  {
    id: 'PZ1',
    name: 'Margherita',
    description:
      'A classic Neapolitan pizza with a simple yet delicious combination of tomato sauce, mozzarella cheese, and fresh basil.',
    roasted: 'N/A',
    ingredients: 'Tomato sauce, Mozzarella cheese and Fresh basil',
    special_ingredient: 'None',
    prices: [
      { size: 'Small', price: 8.99, currency: 'LD' },
      { size: 'Medium', price: 12.99, currency: 'LD' },
      { size: 'Large', price: 15.99, currency: 'LD' },
      { size: 'extra large', price: 19.99, currency: 'LD' },
    ],
    average_rating: 4.8,
    ratings_count: '12,345',
    favourite: false,
    type: 'Pizza',
    imagelink_square: require('../assets/coffee_assets/margarit/margarit_square.jpg'),
    imagelink_portrait: require('../assets/coffee_assets/margarit/margarit_portrait.jpg'),
    index: 0,
  },
  {
    id: 'PZ2',
    name: 'Pepperoni',
    description:
      'A crowd-pleasing pizza loaded with savory pepperoni slices and a tangy tomato sauce.',
    roasted: 'N/A',
    ingredients: 'Tomato sauce, Mozzarella cheese and Pepperoni',
    special_ingredient: 'Spicy chili flakes (optional)',
    prices: [
      { size: 'Small', price: 9.99, currency: 'LD' },
      { size: 'Medium', price: 13.99, currency: 'LD' },
      { size: 'Large', price: 16.99, currency: 'LD' },
      { size: 'extra large', price: 19.99, currency: 'LD' },
    ],
    average_rating: 4.6,
    ratings_count: '8,765',
    favourite: false,
    type: 'Pizza',
    imagelink_square: require('../assets/coffee_assets/pepperoni/pepperoni_square.jpg'),
    imagelink_portrait: require('../assets/coffee_assets/pepperoni/pepperoni_portrait.jpg'),
    index: 1,
  },
  {
    id: 'PZ3',
    name: 'Hawaiian',
    description:
      'A controversial yet beloved pizza topped with ham, pineapple, and mozzarella cheese.',
    roasted: 'N/A',
    ingredients: 'Tomato sauce, Mozzarella cheese, Ham and Pineapple',
    special_ingredient: 'Sweet and tangy BBQ',
    prices: [
      { size: 'Small', price: 10.99, currency: 'LD' },
      { size: 'Medium', price: 14.99, currency: 'LD' },
      { size: 'Large', price: 17.99, currency: 'LD' },
      { size: 'extra large', price: 19.99, currency: 'LD' },
    ],
    average_rating: 4.3,
    ratings_count: '5,432',
    favourite: false,
    type: 'Pizza',
    imagelink_square: require('../assets/coffee_assets/hawaiian/hawaiian_square.jpg'),
    imagelink_portrait: require('../assets/coffee_assets/hawaiian/hawaiian_portriat.jpg'),
    index: 2,
  },
];

export default PizzaData;
