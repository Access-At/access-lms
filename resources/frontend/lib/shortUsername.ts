export default function shortUsername(username: string) {
  const words = username.split(" ")
  return words.length === 1
    ? (words[0].match(username)?.[0]?.[0] ?? words[0][0])
    : `${words[0][0]}${words[1][0]}`.toUpperCase()
}
