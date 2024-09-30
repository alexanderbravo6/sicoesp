'use client';
import axios from 'axios';
import { useSession, signOut } from 'next-auth/react';
import https from 'https';

const useClienteAxios = () => {
    const { data: session, status } = useSession();

    // Obtener el token de la sesión de NextAuth
    const token = status === "authenticated" ? session?.user.token : null;

    // Crear la instancia de Axios
    const clienteAxios = axios.create({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
        headers: {
            'Accept': 'application/json',
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json",
        },
        withCredentials: false,
        httpsAgent: new https.Agent({
            rejectUnauthorized: false,
        }),
    });

    /*  // Agregar un interceptor para manejar el token y errores
      clienteAxios.interceptors.request.use(
          (config) => {
              // Solo agregar Authorization si el token está disponible
              if (token) {
                  config.headers.Authorization = `Bearer ${token}`;
              }
              return config;
          },
          (error) => {
              return Promise.reject(error);
          }
      );
  
      clienteAxios.interceptors.response.use(
          (response) => {
              return response;
          },
          async (error) => {
              if (error.response && error.response.status === 401) {
                  // Token expirado o no autorizado
                  console.error("No autorizado o token expirado. Cerrando sesión...");
  
                  // Cerrar la sesión y redirigir al usuario a la página de inicio de sesión
                  await signOut({ callbackUrl: '/inicio-sesion' });
              }
              return Promise.reject(error);
          }
      );
  */
    return clienteAxios;
};

export default useClienteAxios;
