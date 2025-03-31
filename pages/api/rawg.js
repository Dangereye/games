export default async function handler(req, res) {
  const { ordering, dates, genres, page, type = 'games' } = req.query;

  const queryParams = [
    `key=${process.env.API_KEY}`,
    `page_size=40`,
    `filter=true`,
    `comments=true`,
    ordering ? `ordering=${ordering}` : '',
    dates ? `dates=${dates}` : '',
    genres ? `genres=${genres}` : '',
    page ? `page=${page}` : '',
  ]
    .filter(Boolean)
    .join('&');

  const apiUrl = `https://api.rawg.io/api/${type}?${queryParams}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.next) {
      const url = new URL(data.next);
      url.searchParams.delete('key');
      data.next = `/api/rawg?type=${type}&${url.searchParams.toString()}`;
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
