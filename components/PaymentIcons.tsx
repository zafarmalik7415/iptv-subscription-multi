function VisaIcon() {
  return (
    <svg viewBox="0 0 24 16" className="h-4 w-6" aria-hidden>
      <path
        fill="#1A1F71"
        d="M9.112 5.762 6.97 13.258H4.92L3.374 7.275c-.094-.368-.175-.503-.461-.658-.466-.253-1.236-.49-1.913-.638l.046-.217h3.3a.904.904 0 0 1 .894.764l.817 4.338 2.018-5.102zm8.033 5.049c.008-1.979-2.736-2.088-2.717-2.972.006-.269.262-.555.822-.628a3.66 3.66 0 0 1 1.913.336l.34-1.59a5.207 5.207 0 0 0-1.814-.333c-1.917 0-3.266 1.02-3.278 2.479-.012 1.079.963 1.68 1.698 2.04.756.367 1.01.603 1.006.931-.005.504-.602.725-1.16.734-.975.015-1.54-.263-1.992-.473l-.351 1.642c.453.208 1.289.39 2.156.398 2.037 0 3.37-1.006 3.377-2.564m5.061 2.447H24l-1.565-7.496h-1.656a.883.883 0 0 0-.826.55l-2.909 6.946h2.036l.405-1.12h2.488zm-2.163-2.656 1.02-2.815.588 2.815zm-8.16-4.84-1.603 7.496H8.34l1.605-7.496z"
      />
    </svg>
  );
}

function MastercardIcon() {
  return (
    <svg viewBox="0 0 24 16" className="h-4 w-6" aria-hidden>
      <circle cx="9" cy="8" r="6" fill="#EB001B" />
      <circle cx="15" cy="8" r="6" fill="#F79E1B" />
      <path d="M12 3.2a6 6 0 0 0 0 9.6 6 6 0 0 0 0-9.6Z" fill="#FF5F00" />
    </svg>
  );
}

function PaypalIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-6" aria-hidden>
      <path
        fill="#003087"
        d="M15.607 4.653H8.941L6.645 19.251H1.82L4.862 0h7.995c3.754 0 6.375 2.294 6.473 5.513-.648-.478-2.105-.86-3.722-.86m6.57 5.546c0 3.41-3.01 6.853-6.958 6.853h-2.493L11.595 24H6.74l1.845-11.538h3.592c4.208 0 7.346-3.634 7.153-6.949a5.24 5.24 0 0 1 2.848 4.686M9.653 5.546h6.408c.907 0 1.942.222 2.363.541-.195 2.741-2.655 5.483-6.441 5.483H8.714Z"
      />
    </svg>
  );
}

function WiseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-6" aria-hidden>
      <path
        fill="#163300"
        d="M6.488 7.469 0 15.05h11.585l1.301-3.576H7.922l3.033-3.507.01-.092L8.993 4.48h8.873l-6.878 18.925h4.706L24 .595H2.543l3.945 6.874Z"
      />
    </svg>
  );
}

const methods = [
  { name: "Visa", Icon: VisaIcon },
  { name: "Mastercard", Icon: MastercardIcon },
  { name: "PayPal", Icon: PaypalIcon },
  { name: "Wise", Icon: WiseIcon },
];

export default function PaymentIcons() {
  return (
    <div className="flex flex-wrap gap-2">
      {methods.map(({ name, Icon }) => (
        <span
          key={name}
          title={name}
          className="flex h-7 items-center justify-center rounded-md bg-white px-2"
        >
          <Icon />
          <span className="sr-only">{name}</span>
        </span>
      ))}
    </div>
  );
}
