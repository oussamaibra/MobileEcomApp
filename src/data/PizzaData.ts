/* eslint-disable prettier/prettier */
const PizzaData = [
  {
    id: 'PZ1',
    name: 'Margherita',
    description:
      'A classic Neapolitan pizza with a simple yet delicious combination of tomato sauce, mozzarella cheese, and fresh basil.',
    roasted: 'N/A',
    ingredients: ['Tomato sauce', 'Mozzarella cheese', 'Fresh basil'],
    special_ingredient: 'None',
    prices: [
      {size: 'Small', price: 8.99, currency: '$'},
      {size: 'Medium', price: 12.99, currency: '$'},
      {size: 'Large', price: 15.99, currency: '$'},
    ],
    average_rating: 4.8,
    ratings_count: '12,345',
    favourite: false,
    type: 'Pizza',
    index: 0,
  },
  {
    id: 'PZ2',
    name: 'Pepperoni',
    description:
      'A crowd-pleasing pizza loaded with savory pepperoni slices and a tangy tomato sauce.',
    roasted: 'N/A',
    ingredients: ['Tomato sauce', 'Mozzarella cheese', 'Pepperoni'],
    special_ingredient: 'Spicy chili flakes (optional)',
    prices: [
      {size: 'Small', price: 9.99, currency: '$'},
      {size: 'Medium', price: 13.99, currency: '$'},
      {size: 'Large', price: 16.99, currency: '$'},
    ],
    average_rating: 4.6,
    ratings_count: '8,765',
    favourite: false,
    type: 'Pizza',
    index: 1,
  },
  {
    id: 'PZ3',
    name: 'Hawaiian',
    description:
      'A controversial yet beloved pizza topped with ham, pineapple, and mozzarella cheese.',
    roasted: 'N/A',
    ingredients: ['Tomato sauce', 'Mozzarella cheese', 'Ham', 'Pineapple'],
    special_ingredient: 'Sweet and tangy BBQ sauce drizzle (optional)',
    prices: [
      {size: 'Small', price: 10.99, currency: '$'},
      {size: 'Medium', price: 14.99, currency: '$'},
      {size: 'Large', price: 17.99, currency: '$'},
    ],
    average_rating: 4.3,
    ratings_count: '5,432',
    favourite: false,
    type: 'Pizza',
    index: 2,
  },
];

export default PizzaData;
