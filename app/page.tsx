export default function Page() {
  return (
    <>
      <header className="flex flex-col items-center gap-1 px-4 pt-6 text-center sm:pt-8">
        <span className="text-2xl font-bold sm:text-3xl">YooshMD</span>
        <span className="text-sm opacity-70">by Dr. Darius Roohani</span>
      </header>

      <main className="flex flex-1 flex-col items-center gap-6 px-4 pt-6 pb-12 text-center sm:gap-8 sm:px-6 sm:pt-8 sm:pb-16">
        <p className="max-w-md text-xl leading-relaxed sm:text-2xl">
          Gracias &mdash; sus formularios han sido enviados. El doctor
          revisará su información ahora. Haga clic abajo para unirse a su
          videoconsulta. La mayoría de las consultas duran de 5 a 10 minutos.
        </p>

        <a
          href="https://doxy.me/yooshmd"
          className="w-full max-w-xs rounded-full bg-[#800020] px-8 py-4 text-lg font-semibold text-background transition-opacity hover:opacity-90 sm:w-auto"
        >
          Click aquí para iniciar su consulta ahora
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
    </>
  );
}
