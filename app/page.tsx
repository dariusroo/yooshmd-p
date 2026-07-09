const SCHEDULE_LATER_URL =
  "https://intakeq.com/booking/mqiu0i?serviceId=24f9085e-d29a-424f-905f-3bc4e2a53e11";

const CTA_CLASS_NAME =
  "w-full max-w-xs rounded-full bg-[#156059] px-8 py-4 text-lg font-semibold text-background transition-opacity hover:opacity-90 sm:w-auto";

function isConsultAvailableNowPT(): boolean {
  const hour = Number(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Los_Angeles",
      hour: "numeric",
      hourCycle: "h23",
    }).format(new Date())
  );
  return hour >= 8 && hour < 20;
}

export default function Page() {
  const available = isConsultAvailableNowPT();

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
          id="cta-available"
          href="https://doxy.me/yooshmd"
          className={CTA_CLASS_NAME}
          style={available ? undefined : { display: "none" }}
          suppressHydrationWarning
        >
          Click aquí para iniciar su consulta ahora
        </a>

        <a
          id="cta-unavailable"
          href={SCHEDULE_LATER_URL}
          className={CTA_CLASS_NAME}
          style={available ? { display: "none" } : undefined}
          suppressHydrationWarning
        >
          Click aquí para agendar su consulta
        </a>

        <p
          id="schedule-later-note"
          className="text-base"
          style={available ? undefined : { display: "none" }}
          suppressHydrationWarning
        >
          Si prefiere agendar su consulta para más tarde,{" "}
          <a
            href={SCHEDULE_LATER_URL}
            className="font-semibold underline underline-offset-2"
          >
            haga clic en este enlace
          </a>
          .
        </p>

        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(function(){var h=Number(new Intl.DateTimeFormat("en-US",{timeZone:"America/Los_Angeles",hour:"numeric",hourCycle:"h23"}).format(new Date()));var open=h>=8&&h<20;var a=document.getElementById("cta-available");var b=document.getElementById("cta-unavailable");var c=document.getElementById("schedule-later-note");if(a)a.style.display=open?"":"none";if(b)b.style.display=open?"none":"";if(c)c.style.display=open?"":"none";})()`,
          }}
        />
      </main>
    </>
  );
}
