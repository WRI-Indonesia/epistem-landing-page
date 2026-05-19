import Image from "next/image";

const steps = [
  {
    number: "1",
    label: "Sign up your account",
    active: false,
  },
  {
    number: "2",
    label: "Check your email to verify your account",
    active: false,
  },
  {
    number: "3",
    label: "Set your password",
    active: true,
  },
];

function StepCard({
  number,
  label,
  active,
}: {
  number: string;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={[
        "flex min-h-[140px] flex-1 flex-col justify-between rounded-2xl p-4",
        active ? "bg-white" : "bg-white/30 backdrop-blur-[2px]",
      ].join(" ")}
    >
      <div
        className={[
          "flex size-[27px] items-center justify-center rounded-2xl",
          active ? "bg-primary-pink" : "bg-white/40",
        ].join(" ")}
      >
        <span className="font-lp-text-s-semibold text-text-icons-on-color">
          {number}
        </span>
      </div>

      <p
        className={[
          "font-lp-text-l-regular max-w-[180px] text-balance",
          active ? "text-primary-pink" : "text-text-icons-on-color",
        ].join(" ")}
      >
        {label}
      </p>
    </div>
  );
}

export default function AuthStep() {
  return (
    <aside className="w-full overflow-hidden rounded-[20px] bg-[linear-gradient(132.5deg,#CC4778_13.42%,#DD6C96_31.44%,#CC4778_49.81%,#9D1A4A_89.38%)] p-6 text-white sm:p-8 lg:h-full lg:min-h-[783px] lg:rounded-[32px] lg:p-16">
      <div className="flex h-full flex-col justify-between gap-12 lg:gap-16">
        <div className="flex items-center gap-3">
          <div className="">
            <Image
              src="/images/epistem-logo-text-white.webp"
              alt="Epistem logo"
              width={477}
              height={150}
              className="h-[50px] object-contain"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-end gap-10 lg:gap-16">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,313px)_minmax(0,241px)] lg:items-end lg:justify-between">
            <h2 className="font-lp-headline-xl-semibold max-w-[313px] text-text-icons-on-color">
              Together,
              <br />
              we map change
            </h2>

            <p className="font-lp-text-l-regular max-w-[241px] text-text-icons-on-color">
              Scaling nature-based solutions with participatory land use and
              cover mapping platform
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <StepCard key={step.number} {...step} />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
