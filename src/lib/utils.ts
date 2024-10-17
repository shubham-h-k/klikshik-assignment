export function truncateText(text: string, maxChars: number): string {
  const textLength = text.length;
  if (textLength <= maxChars) return text;
  return `...${text.slice(textLength - maxChars)}`;
}
