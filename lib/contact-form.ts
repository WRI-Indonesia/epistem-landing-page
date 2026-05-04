import { z } from "zod";

export const RECAPTCHA_ACTION = "contact_form_submit";
export const DEFAULT_RECAPTCHA_MIN_SCORE = 0.5;

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(5, "Name must be at least 3 characters.")
    .max(32, "Name must be at most 32 characters."),
  company_name: z
    .string()
    .min(5, "Organization name must be at least 3 characters.")
    .max(32, "Organization name must be at most 32 characters."),
  message: z
    .string()
    .min(5, "Message must be at least 3 characters.")
    .max(200, "Message must be at most 200 characters."),
  email: z.email("Email must be valid"),
});

export const contactFormSubmitSchema = contactFormSchema.extend({
  recaptchaToken: z.string().min(1, "reCAPTCHA token is required."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type ContactFormSubmitValues = z.infer<typeof contactFormSubmitSchema>;
