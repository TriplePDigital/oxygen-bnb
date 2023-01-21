export const fetcher = (url: string) =>
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
    }
  })
    .then((res) => res.json())
    .catch((err) => console.log(err))
