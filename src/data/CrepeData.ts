/* eslint-disable prettier/prettier */
const CrepeData = [
  {
    id: 'CP1',
    name: 'فطائر كلاسيكية',
    description:
      'فطائر رقيقة ذات لون بني ذهبي ، مثالية لتغميس شراب القيقب والزبدة.',
    roasted: 'غير متوفر',
    ingredients: 'دقيق ، بيض ، حليب ، زبدة ، سكر ، بيكينج بودر ، ملح',
    special_ingredient: 'لا شيء',

    prices: [
      { size: 'Short Stack', price: 5.99, currency: 'LD' },
      { size: 'Full Stack', price: 8.49, currency: 'LD' },
    ],
    imagelink_square: require('../assets/coffee_assets/CP1/CP1.jpg'),
    imagelink_portrait: require('../assets/coffee_assets/CP1/CP1B.jpg'),
    average_rating: 4.6,
    ratings_count: '8,923',
    favourite: false,
    type: 'Pancake',
    index: 0,
  },
  {
    id: 'CP2',
    name: 'فطائر التوت الأزرق',
    description:
      'تتدفق مع التوت الأزرق العصير ، توفر هذه الفطائر توازنا لذيذا بين الحلاوة والحامض.',
    roasted: 'غير متوفر',
    ingredients:
      'دقيق ، بيض ، حليب ، زبدة ، سكر ، بيكينج بودر ، ملح ، توت أزرق',
    special_ingredient: 'التوت الأزرق',
    imagelink_square: require('../assets/coffee_assets/CP2/CP2.jpg'),
    imagelink_portrait: require('../assets/coffee_assets/CP2/CP2B.jpg'),
    prices: [
      { size: 'Short Stack', price: 6.49, currency: 'LD' },
      { size: 'Full Stack', price: 9.29, currency: 'LD' },
    ],
    average_rating: 4.9,
    ratings_count: '10,567',
    favourite: false,
    type: 'Pancake',
    index: 1,
  },
  {
    id: 'CP3',
    name: 'فطائر رقائق الشوكولاتة',
    description:
      'دلل نفسك بمكدس من الفطائر المرصعة برقائق الشوكولاتة الغنية الذائبة لتناول وجبة فطور فاخرة.',
    roasted: 'غير متوفر',
    imagelink_square: require('../assets/coffee_assets/CP3/CP3.jpg'),
    imagelink_portrait: require('../assets/coffee_assets/CP3/CP3B.jpg'),
    ingredients:
      'دقيق ، بيض ، حليب ، زبدة ، سكر ، بيكينج بودر ، ملح ، رقائق الشوكولاتة',
    special_ingredient: 'رقائق الشوكولاتة',
    prices: [
      { size: 'Short Stack', price: 6.29, currency: 'LD' },
      { size: 'Full Stack', price: 8.99, currency: 'LD' },
    ],
    average_rating: 4.7,
    ratings_count: '9,875',
    favourite: false,
    type: 'Pancake',
    index: 2,
  },
];

export default CrepeData;
