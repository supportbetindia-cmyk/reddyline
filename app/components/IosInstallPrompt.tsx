"use client";

import clsx from "clsx";
import {
  useCallback,
  useEffect,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { FaApple, FaCheck, FaPlusSquare, FaShareAlt, FaTimes } from "react-icons/fa";

type ModalMode = "guide" | "already" | "non-ios";

const STEPS = [
  {
    num: 1,
    icon: FaShareAlt,
    text: (
      <>
        Tap <strong className="text-white">Open Share Menu</strong> below (or the
        Share button in Safari).
      </>
    ),
  },
  {
    num: 2,
    icon: FaPlusSquare,
    text: (
      <>
        Choose <strong className="text-white">Add to Home Screen</strong> in the
        menu.
      </>
    ),
  },
  {
    num: 3,
    text: (
      <>
        Tap <strong className="text-white">Add</strong> — Reddy Line will appear on your
        home screen like an app.
      </>
    ),
  },
];

export function isIosDevice() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  return (
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
}

export function isStandaloneApp() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    (navigator as Navigator & { standalone?: boolean }).standalone === true
  );
}

function canUseWebShare() {
  return (
    typeof navigator !== "undefined" &&
    "share" in navigator &&
    typeof navigator.share === "function"
  );
}

/** Opens the native share sheet — closest iOS allows to “Add to Home Screen”. */
export async function openIosShareSheet(): Promise<boolean> {
  if (!canUseWebShare()) return false;

  try {
    await navigator.share({
      title: "Reddy Line",
      text: "Add Reddy Line to your home screen for quick access.",
      url: window.location.href,
    });
    return true;
  } catch {
    return false;
  }
}

export function IosAddToHomeScreenModal({
  open,
  onClose,
  mode = "guide",
}: {
  open: boolean;
  onClose: () => void;
  mode?: ModalMode;
}) {
  const canShare = canUseWebShare();

  const handleShare = useCallback(async () => {
    const shared = await openIosShareSheet();
    if (shared) onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ios-install-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close"
      />

      <div
        className={clsx(
          "relative w-full max-w-md rounded-2xl border border-white/10",
          "bg-[#0D1018] shadow-[0_24px_80px_rgba(0,0,0,0.55)]",
          "p-6 md:p-8"
        )}
      >
        <button
          type="button"
          onClick={onClose}
          className={clsx(
            "absolute top-4 right-4 w-9 h-9 rounded-full",
            "border border-white/10 bg-white/5 text-muted",
            "flex items-center justify-center",
            "hover:text-white hover:border-white/20 transition-colors"
          )}
          aria-label="Close"
        >
          <FaTimes size={14} />
        </button>

        {mode === "already" ? (
          <>
            <div className="flex items-center gap-3 mb-4">
              <div
                className={clsx(
                  "w-11 h-11 rounded-xl bg-[#1EBF6A]/10 border border-[#1EBF6A]/25",
                  "flex items-center justify-center text-[#1EBF6A]"
                )}
              >
                <FaCheck size={18} />
              </div>
              <div>
                <h2
                  id="ios-install-title"
                  className="font-syne font-bold text-white text-[18px]"
                >
                  Already on your home screen
                </h2>
              </div>
            </div>
            <p className="text-[14px] text-muted leading-relaxed">
              You&apos;re using Reddy Line from your home screen. Open the icon anytime
              for the full app experience.
            </p>
            <button type="button" className="btn btn-gold w-full mt-6" onClick={onClose}>
              Continue
            </button>
          </>
        ) : mode === "non-ios" ? (
          <>
            <div className="flex items-center gap-3 mb-4">
              <div
                className={clsx(
                  "w-11 h-11 rounded-xl bg-[#F6C453]/10 border border-[#F6C453]/25",
                  "flex items-center justify-center text-[#F6C453]"
                )}
              >
                <FaApple size={20} />
              </div>
              <h2
                id="ios-install-title"
                className="font-syne font-bold text-white text-[18px]"
              >
                Install on iPhone
              </h2>
            </div>
            <p className="text-[14px] text-muted leading-relaxed">
              Open <strong className="text-white">Reddy Line in Safari on your iPhone</strong>,
              then tap Download and choose <strong className="text-white">Add to Home
              Screen</strong> from the Share menu. Apple does not allow automatic install
              from desktop browsers.
            </p>
            <button type="button" className="btn btn-gold w-full mt-6" onClick={onClose}>
              Got it
            </button>
          </>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-5">
              <div
                className={clsx(
                  "w-11 h-11 rounded-xl bg-[#F6C453]/10 border border-[#F6C453]/25",
                  "flex items-center justify-center text-[#F6C453]"
                )}
              >
                <FaApple size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F6C453] font-syne">
                  iOS Install
                </p>
                <h2
                  id="ios-install-title"
                  className="font-syne font-bold text-white text-[18px] leading-tight"
                >
                  Add to Home Screen
                </h2>
              </div>
            </div>

            <p className="text-[14px] text-muted leading-relaxed mb-6">
              Apple requires one extra tap — websites cannot add the icon automatically.
              {canShare
                ? " Open the Share menu, then tap Add to Home Screen."
                : " Use Safari on your iPhone and tap Share → Add to Home Screen."}
            </p>

            <ol className="space-y-3">
              {STEPS.map((step) => {
                const Icon = step.icon;
                return (
                  <li
                    key={step.num}
                    className={clsx(
                      "flex gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02]",
                      "px-4 py-3.5"
                    )}
                  >
                    <span
                      className={clsx(
                        "shrink-0 w-7 h-7 rounded-lg bg-[#F6C453]/12",
                        "text-[#F6C453] text-[12px] font-bold",
                        "flex items-center justify-center font-syne"
                      )}
                    >
                      {step.num}
                    </span>
                    <div className="flex items-start gap-2.5 min-w-0">
                      {Icon && (
                        <Icon
                          className="shrink-0 text-[#F6C453] mt-0.5"
                          size={14}
                          aria-hidden
                        />
                      )}
                      <span className="text-[13.5px] text-white/85 leading-[1.6]">
                        {step.text}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ol>

            {canShare ? (
              <button
                type="button"
                className="btn btn-gold w-full mt-6 gap-2"
                onClick={handleShare}
              >
                <FaShareAlt size={14} aria-hidden />
                Open Share Menu
              </button>
            ) : (
              <p className="text-[12px] text-muted mt-6 text-center">
                Open this page in <strong className="text-white">Safari</strong> on your
                iPhone to install.
              </p>
            )}

            <button
              type="button"
              className="btn btn-ghost w-full mt-3"
              onClick={onClose}
            >
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
}

type IosDownloadButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
};

/** iOS download — opens Share sheet when possible (Add to Home Screen lives there). */
export function IosDownloadButton({
  children,
  className,
  type = "button",
  onClick,
  ...props
}: IosDownloadButtonProps) {
  const [open, setOpen] = useState(false);
  const [modalMode, setModalMode] = useState<ModalMode>("guide");

  const handleInstall = useCallback(async () => {
    if (isStandaloneApp()) {
      setModalMode("already");
      setOpen(true);
      return;
    }

    if (!isIosDevice()) {
      setModalMode("non-ios");
      setOpen(true);
      return;
    }

    // Best available on iOS: native share sheet → user taps "Add to Home Screen"
    if (canUseWebShare()) {
      const shared = await openIosShareSheet();
      if (shared) return;
    }

    setModalMode("guide");
    setOpen(true);
  }, []);

  return (
    <>
      <button
        type={type}
        className={className}
        onClick={(e) => {
          onClick?.(e);
          if (!e.defaultPrevented) handleInstall();
        }}
        {...props}
      >
        {children}
      </button>
      <IosAddToHomeScreenModal
        open={open}
        onClose={() => setOpen(false)}
        mode={modalMode}
      />
    </>
  );
}
