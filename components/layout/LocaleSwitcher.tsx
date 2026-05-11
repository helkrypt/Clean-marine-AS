"use client";

import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

type Variant = "desktop" | "mobile";

export default function LocaleSwitcher({
  variant = "desktop",
  onSwitch,
}: {
  variant?: Variant;
  onSwitch?: () => void;
}) {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchTo = (next: Locale) => {
    if (next === locale) return;
    onSwitch?.();
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  const isMobile = variant === "mobile";

  return (
    <div
      role="group"
      aria-label={t("label")}
      className={[
        "inline-flex items-center gap-0 select-none",
        isMobile ? "text-base" : "text-xs",
      ].join(" ")}
      style={{
        fontFamily: "var(--font-barlow)",
        fontWeight: 700,
        letterSpacing: "0.12em",
      }}
    >
      {routing.locales.map((l, i) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            onClick={() => switchTo(l)}
            disabled={isPending}
            aria-pressed={active}
            aria-label={t(l)}
            className={[
              "px-2 py-1 transition-colors duration-200 cursor-pointer",
              active ? "text-rust" : "text-mist hover:text-parchment",
              isPending ? "opacity-60" : "",
            ].join(" ")}
            style={{
              borderRight: i === 0 ? "1px solid rgba(255,255,255,0.18)" : "none",
            }}
          >
            {t(l)}
          </button>
        );
      })}
    </div>
  );
}
