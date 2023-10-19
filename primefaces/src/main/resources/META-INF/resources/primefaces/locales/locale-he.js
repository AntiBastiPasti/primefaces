/** Hebrew both iw and he (from PrimeLocale)*/
PrimeFaces.locales["he"] = {
  startsWith: "מתחיל ב",
  contains: "מכיל",
  notContains: "אינו מכיל",
  endsWith: "מסתיים ב",
  equals: "שווה",
  notEquals: "אינו שווה",
  noFilter: "ללא מסנן",
  filter: "סנן",
  lt: "פחות מ",
  lte: "פחות או שווה ל",
  gt: "יותר מ",
  gte: "יותר או שווה ל",
  dateIs: "התאריך הוא",
  dateIsNot: "התאריך אינו",
  dateBefore: "התאריך לפני",
  dateAfter: "התאריך אחרי",
  custom: "מותאם",
  clear: "נקה",
  apply: "החל",
  matchAll: "התאמה לכל החוקים",
  matchAny: "התאמה לכל חוק",
  addRule: "הוסף חוק",
  removeRule: "הסר חוק",
  accept: "כן",
  reject: "לא",
  choose: "בחר",
  upload: "העלה",
  cancel: "בטל",
  completed: "הושלם",
  pending: "ממתין",
  fileSizeTypes: ["בתים", 'ק"ב', 'מ"ב', 'ג"ב', 'ט"ב', 'פ"ב', 'א"ב', 'ז"ב', 'י"ב'],
  dayNames: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
  dayNamesShort: ["א", "ב", "ג", "ד", "ה", "ו", "ש"],
  dayNamesMin: ["א", "ב", "ג", "ד", "ה", "ו", "ש"],
  monthNames: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
  monthNamesShort: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ"],
  chooseYear: "בחר שנה",
  chooseMonth: "בחר חודש",
  chooseDate: "בחר תאריך",
  prevDecade: "עשור קודם",
  nextDecade: "עשור הבא",
  prevYear: "שנה קודמת",
  nextYear: "שנה הבאה",
  prevMonth: "חודש קודם",
  nextMonth: "חודש הבא",
  prevHour: "שעה קודמת",
  nextHour: "שעה הבאה",
  prevMinute: "דקה קודמת",
  nextMinute: "דקה הבאה",
  prevSecond: "שנייה קודמת",
  nextSecond: "שנייה הבאה",
  am: "בבוקר",
  pm: "בערב",
  today: "היום",
  now: "עכשיו",
  weekHeader: "שבוע",
  firstDayOfWeek: 0,
  showMonthAfterYear: false,
  dateFormat: "dd/mm/yy",
  weak: "חלש",
  medium: "בינוני",
  strong: "חזק",
  passwordPrompt: "הזן סיסמה",
  emptyFilterMessage: "לא נמצאו תוצאות",
  searchMessage: "ישנם {0} תוצאות זמינות",
  selectionMessage: "{0} פריטים נבחרו",
  emptySelectionMessage: "לא נבחרו פריטים",
  emptySearchMessage: "לא נמצאו תוצאות",
  emptyMessage: "אין אפשרויות זמינות",
  aria: {
    trueLabel: "נכון",
    falseLabel: "לא נבחר",
    nullLabel: "לא נבחר",
    star: "כוכב 1",
    stars: "{star} כוכבים",
    selectAll: "נבחרו כל הפריטים",
    unselectAll: "הוסרו כל הפריטים",
    close: "סגור",
    previous: "קודם",
    next: "הבא",
    navigation: "ניווט",
    scrollTop: "גלול למעלה",
    moveTop: "העבר לראש",
    moveUp: "העבר למעלה",
    moveDown: "העבר למטה",
    moveBottom: "העבר לתחתית",
    moveToTarget: "העבר ליעד",
    moveToSource: "העבר למקור",
    moveAllToTarget: "העבר הכל ליעד",
    moveAllToSource: "העבר הכל למקור",
    pageLabel: "עמוד {page}",
    firstPageLabel: "עמוד ראשון",
    lastPageLabel: "עמוד אחרון",
    nextPageLabel: "עמוד הבא",
    previousPageLabel: "עמוד קודם",
    rowsPerPageLabel: "שורות לעמוד",
    jumpToPageDropdownLabel: "קפיצה לעמוד",
    jumpToPageInputLabel: "קפיצה לעמוד",
    selectRow: "שורה נבחרה",
    unselectRow: "שורה לא נבחרה",
    expandRow: "הרחב שורה",
    collapseRow: "כווץ שורה",
    showFilterMenu: "הצג תפריט מסנן",
    hideFilterMenu: "הסתר תפריט מסנן",
    filterOperator: "סנן מפעיל",
    filterConstraint: "סנן הגבלה",
    editRow: "ערוך שורה",
    saveEdit: "שמור עריכה",
    cancelEdit: "בטל עריכה",
    listView: "תצוגת רשימה",
    gridView: "תצוגת רשת",
    slide: "החלק",
    slideNumber: "החלק {slideNumber}",
    zoomImage: "הגדל תמונה",
    zoomIn: "הגדל",
    zoomOut: "הקטן",
    rotateRight: "סובב ימינה",
    rotateLeft: "סובב שמאלה",
  },
};

// custom PF labels
PrimeFaces.locales["he"] = $.extend(true, {}, PrimeFaces.locales["he"], {
  weekNumberTitle: "ש",
  isRTL: true,
  yearSuffix: "",
  timeOnlyTitle: "זמן בלבד",
  timeText: "זמן",
  hourText: "שעה",
  minuteText: "דקה",
  secondText: "שנייה",
  millisecondText: "מ' שנייה",
  year: "שנה",
  month: "חודש",
  week: "שבוע",
  day: "יום",
  list: "רשימה",
  allDayText: "יום שלם",
  moreLinkText: "עוד...",
  noEventsText: "אין אירועים",
  aria: {
    "datatable.sort.ASC": "הפעל לסידור עמודה בסדר עולה",
    "datatable.sort.DESC": "הפעל לסידור עמודה בסדר יורד",
    "datatable.sort.NONE": "הפעל להורדת סידור העמודה",
    "colorpicker.OPEN": "פתח בוחר צבעים",
    "colorpicker.CLOSE": "סגור בוחר צבעים",
    "colorpicker.CLEAR": "נקה בחירת צבע",
    "colorpicker.MARKER": "רוויה: {s}. בהירות: {v}.",
    "colorpicker.HUESLIDER": "סליידר גוון",
    "colorpicker.ALPHASLIDER": "סליידר שקיפות",
    "colorpicker.INPUT": "שדה ערך צבע",
    "colorpicker.FORMAT": "פורמט צבע",
    "colorpicker.SWATCH": "דוגמת צבע",
    "colorpicker.INSTRUCTION": "בוחר רוויה ובהירות. השתמשו בחצים למטה, לצעלה, שמאלה וימינה לבחירה.",
    "spinner.INCREASE": "הגדל ערך",
    "spinner.DECREASE": "הפחת ערך",
    "switch.ON": "פועל",
    "switch.OFF": "כבוי",
    "messages.ERROR": "שגיאה",
    "messages.FATAL": "שגיאה חמורה",
    "messages.INFO": "מידע",
    "messages.WARN": "אזהרה",
  },
});
PrimeFaces.locales["iw"] = PrimeFaces.locales["he"];
