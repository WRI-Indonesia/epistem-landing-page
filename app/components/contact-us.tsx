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

const formSchema = z.object({
  name: z
    .string()
    .min(5, "Name must be at least 3 characters.")
    .max(32, "Name must be at most 32 characters."),
  company_name: z
    .string()
    .min(5, "Company name must be at least 3 characters.")
    .max(32, "Company name must be at most 32 characters."),
  message: z
    .string()
    .min(5, "Message must be at least 3 characters.")
    .max(32, "Message must be at most 200 characters."),
  email: z.email("Email must be valid"),
  phone_number: zPhone({ regexError: "Phone number must be valid" }),
});

const defaultValues = {
  name: "",
  company_name: "",
  message: "",
  email: "",
  phone_number: "",
};

export const ContactUs = () => {
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
    <div className="flex flex-col items-center justify-start w-full max-w-360 px-3">
      <div className="w-full relative py-6 lg:py-10">
        <motion.p
          ref={titleComp}
          initial={{ y: "100%", opacity: 0 }}
          animate={{
            y: titleIsInView ? 0 : "100%",
            opacity: 1,
            transition: {
              visualDuration: 2,
            },
          }}
          className="font-pjs font-bold text-xl md:text-6xl text-text-icons-base-main "
        >
          Contact Us
        </motion.p>
        <div className="rounded-2xl bg-primary-second w-full p-2 max-lg:px-3 lg:p-8 mt-4 lg:mt-5">
          <form
            className="space-y-12.75"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FieldSet className="grid grid-cols-12">
              {/* <FieldGroup> */}
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={fieldState.invalid}
                    orientation={"vertical"}
                    className="col-span-6 lg:col-span-4"
                  >
                    <FieldLabel htmlFor="name">
                      <p className="font-aptos lg:font-inter text-[13px] lg:text-[15px] font-semibold lg:font-medium text-text-icons-base-main">
                        Full Name
                      </p>
                    </FieldLabel>
                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      className="bg-white text-sm lg:text-lg"
                      id="name"
                      autoComplete="off"
                      placeholder="Enter your full name"
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
                    className="col-span-6 lg:col-span-4"
                  >
                    <FieldLabel htmlFor="email">
                      <p className="font-aptos lg:font-inter text-[13px] lg:text-[15px] font-semibold lg:font-medium text-text-icons-base-main">
                        Email
                      </p>
                    </FieldLabel>
                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      className="bg-white text-sm lg:text-lg"
                      id="email"
                      autoComplete="off"
                      placeholder="Enter your email address"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="phone_number"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={fieldState.invalid}
                    orientation={"vertical"}
                    className="col-span-6 lg:col-span-4"
                  >
                    <FieldLabel htmlFor="phone_number">
                      <p className="font-aptos lg:font-inter text-[13px] lg:text-[15px] font-semibold lg:font-medium text-text-icons-base-main">
                        Phone Number
                      </p>
                    </FieldLabel>
                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      className="bg-white text-sm lg:text-lg"
                      id="phone_number"
                      autoComplete="off"
                      type="tel"
                      placeholder="Enter your phone number"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="company_name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={fieldState.invalid}
                    orientation={"vertical"}
                    className="lg:hidden flex col-span-6 lg:col-span-4"
                  >
                    <FieldLabel htmlFor="company_name">
                      <p className="font-aptos lg:font-inter text-[13px] lg:text-[15px] font-semibold lg:font-medium text-text-icons-base-main">
                        Company Name
                      </p>
                    </FieldLabel>
                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      className="bg-white text-sm lg:text-lg"
                      id="company_name"
                      autoComplete="off"
                      placeholder="Enter your full name"
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
                      <FieldLabel htmlFor="company_name">
                        <p className="font-aptos lg:font-inter text-[13px] lg:text-[15px] font-semibold lg:font-medium text-text-icons-base-main">
                          Company Name
                        </p>
                      </FieldLabel>
                      <Input
                        {...field}
                        aria-invalid={fieldState.invalid}
                        className="bg-white text-sm lg:text-lg"
                        id="company_name"
                        autoComplete="off"
                        placeholder="Enter your full name"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <p className="font-inter text-sm font-medium text-text-icons-base-second">
                  Your request will be sent securely and remain private.
                </p>
                <Button variant={"primary"}>
                  <p className="">Submit</p>
                </Button>
              </div>
              <Controller
                name="message"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={fieldState.invalid}
                    orientation={"vertical"}
                    className="col-span-12 lg:col-span-8"
                  >
                    <FieldLabel htmlFor="message-contac">
                      <p className="font-aptos lg:font-inter text-[13px] lg:text-[15px] font-semibold lg:font-medium text-text-icons-base-main">
                        Message
                      </p>
                    </FieldLabel>

                    <Textarea
                      {...field}
                      aria-invalid={fieldState.invalid}
                      className="bg-white h-full text-sm lg:text-lg"
                      id="message-contac"
                      autoComplete="off"
                      placeholder="Enter your message"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <div className="lg:hidden col-span-12 flex flex-col gap-y-6">
                <p className="font-inter text-sm font-medium text-text-icons-base-second">
                  Your request will be sent securely and remain private.
                </p>
                <Button variant={"primary"}>
                  <p className="">Submit</p>
                </Button>
              </div>
            </FieldSet>
          </form>
        </div>
      </div>
    </div>
  );
};
