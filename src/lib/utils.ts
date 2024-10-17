export function truncateText(text: string, maxChars: number): string {
  const textLength = text.length;
  if (textLength <= maxChars) return text;
  return `...${text.slice(textLength - maxChars)}`;
}

export function convertBytesToMB(bytes: number): number {
  return Number((bytes / (1024 * 1024)).toFixed(2));
}
