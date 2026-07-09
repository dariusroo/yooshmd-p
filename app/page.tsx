export default function Page() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-4 py-12 text-center sm:gap-8 sm:px-6 sm:py-16">
      <p className="max-w-md text-xl leading-relaxed sm:text-2xl">
        Gracias &mdash; sus formularios han sido enviados. El doctor
        revisará su información ahora. Haga clic abajo para unirse a su
        videoconsulta. La mayoría de las consultas duran de 5 a 10 minutos.
      </p>

      <a
        href="https://doxy.me/yooshmd"
        className="w-full max-w-xs rounded-full bg-foreground px-8 py-4 text-lg font-semibold text-background transition-opacity hover:opacity-90 sm:w-auto"
      >
        Iniciar su consulta ahora
      </a>

      <p className="text-base">
        Si prefiere agendar su consulta para más tarde,{" "}
        <a
          href="https://intakeq.com/booking/mqiu0i?serviceId=24f9085e-d29a-424f-905f-3bc4e2a53e11"
          className="font-semibold underline underline-offset-2"
        >
          haga clic en este enlace
        </a>
        .
      </p>
    </main>
  );
}
