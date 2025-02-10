import React from 'react';

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b from-naranja to-orange-900">
      <div className="border border-2 border-azul-oscuro bg-white rounded-lg shadow-lg p-8 w-80 text-center">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="src/assets/logo.jpg" // Cambia esto por el logo que prefieras
            alt="Penca Envite Fútbol"
            className="rounded-full w-32 h-32 mb-4"
          />
          <h1 className="text-xl text-orange-600">Penca Solidaria</h1>
          <h1 className="text-2xl font-bold text-blue-600">Envite Fútbol</h1>
        </div>

        {/* Login Form */}
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="text-blue-600 block text-sm font-medium text-gray-700"
            >
              Usuario
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Ingresa tu usuario"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="text-blue-600 block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Ingresa tu contraseña"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Iniciar Sesión
          </button>
        </form>

        {/* Additional Links */}
        <div className="mt-4">
          <a
            href="/forgot-password"
            className="text-sm text-blue-500 underline"
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
