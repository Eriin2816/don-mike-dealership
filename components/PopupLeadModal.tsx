"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const SESSION_KEY = "donmike_popup_shown";
const DELAY_MS = 10000;
const WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/dcSboFPXg45gCINuehon/webhook-trigger/0fdb951a-14b9-4874-9b43-41a28bae9ce2";

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  carMakeModel: string;
  creditScore: string;
  financingPreference: string;
  downPayment: string;
}

const EMPTY: FormData = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  carMakeModel: "",
  creditScore: "",
  financingPreference: "",
  downPayment: "",
};

export default function PopupLeadModal() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY)) return;
    const timer = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem(SESSION_KEY, "1");
    }, DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  function set(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  function validate(): boolean {
    const e: Partial<FormData> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.carMakeModel.trim()) e.carMakeModel = "Required";
    if (!form.creditScore) e.creditScore = "Required";
    if (!form.financingPreference) e.financingPreference = "Required";
    if (!form.downPayment) e.downPayment = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: form.firstName,
          last_name: form.lastName,
          phone: form.phone,
          email: form.email,
          car_make_model: form.carMakeModel,
          credit_score: form.creditScore,
          financing_preference: form.financingPreference,
          down_payment: form.downPayment,
        }),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Get matched to your vehicle"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#0F172A]/60 backdrop-blur-sm"
        onClick={() => setVisible(false)}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-[600px] bg-white rounded-2xl shadow-[0_24px_64px_rgba(15,23,42,0.25)] overflow-hidden animate-fade-up max-h-[95vh] flex flex-col">

        {/* Header */}
        <div className="bg-[#1E3A5F] px-7 pt-7 pb-6 relative shrink-0">
          <button
            onClick={() => setVisible(false)}
            aria-label="Close"
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors duration-150"
          >
            <CloseIcon />
          </button>
          <span className="inline-block text-[#4A7DB5] text-[10px] font-semibold tracking-[0.15em] uppercase mb-2">
            Free Vehicle Match
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-[-0.01em] leading-snug">
            Find Your Perfect Vehicle<br />in Gainesville.
          </h2>
          <p className="text-white/65 text-sm mt-2 leading-relaxed">
            Share a few details and we&apos;ll match you to the right car, truck, or SUV — no pressure, no hard credit pull.
          </p>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto">
          {status === "success" ? (
            <SuccessState onClose={() => setVisible(false)} />
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="px-7 py-6 flex flex-col gap-4">

                {/* Row: First + Last Name */}
                <div className="grid grid-cols-2 gap-4">
                  <Field label="First Name" error={errors.firstName}>
                    <input
                      type="text"
                      placeholder="John"
                      value={form.firstName}
                      onChange={(e) => set("firstName", e.target.value)}
                      className={inputCls(!!errors.firstName)}
                    />
                  </Field>
                  <Field label="Last Name" error={errors.lastName}>
                    <input
                      type="text"
                      placeholder="Smith"
                      value={form.lastName}
                      onChange={(e) => set("lastName", e.target.value)}
                      className={inputCls(!!errors.lastName)}
                    />
                  </Field>
                </div>

                {/* Row: Phone + Email */}
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Phone" error={errors.phone}>
                    <input
                      type="tel"
                      placeholder="(352) 000-0000"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      className={inputCls(!!errors.phone)}
                    />
                  </Field>
                  <Field label="Email" error={errors.email}>
                    <input
                      type="email"
                      placeholder="john@email.com"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      className={inputCls(!!errors.email)}
                    />
                  </Field>
                </div>

                {/* Car Make & Model */}
                <Field label="Car Make &amp; Model" error={errors.carMakeModel}>
                  <input
                    type="text"
                    placeholder="e.g. Honda CR-V, Mazda CX-5, GMC Sierra…"
                    value={form.carMakeModel}
                    onChange={(e) => set("carMakeModel", e.target.value)}
                    className={inputCls(!!errors.carMakeModel)}
                  />
                </Field>

                {/* Credit Score Range */}
                <Field label="Credit Score Range" error={errors.creditScore}>
                  <ChipGroup
                    options={["Excellent (720+)", "Good (640–719)", "Fair (580–639)"]}
                    value={form.creditScore}
                    onChange={(v) => set("creditScore", v)}
                    hasError={!!errors.creditScore}
                  />
                </Field>

                {/* Financing Preference */}
                <Field label="Financing Preference" error={errors.financingPreference}>
                  <ChipGroup
                    options={["With Down Payment", "Without Down Payment", "Cash Buyer"]}
                    value={form.financingPreference}
                    onChange={(v) => set("financingPreference", v)}
                    hasError={!!errors.financingPreference}
                  />
                </Field>

                {/* Down Payment Amount */}
                <Field label="Down Payment Amount" error={errors.downPayment}>
                  <ChipGroup
                    options={["$0", "$500 – $1,000", "$1,000 – $3,000", "$3,000+"]}
                    value={form.downPayment}
                    onChange={(v) => set("downPayment", v)}
                    hasError={!!errors.downPayment}
                  />
                </Field>

                {/* Privacy note */}
                <p className="text-[#94A3B8] text-[11px] leading-relaxed">
                  By submitting you agree to our{" "}
                  <Link href="/privacy-policy" className="underline hover:text-[#1A56DB] transition-colors duration-150" target="_blank">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/terms-and-conditions" className="underline hover:text-[#1A56DB] transition-colors duration-150" target="_blank">
                    Terms &amp; Conditions
                  </Link>
                  . We will never sell your information.
                </p>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#1A56DB] hover:bg-[#1547C0] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-base py-3.5 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <SpinnerIcon />
                      Sending…
                    </>
                  ) : (
                    <>
                      <SendIcon />
                      Send Message
                    </>
                  )}
                </button>

                {status === "error" && (
                  <p className="text-red-500 text-xs text-center">
                    Something went wrong. Please try again or call us at{" "}
                    <a href="tel:+13528882293" className="underline">+1 352-888-2293</a>.
                  </p>
                )}
              </div>

              {/* Assurance strip */}
              <div className="px-7 pb-6 pt-2">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: <BoltIcon />, label: "Fast Response", sub: "Within 1 business day" },
                    { icon: <LockIcon />, label: "No Hard Pull", sub: "Soft check only" },
                    { icon: <ShieldIcon />, label: "Zero Pressure", sub: "We guide, not push" },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col items-center gap-1.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl py-3 px-2 text-center">
                      <span className="text-[#1A56DB]">{item.icon}</span>
                      <span className="font-semibold text-[#1E3A5F] text-xs leading-tight">{item.label}</span>
                      <span className="text-[#94A3B8] text-[10px] leading-tight">{item.sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Sub-components ─────────────────────────────────────── */

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[#1E3A5F] text-xs font-semibold" dangerouslySetInnerHTML={{ __html: label + ' <span class="text-[#1A56DB]">*</span>' }} />
      {children}
      {error && <span className="text-red-500 text-[11px]">{error}</span>}
    </div>
  );
}

function ChipGroup({ options, value, onChange, hasError }: { options: string[]; value: string; onChange: (v: string) => void; hasError: boolean }) {
  return (
    <div className={`flex flex-wrap gap-2 p-3 rounded-xl border ${hasError ? "border-red-400 bg-red-50" : "border-[#E2E8F0] bg-[#F8FAFC]"}`}>
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors duration-150 ${
            value === opt
              ? "bg-[#1A56DB] text-white border-[#1A56DB]"
              : "bg-white text-[#475569] border-[#C8D6E5] hover:border-[#1A56DB] hover:text-[#1A56DB]"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function SuccessState({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 px-7 py-14 text-center">
      <div className="w-16 h-16 rounded-full bg-[#EBF3FF] flex items-center justify-center">
        <CheckIcon />
      </div>
      <div>
        <h3 className="font-display font-black text-2xl text-[#1E3A5F] mb-2">Message Sent!</h3>
        <p className="text-[#475569] text-sm leading-relaxed max-w-xs mx-auto">
          We&apos;ll review your details and follow up within 1 business day.
          No pressure — just good guidance.
        </p>
      </div>
      <button
        onClick={onClose}
        className="bg-[#1A56DB] hover:bg-[#1547C0] text-white font-semibold text-sm px-8 py-3 rounded-xl transition-colors duration-200"
      >
        Close
      </button>
    </div>
  );
}

function inputCls(hasError: boolean) {
  return `w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#1E3A5F] placeholder:text-[#94A3B8] outline-none transition-colors duration-150 focus:border-[#1A56DB] focus:ring-2 focus:ring-[#1A56DB]/10 ${
    hasError ? "border-red-400 bg-red-50" : "border-[#E2E8F0] bg-[#F8FAFC] hover:border-[#C8D6E5]"
  }`;
}

/* ── Icons ──────────────────────────────────────────────── */

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-spin">
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
