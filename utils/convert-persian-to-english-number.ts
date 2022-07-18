const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

/**
 * @name persianToEnglishNumber
 * @description change persian number to english number
 * @param value
 */
const persianToEnglishNumber = (value: string) => {
  if (typeof value !== 'string') return '';

  let result = value.toString();

  for (let i = 0; i < 10; i += 1) {
    const replaceItemPersian = new RegExp(persianNumbers[i], 'g');
    const resultPersian = result.replace(replaceItemPersian, `${i}`);
    const replaceItemArabic = new RegExp(arabicNumbers[i], 'g');

    result = resultPersian.replace(replaceItemArabic, `${i}`);
  }

  return result;
};

export default persianToEnglishNumber;
