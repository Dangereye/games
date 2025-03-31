export default async function fetchRawgData(
  queryParams = {},
  req = null,
  type = 'games'
) {
  let baseUrl = '';

  if (typeof window === 'undefined' && req) {
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers.host;
    baseUrl = `${protocol}://${host}`;
  }

  // 💡 Only allow certain filters for the 'games' endpoint
  const allowedKeys =
    type === 'games'
      ? [
          'developers',
          'genres',
          'dates',
          'ordering',
          'page',
          'filter',
          'comments',
        ]
      : ['page']; // 'page' is common, rest should be excluded

  const cleanedParams = Object.entries(queryParams).reduce(
    (acc, [key, value]) => {
      if (
        value !== undefined &&
        value !== '' &&
        allowedKeys.includes(key) &&
        !(key === 'ordering' && value === 'relevance')
      ) {
        acc[key] = value;
      }
      return acc;
    },
    {}
  );

  const searchParams = new URLSearchParams({
    path: type,
    ...cleanedParams,
  });

  const url = `${baseUrl}/api/rawg?${searchParams.toString()}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch RAWG data from ${url}`);
  }

  return res.json();
}
