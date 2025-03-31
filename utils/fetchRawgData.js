export default async function fetchRawgData(query, req, type = 'games') {
  const searchParams = new URLSearchParams({ ...query, type }).toString();

  const protocol = req?.headers?.['x-forwarded-proto'] || 'http';
  const host = req?.headers?.host || 'localhost:3000';
  const baseUrl = `${protocol}://${host}`;

  try {
    const res = await fetch(`${baseUrl}/api/rawg?${searchParams}`);
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error('fetchRawgData error:', error);
    return { results: [], error: true };
  }
}
