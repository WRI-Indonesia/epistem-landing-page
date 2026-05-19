"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PASSWORD_RULES = {
  minLength: /^.{8,}$/,
  lowercaseUppercase: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
  number: /^(?=.*\d).+$/,
  specialCharacter: /^(?=.*[^A-Za-z0-9]).+$/,
} as const;

type SetPasswordValues = {
  password: string;
  confirmPassword: string;
};

type SetPasswordProps = {
  slug: string;
};

type SubmitState =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success" }
  | { type: "error"; message: string };

function RequirementItem({
  label,
  satisfied,
}: {
  label: string;
  satisfied: boolean;
}) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={cn(
          "flex size-4 shrink-0 items-center justify-center rounded-full transition-colors",
          satisfied ? "bg-primary-red-pink-light" : "bg-transparent",
        )}
      >
        <Check
          className={cn(
            "size-3.5",
            satisfied ? "text-primary-pink" : "text-muted-foreground/60",
          )}
          strokeWidth={2.4}
        />
      </div>
      <p
        className={cn(
          "font-lp-text-xs-semibold transition-colors",
          satisfied ? "text-primary-pink" : "text-muted-foreground",
        )}
      >
        {label}
      </p>
    </div>
  );
}

export default function SetPassword({ slug }: SetPasswordProps) {
  const t = useTranslations("Auth.SetPassword");
  const [submitState, setSubmitState] = useState<SubmitState>({ type: "idle" });
  const setPasswordSchema = useMemo(
    () =>
      z
        .object({
          password: z.string().min(8, t("errors.minLength")),
          // .regex(PASSWORD_RULES.lowercaseUppercase, t("errors.lowercaseUppercase"))
          // .regex(PASSWORD_RULES.number, t("errors.number"))
          // .regex(PASSWORD_RULES.specialCharacter, t("errors.specialCharacter")),
          confirmPassword: z.string().min(1, t("errors.confirmRequired")),
        })
        .refine((data) => data.password === data.confirmPassword, {
          path: ["confirmPassword"],
          message: t("errors.passwordMismatch"),
        }),
    [t],
  );

  const form = useForm<SetPasswordValues>({
    resolver: zodResolver(setPasswordSchema),
    mode: "onChange",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const passwordValue = form.watch("password");
  const confirmPasswordValue = form.watch("confirmPassword");

  const passwordChecks = useMemo(
    () => [
      // {
      //   key: "lowercaseUppercase",
      //   label: t("requirements.lowercaseUppercase"),
      //   satisfied: PASSWORD_RULES.lowercaseUppercase.test(passwordValue),
      // },
      // {
      //   key: "number",
      //   label: t("requirements.number"),
      //   satisfied: PASSWORD_RULES.number.test(passwordValue),
      // },
      // {
      //   key: "specialCharacter",
      //   label: t("requirements.specialCharacter"),
      //   satisfied: PASSWORD_RULES.specialCharacter.test(passwordValue),
      // },
      {
        key: "minLength",
        label: t("requirements.minLength"),
        satisfied: PASSWORD_RULES.minLength.test(passwordValue),
      },
    ],
    [passwordValue, t],
  );

  const isSubmitDisabled =
    submitState.type === "submitting" ||
    !form.formState.isValid ||
    !passwordValue ||
    !confirmPasswordValue;

  const onSubmit = async ({ password }: SetPasswordValues) => {
    setSubmitState({ type: "submitting" });

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/account/set-password/${slug}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password }),
        },
      );

      if (!response.ok) {
        throw new Error("request_failed");
      }

      setSubmitState({ type: "success" });
    } catch {
      setSubmitState({
        type: "error",
        message: t("submitError"),
      });
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-48px)] items-center justify-center bg-white px-4 py-6 lg:px-16 lg:py-6">
      <div className="w-full max-w-[400px] rounded-2xl bg-white">
        <div className="flex flex-col gap-1.5 px-6 pt-6">
          <h1 className="font-lp-headline-xs-bold text-foreground">
            {t("title")}
          </h1>
          <p className="font-text-s-medium text-muted-foreground">
            {t("description")}
          </p>
        </div>

        {submitState.type === "success" ? (
          <div className="px-6 pb-6 pt-4">
            <div className="rounded-2xl border border-primary-red-pink-light bg-primary-red-pink-light px-4 py-5">
              <div className="mb-3 flex size-10 items-center justify-center rounded-full bg-primary-pink text-white">
                <Check className="size-5" strokeWidth={2.5} />
              </div>
              <h2 className="font-lp-text-l-semibold text-text-icons-base-main">
                {t("successTitle")}
              </h2>
              <p className="font-lp-text-s-regular mt-2 text-text-icons-base-second">
                {t("successMessage")}
              </p>
            </div>
          </div>
        ) : (
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 px-6 pb-6 pt-4"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="font-text-s-medium text-foreground"
              >
                {t("passwordLabel")}
              </label>
              <Input
                id="password"
                type="password"
                autoComplete="new-password"
                aria-invalid={form.formState.errors.password ? "true" : "false"}
                className="h-10 rounded-md border-input bg-white px-3 py-2.5 text-sm"
                {...form.register("password")}
              />
              {form.formState.errors.password ? (
                <FieldError errors={[form.formState.errors.password]} />
              ) : null}
            </div>

            <div className="flex flex-col gap-2">
              {passwordChecks.map((item) => (
                <RequirementItem
                  key={item.key}
                  label={item.label}
                  satisfied={item.satisfied}
                />
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="confirmPassword"
                className="font-text-s-medium text-foreground"
              >
                {t("confirmPasswordLabel")}
              </label>
              <Input
                id="confirmPassword"
                type="password"
                autoComplete="new-password"
                aria-invalid={
                  form.formState.errors.confirmPassword ? "true" : "false"
                }
                className="h-10 rounded-md border-input bg-white px-3 py-2.5 text-sm"
                {...form.register("confirmPassword")}
              />
              {form.formState.errors.confirmPassword ? (
                <FieldError errors={[form.formState.errors.confirmPassword]} />
              ) : null}
            </div>

            {submitState.type === "error" ? (
              <FieldError>{submitState.message}</FieldError>
            ) : null}

            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitDisabled}
                className="h-10 w-full rounded-xl font-text-s-medium"
              >
                {submitState.type === "submitting"
                  ? t("submitting")
                  : t("submit")}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
