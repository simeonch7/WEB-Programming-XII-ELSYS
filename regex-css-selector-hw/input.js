regExps = {
"exercise_1": /[A-Z][a-z]{1,}/,
"exercise_2": /(08[7-9]{1}[1-9]{7})/,
"exercise_3": /([^01])+/,
"exercise_4": /^[a-z][^@$]{2,15}$/,
"exercise_5": /^[\d]{3}$|(1[0-4]\d+|1500)/, 
"exercise_6": /class=('|")[A-z\s?]+("|')/
};

cssSelectors = {
"exercise_1": "item > java", 
"exercise_2": "different > java",
"exercise_3": "java > tag",
"exercise_4": "#someId + item",
"exercise_5": "tag > java + .class1",
"exercise_6": "item.class1 > item, item.class2 > item",
"exercise_7": "#diffId2 > :nth-child(2)",
"exercise_8": "#someId"
};