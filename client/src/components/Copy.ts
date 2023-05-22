export function Copy(target: string) {
  const text = target;
  navigator.clipboard.writeText(text);
  console.log(text);
}
