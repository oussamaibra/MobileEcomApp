/* eslint-disable prettier/prettier */

const BeansData = [
  {
    id: 'B1',
    name: 'حبوب الروبوستا',
    description:
      'حبوب الروبوستا أكبر وأكثر استدارة من أصناف الفاصوليا الأخرى. تنمو هذه النباتات عادةً أكبر بكثير من نباتات أرابيكا ، حيث يبلغ طولها ما بين 15 و 20 قدمًا. تعتبر حبوب الروبوستا أكثر صلابة بشكل عام لأنها يمكن أن تنمو على ارتفاعات منخفضة وتقاوم الأمراض. لكن الأبحاث الحديثة تشير إلى أنها لا تتحمل الحرارة جيدًا كما كان يُعتقد سابقًا.',
    roasted: 'محمص متوسط',
    ingredients: 'افريقيا',
    special_ingredient: 'من إفريقيا',

    imagelink_square: require('../assets/coffee_assets/robusta_coffee_beans/robusta_coffee_beans_square.png'),
    imagelink_portrait: require('../assets/coffee_assets/robusta_coffee_beans/robusta_coffee_beans_portrait.png'),

    prices: [
      { size: '250gm', price: '5.50', currency: 'LYD' },
      { size: '500gm', price: '10.50', currency: 'LYD' },
      { size: '1Kg', price: '18.50', currency: 'LYD' },
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Bean',
    index: 0,
  },
  {
    id: 'B2',
    name: 'حبوب أرابيكا',
    description:
      'حبوب أرابيكا هي النوع الأكثر شعبية من حبوب القهوة ، حيث تمثل حوالي 60٪ من قهوة العالم. نشأت هذه الفاصوليا اللذيذة منذ قرون عديدة في مرتفعات إثيوبيا ، وقد تكون حتى أول حبوب قهوة يتم استهلاكها على الإطلاق! من المحتمل أن يأتي اسم أرابيكا من شعبية الفاصوليا في شبه الجزيرة العربية في القرن السابع (اليمن حاليًا).',
    roasted: 'محمص متوسط',
    ingredients: 'افريقيا',
    special_ingredient: 'من إفريقيا',
    imagelink_square: require('../assets/coffee_assets/arabica_coffee_beans/arabica_coffee_beans_square.png'),
    imagelink_portrait: require('../assets/coffee_assets/arabica_coffee_beans/arabica_coffee_beans_portrait.png'),
    prices: [
      { size: '250gm', price: '5.50', currency: 'LYD' },
      { size: '500gm', price: '10.50', currency: 'LYD' },
      { size: '1Kg', price: '18.50', currency: 'LYD' },
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Bean',
    index: 1,
  },
  {
    id: 'B3',
    name: 'حبوب ليبيريكا',
    description:
      'تُستخرج القهوة الليبيرية ، وهي نبات أصلي في وسط وغرب إفريقيا - على وجه التحديد ليبيريا ، وبالتالي اسمها - بسبب رائحتها الزهرية اللذيذة وملفها النكهة القوي والدخاني. تنمو على نبات أكبر بكثير من أرابيكا أو روبوستا ، تميل معظم الكرز الليبيري إلى عدم انتظام الشكل وأقرب إلى روبوستا في الحجم والمظهر العام. كما أنها تتحمل المناخ الحار والرطب وتعمل بشكل جيد على ارتفاعات منخفضة.',
    roasted: 'محمص متوسط',
    ingredients: 'ماليزيا',
    special_ingredient: 'من ماليزيا',
    imagelink_square: require('../assets/coffee_assets/liberica_coffee_beans/liberica_coffee_beans_square.png'),
    imagelink_portrait: require('../assets/coffee_assets/liberica_coffee_beans/liberica_coffee_beans_portrait.png'),
    prices: [
      { size: '250gm', price: '5.50', currency: 'LYD' },
      { size: '500gm', price: '10.50', currency: 'LYD' },
      { size: '1Kg', price: '18.50', currency: 'LYD' },
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Bean',
    index: 2,
  },
  {
    id: 'B4',
    name: 'حبوب إكسيلسا',
    description:
      'تنمو حبوب إكسيلسا تقريبًا بالكامل في جنوب شرق آسيا ، وهي على شكل بيضاوي مستطيل إلى حد ما. تنمو هذه الفاصوليا على نباتات قهوة كبيرة من 20 إلى 30 قدمًا على ارتفاعات متوسطة. من حيث النكهة ، فإن حبوب إكسيلسا فريدة جدًا. فهي تجمع بين صفات التحميص الخفيف مثل النوتات الحادة والنكهات الفاكهية مع النكهات التي تذكرنا أكثر بالتحميص الداكن.',
    roasted: 'محمص متوسط',
    ingredients: 'ماليزيا',
    special_ingredient: 'من ماليزيا',
    imagelink_square: require('../assets/coffee_assets/excelsa_coffee_beans/excelsa_coffee_beans_square.png'),
    imagelink_portrait: require('../assets/coffee_assets/excelsa_coffee_beans/excelsa_coffee_beans_portrait.png'),
    prices: [
      { size: '250gm', price: '5.50', currency: 'LYD' },
      { size: '500gm', price: '10.50', currency: 'LYD' },
      { size: '1Kg', price: '18.50', currency: 'LYD' },
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Bean',
    index: 3,
  },
];
export default BeansData;
