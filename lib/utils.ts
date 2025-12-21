import { clsx, type ClassValue } from "clsx";
import parsePhoneNumberFromString from "libphonenumber-js";
import { twMerge } from "tailwind-merge";
import z from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const zPhone = (props?: {
  // stringError?: string;
  regexError?: string;
}) => {
  return z.string().transform((arg, ctx) => {
    const phone = parsePhoneNumberFromString(arg, {
      // set this to use a default country when the phone number omits country code
      defaultCountry: "ID",

      // set to false to require that the whole string is exactly a phone number,
      // otherwise, it will search for a phone number anywhere within the string
      extract: false,
    });

    // when it's good
    if (phone && phone.isValid()) {
      return String(phone.number);
    }

    // when it's not
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: props?.regexError,
    });
    return z.NEVER;
  });
};
