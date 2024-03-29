export default async function(request: {
  endpoint: string,
  method: string,
  body?: any,
  headers?: any
}) {
  try {
    const env = useRuntimeConfig();
    const apiBase = env.public.apiBase;
    const url = `${apiBase}${request.endpoint}`;

    const defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    const headers = { ...defaultHeaders, ...request.headers };

    const requestOptions: RequestInit = {
      method: request.method,
      headers: headers
    };

    if (request.body) {
      requestOptions.body = JSON.stringify(request.body);
    }

    const response = await fetch(url, requestOptions);

    const data = await response.json();
    return data;
  } catch (error) {
    // Manejo de errores
    console.error('Error en la solicitud:', error);
    throw error;
  }
}
