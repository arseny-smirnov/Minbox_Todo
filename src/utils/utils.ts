/**
 * Функция очищает строку от пробела в начале строки или двойного пробела
 * @param input Строка для очистки
*/
export const clearStringFromSpaces = (input: string): string =>
    input.replace(/^\s/, '')
        .replace(/\s{2}/, ' ')