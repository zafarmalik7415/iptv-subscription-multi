import {
  IQ,
  SA,
  AE,
  KW,
  QA,
  EG,
  MA,
  BH,
  US,
  CA,
  GB,
  DE,
  FR,
  ES,
  IT,
  AU,
  CY,
  RS,
  SN,
  TN,
  AL,
  DZ,
  FI,
  NL,
} from "country-flag-icons/react/3x2";

const flags = {
  IQ, SA, AE, KW, QA, EG, MA, BH, US, CA, GB, DE, FR, ES, IT, AU, CY,
  RS, SN, TN, AL, DZ, FI, NL,
};

export type CountryCode = keyof typeof flags;

export default function CountryFlag({
  code,
  className = "",
}: {
  code: string;
  className?: string;
}) {
  const Flag = flags[code as CountryCode];
  if (!Flag) return null;

  return (
    <Flag
      className={`inline-block rounded-[3px] border border-white/10 shadow-sm ${className}`}
    />
  );
}
