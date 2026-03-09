"use client";

import { Button } from "@/components/ui/button";
// import {
//   ArrowLeftIcon,
//   ArrowRightIcon,
//   ChevronDownIcon,
//   ChevronLeftIcon,
//   ChevronRightIcon,
// } from "lucide-react";
// import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { zPhone } from "@/lib/utils";
import z from "zod";
import {
  Field,
  FieldError,
  FieldLabel,
  FieldSet,
  // FieldContent,
  // FieldDescription,
  // FieldGroup,
  // FieldLegend,
  // FieldSeparator,
  // FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";

const formSchema = z.object({
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
    .max(32, "Message must be at most 200 characters."),
  email: z.email("Email must be valid"),
  // phone_number: zPhone({ regexError: "Phone number must be valid" }),
});

const defaultValues = {
  name: "",
  company_name: "",
  message: "",
  email: "",
  // phone_number: "",
};

export const ContactUs = () => {
  const t = useTranslations("HomePage.ContactUs");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
    // disabled: LULCLoading,
  });

  // const [isOpen, setIsOpen] = useState(false);

  // const imageComp = useRef(null);
  // const imageMobile = useRef(null);
  const titleComp = useRef(null);

  // const imageIsInView = useInView(imageComp, { once: true });
  // const imageMobileIsInView = useInView(imageMobile, { once: true });
  const titleIsInView = useInView(titleComp, { once: true });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("dataa", data);

    // setCompanyDetails(data);

    return;
  };

  return (
    <div className="flex flex-col items-center justify-start w-full max-w-335.5 px-2 max-lg:mt-6  max-lg:mb-3 lg:my-15 xl:my-20">
      <div className="w-full relative py-6 max-lg:pt-0 max-lg:pb-0 lg:py-0">
        <motion.p
          ref={titleComp}
          // initial={{ y: "100%", opacity: 0 }}
          // animate={{
          //   y: titleIsInView ? 0 : "100%",
          //   opacity: 1,
          //   transition: {
          //     visualDuration: 2,
          //   },
          // }}
          className="font-lp-headline-xxs-bold lg:font-lp-headline-l-bold xl:font-lp-headline-xl-bold text-text-icons-base-main text-center lg:text-left"
        >
          {t("title")}
        </motion.p>
        <div className="rounded-2xl bg-primary-second w-full p-2 max-lg:pb-3 max-lg:px-2 lg:p-8 mt-3 lg:mt-10">
          <form className="" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldSet className="grid grid-cols-12 gap-y-2.5 lg:gap-y-6 lg:gap-x-6">
              {/* <FieldGroup> */}
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={fieldState.invalid}
                    orientation={"vertical"}
                    className="col-span-12 lg:col-span-4 max-lg:gap-0"
                  >
                    <FieldLabel className="max-lg:leading-6" htmlFor="name">
                      {/* WIP NO MOBILE DESIGN SYSTEM */}
                      <p className="max-lg:font-aptos max-lg:text-[13px] max-lg:font-semibold max-lg:leading-6 lg:font-lp-text-m-semibold text-text-icons-base-main">
                        {t("firstName")}
                      </p>
                    </FieldLabel>
                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      className="bg-white text-xs lg:text-[15px]"
                      id="name"
                      autoComplete="off"
                      placeholder={t("firstNamePlaceholder")}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={fieldState.invalid}
                    orientation={"vertical"}
                    className="col-span-12 lg:col-span-4 max-lg:gap-0"
                  >
                    <FieldLabel className="max-lg:leading-6" htmlFor="email">
                      {/* WIP NO MOBILE DESIGN SYSTEM */}
                      <p className="max-lg:font-aptos max-lg:text-[13px] max-lg:font-semibold max-lg:leading-6 lg:font-lp-text-m-semibold text-text-icons-base-main">
                        {t("email")}
                      </p>
                    </FieldLabel>
                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      className="bg-white text-xs lg:text-[15px]"
                      id="email"
                      autoComplete="off"
                      placeholder={t("emailPlaceholder")}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              {/* <Controller
                name="phone_number"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={fieldState.invalid}
                    orientation={"vertical"}
                    className="col-span-12 lg:col-span-4 max-lg:gap-0"
                  >
                    <FieldLabel
                      className="max-lg:leading-6"
                      htmlFor="phone_number"
                    >
                      <p className="max-lg:font-aptos max-lg:text-[13px] max-lg:font-semibold max-lg:leading-6 lg:font-lp-text-m-semibold text-text-icons-base-main">
                        {t("phoneNumber")}
                      </p>
                    </FieldLabel>
                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      className="bg-white text-xs lg:text-[15px]"
                      id="phone_number"
                      autoComplete="off"
                      type="tel"
                      placeholder={t("phoneNumberPlaceholder")}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              /> */}
              <Controller
                name="company_name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={fieldState.invalid}
                    orientation={"vertical"}
                    className="lg:hidden flex col-span-12 lg:col-span-4 max-lg:gap-0"
                  >
                    <FieldLabel
                      className="max-lg:leading-6"
                      htmlFor="company_name"
                    >
                      {/* WIP NO MOBILE DESIGN SYSTEM */}
                      <p className="max-lg:font-aptos max-lg:text-[13px] max-lg:font-semibold max-lg:leading-6 lg:font-lp-text-m-semibold text-text-icons-base-main">
                        {t("companyName")}
                      </p>
                    </FieldLabel>
                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      className="bg-white text-xs lg:text-[15px]"
                      id="company_name"
                      autoComplete="off"
                      placeholder={t("companyNamePlaceholder")}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <div className="hidden lg:flex col-span-4 flex-col gap-y-6">
                <Controller
                  name="company_name"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field
                      data-invalid={fieldState.invalid}
                      orientation={"vertical"}
                      className="col-span-6 lg:col-span-4"
                    >
                      <FieldLabel
                        className="max-lg:leading-6"
                        htmlFor="company_name"
                      >
                        {/* WIP NO MOBILE DESIGN SYSTEM */}
                        <p className="max-lg:font-aptos max-lg:text-[13px] max-lg:font-semibold max-lg:leading-6 lg:font-lp-text-m-semibold text-text-icons-base-main">
                          {t("companyName")}
                        </p>
                      </FieldLabel>
                      <Input
                        {...field}
                        aria-invalid={fieldState.invalid}
                        className="bg-white text-xs lg:text-[15px]"
                        id="company_name"
                        autoComplete="off"
                        placeholder={t("companyNamePlaceholder")}
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>

              <div className="col-span-12 grid grid-cols-12 gap-x-6">
                <div className="col-span-12 lg:col-span-8">
                  <Controller
                    name="message"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        data-invalid={fieldState.invalid}
                        orientation={"vertical"}
                        className="max-lg:gap-0"
                        // className="col-span-12 lg:col-span-8 max-lg:gap-0"
                      >
                        <FieldLabel
                          className="max-lg:leading-6"
                          htmlFor="message-contac"
                        >
                          {/* WIP NO MOBILE DESIGN SYSTEM */}
                          <p className="max-lg:font-aptos max-lg:text-[13px] max-lg:font-semibold max-lg:leading-6 lg:font-lp-text-m-semibold text-text-icons-base-main">
                            {t("message")}
                          </p>
                        </FieldLabel>

                        <Textarea
                          {...field}
                          aria-invalid={fieldState.invalid}
                          className="bg-white h-full text-xs lg:text-[15px]"
                          id="message-contac"
                          autoComplete="off"
                          placeholder={t("messagePlaceholder")}
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </div>
                <div className="hidden lg:flex col-span-4 space-y-6 flex-col justify-end">
                  <p className="font-text-s-medium text-text-icons-base-second">
                    {t("disclaimer")}
                  </p>
                  <Button
                    variant={"primary"}
                    className="h-auto py-3 px-5 w-fit"
                  >
                    <p className="font-text-button-semibold-large text-text-icons-on-color">
                      {t("sendMessage")}
                    </p>
                  </Button>
                </div>
              </div>
              <div className="lg:hidden col-span-12 flex flex-row justify-between gap-y-6 mt-2">
                <div className="w-31">
                  {/* WIP NO MOBILE DESIGN SYSTEM */}
                  <p className="font-inter text-[9px] font-medium text-text-icons-base-second max-w-40 col-span-3">
                    {t("disclaimer")}
                  </p>
                </div>
                <Button
                  variant={"primary"}
                  className="h-auto py-1 px-2 col-span-9 rounded-md"
                >
                  <p className="font-text-xs-semibold text-text-icons-on-color">
                    {t("sendMessage")}
                  </p>
                </Button>
              </div>
            </FieldSet>
          </form>
        </div>
      </div>
    </div>
  );
};
