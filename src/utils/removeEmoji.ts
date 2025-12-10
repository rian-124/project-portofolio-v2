export const removeEmoji = (str: string) => str.replace(/^[^\p{L}\p{N}]+/u, '');
