interface CallAPIProps {
  url: string;
  method: 'GET' | 'POST';
  data?: any;
}

export async function callAPI<T>({
  url,
  method,
  data,
}: CallAPIProps): Promise<T> {
  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(data),
  });

  return await response.json();
}
