export default async function handler(req, res) {
  const { path = '', ...params } = req.query;

  const searchParams = new URLSearchParams({
    key: process.env.API_KEY,
    page_size: '40',
    ...params,
  });

  const rawgUrl = `https://api.rawg.io/api/${path}?${searchParams.toString()}`;

  try {
    const response = await fetch(rawgUrl);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error('❌ RAWG Fetch Failed:', err);
    res.status(500).json({ error: 'Failed to fetch from RAWG' });
  }
}
