export default function (status, body) {
  return {
    status,
    body: JSON.stringify(body),
  }
}
