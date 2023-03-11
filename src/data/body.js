const brands = [
  {
    id: 1,
    name: 'پژو',
    data: [
      { id: '11', name: '205' },
      { id: '12', name: '206' },
      { id: '13', name: '206 آریان' },
      { id: '14', name: '206 تیپ 1' },
      { id: '15', name: '206 تیپ 2' },
    ],
  },
  {
    id: 2,
    name: 'پراید',
    data: [
      { id: '21', name: 'کوییک' },
      { id: '22', name: 'صبا' },
      { id: '23', name: 'صندوقدار' },
      { id: '24', name: 'نسیم' },
      { id: '25', name: 'استیشن' },
    ],
  },
  {
    id: 3,
    name: 'سمند',
    data: [
      { id: '31', name: 'دنا' },
      { id: '32', name: 'سریر' },
      { id: '33', name: 'سورن' },
      { id: '34', name: 'EL' },
      { id: '35', name: 'LX' },
    ],
  },
  {
    id: 4,
    name: 'رنو',
    data: [
      { id: '41', name: 'اسکالا' },
      { id: '42', name: 'اسکالا کروک' },
      { id: '43', name: 'پارش تندر' },
      { id: '44', name: 'پیکی' },
      { id: '45', name: 'تندر 90' },
    ],
  },
  {
    id: 5,
    name: 'کیا',
    data: [
      { id: '51', name: 'یرااتو 1600' },
      { id: '52', name: 'ریو 2' },
      { id: '53', name: 'ریو 5' },
      { id: '54', name: 'سراتو کوپه' },
      { id: '55', name: 'سول' },
    ],
  },
];

const usage = [
  { id: 6, name: 'سواری' },
  { id: 7, name: 'تاکسی' },
  { id: 8, name: 'تاکسی برون شهری' },
  { id: 9, name: 'تاکسی اینترنتی' },
  { id: 10, name: 'تاکسی آژانس' },
];

const years = [
  { id: 11, name: '۱۴۰۱' },
  { id: 12, name: '۱۴۰۰' },
  { id: 13, name: '۱۳۹۹' },
  { id: 14, name: '۱۳۹۸' },
  { id: 15, name: '۱۳۹۷' },
];

const importTypes = [
  { id: 16, name: 'وارداتی' },
  { id: 17, name: 'داخلی' },
];

const newCar = [
  { id: 18, name: 'بله' },
  { id: 19, name: 'خیر' },
];

const prevInsuranceStatus = [
  { id: 20, name: 'بیمه قبلی داشتم' },
  { id: 21, name: 'بیمه قبلی نداشتم' },
];

const prevInsuranceOffYear = [
  { id: 22, name: 'بدون تخفیف' },
  { id: 23, name: '۱' },
  { id: 24, name: '۲' },
  { id: 25, name: '۳' },
  { id: 26, name: '۴' },
];

const insuranceOffYear = [
  { id: 27, name: ' بدون تخفیف' },
  { id: 28, name: '۱' },
  { id: 29, name: '۲' },
  { id: 30, name: '۳' },
  { id: 31, name: '۴' },
];

const bodyData = {
  brands,
  usage,
  years,
  importTypes,
  newCar,
  prevInsuranceStatus,
  prevInsuranceOffYear,
  insuranceOffYear,
};

export { bodyData };
