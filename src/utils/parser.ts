export function parseCodeBlockJson(input: string): string {
  const cleaned = input.replace(/(^```json\s*)|(\s*```$)/g, '');
  return JSON.parse(cleaned);
}