import LocalStorage from './LocalStorage'
import { useRouter } from 'vue-router';
const router = useRouter();
// Función para realizar el inicio de sesión
async function login(username: string, password: string): Promise<void> {
  const res = await rest({
    endpoint: '/api/auth/login',
    method: 'POST',
    body: {
      email: username,
      password: password
    }
  });
  const authToken = res.data; // Este sería el token generado tras la autenticación
  LocalStorage.save('authToken',authToken); // Guarda el token en el almacenamiento local
}

// Función para realizar el cierre de sesión
async function logout(): Promise<void> {
  LocalStorage.remove('authToken'); // Elimina el token del almacenamiento local al cerrar sesión
}

// Función para verificar la validez del token de autenticación (ejemplo de implementación)
function isValidAuthToken(authToken: string | null): boolean {
  // Aquí puedes implementar tu lógica para verificar si el token es válido
  // Por simplicidad, este ejemplo siempre considera el token como válido si existe.
  return !!authToken; // Devuelve true si el token existe, false si es null o undefined
}

// Función para verificar si el usuario está autenticado
function isAuthenticated(): boolean {
  // Obtiene el token de autenticación del almacenamiento local
  const authToken = LocalStorage.get('authToken');

  // Si no existe un token, retorna falso de inmediato
  if (!authToken) return false;

  // Verifica si el token es válido (puedes agregar tu lógica de verificación aquí)
  const isValidToken = isValidAuthToken(authToken);

  // Si el token no es válido, elimínalo del almacenamiento local
  if (!isValidToken) {
    LocalStorage.remove('authToken');
    return false;
  }

  // Retorna true si el token es válido, false si no lo es
  return isValidToken;
}

export default { login, logout, isAuthenticated };
