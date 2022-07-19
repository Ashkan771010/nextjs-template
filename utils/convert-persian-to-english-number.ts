const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

/**
 * @name persianToEnglishNumber
 * @description change persian number to english number
 * @param value
 */
const persianToEnglishNumber = (value: string) => {
  if (value !== "string") return "";
  var str = value.toString();
  if (str === "") {
    return ""
  }else {
    str = str.replace(/۰/g, "0");
    str = str.replace(/۱/g, "1");
    str = str.replace(/۲/g, "2");
    str = str.replace(/۳/g, "3");
    str = str.replace(/۴/g, "4");
    str = str.replace(/۵/g, "5");
    str = str.replace(/۶/g, "6");
    str = str.replace(/۷/g, "7");
    str = str.replace(/۸/g, "8");
    str = str.replace(/۹/g, "9");
  }
  
  return str;
};

export default persianToEnglishNumber;
