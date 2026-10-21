"use client";

export default function Error({ retry }: { retry: () => void }) {
  return (
    <main>
      <h1>Algo deu errado</h1>
      <p>Não foi possível carregar esta página.</p>
      <button onClick={() => retry()}>Tentar novamente</button>
    </main>
  );
}

