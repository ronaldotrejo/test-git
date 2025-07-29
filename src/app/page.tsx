"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div className="font-sans min-h-screen p-8 sm:p-20 grid grid-rows-[auto_1fr_auto]">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Mi Plataforma</h1>
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Iniciar sesión
        </button>
      </header>

      {/* Contenido principal */}
      <main className="flex flex-col items-center justify-center gap-8">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <p className="text-center text-lg max-w-xl">
          Bienvenido a nuestra plataforma educativa. Aquí podrás aprender de manera interactiva,
          seguir tus cursos y obtener certificaciones.
        </p>
        <div className="flex gap-4">
          <a
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            href="https://nextjs.org/docs"
            target="_blank"
          >
            Documentación
          </a>
          <a
            className="border px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-900"
            href="https://vercel.com"
            target="_blank"
          >
            Desplegar con Vercel
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-gray-500">
        © 2025 Mi Plataforma | Hecho con Next.js y ❤️
      </footer>
    </div>
  );
}
