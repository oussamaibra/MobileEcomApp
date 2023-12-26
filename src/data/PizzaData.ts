/* eslint-disable prettier/prettier */
const PizzaData = [
  {
    id: 'PZ1',
    name: 'مارجريتا',
    description:
      'بيتزا نابولية كلاسيكية بمزيج بسيط ولكن لذيذ من صلصة الطماطم وجبن الموتزاريلا والريحان الطازج.',
    roasted: 'غير متوفر',
    ingredients: 'صلصة الطماطم وجبن الموتزاريلا والريحان الطازج',
    special_ingredient: 'لا شيء',
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
    name: 'بيبروني',
    description:
      'بيتزا مبهجة للحشود محملة بشرائح بيبيروني لذيذة وصلصة طماطم حادة.',
    roasted: 'غير متوفر',
    ingredients: 'صلصة الطماطم وجبن الموتزاريلا والبيبروني',
    special_ingredient: 'رقائق الفلفل الحار (اختياري)',

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
    name: 'هاواي',
    description:
      'بيتزا مثيرة للجدل ولكنها محبوبة مغطاة باللحم والأناناس وجبن الموتزاريلا.',
    roasted: 'غير متوفر',
    ingredients: 'صلصة الطماطم وجبن الموتزاريلا واللحم والأناناس',
    special_ingredient: 'شواء حلو وحاد',

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
