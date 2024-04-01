"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { FiArrowUpCircle } from "react-icons/fi";

import { Button } from "@/app/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";

import { scrollTransition } from "@/app/lib/framer-motion/client/scrollTransition";
import { scrollVariants } from "@/app/lib/framer-motion/scrollVariants";
import { MotionForm } from "@/app/lib/framer-motion/MotionComponents";

import { useToast } from "@/app/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Must be a valid email",
  }),
  subject: z.string().min(3, {
    message: "subject must be at least 3 characters.",
  }),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(160, {
      message: "Message must not be longer than 30 characters.",
    }),
});

type ContactFormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "I look for a developer to bring my idea to reality",
      message: "",
    },
  });

  const { toast } = useToast();

  async function onSubmit(data: ContactFormData) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <MotionForm
        className="flex flex-col gap-8"
        onSubmit={form.handleSubmit(onSubmit)}
        variants={scrollVariants}
        initial="hidden"
        whileInView="visible"
        transition={scrollTransition(6)}
        viewport={{ once: false }}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-body_two text-custom_primary">
                Name
              </FormLabel>
              <FormControl>
                <Input
                  className="border-0 lg:w-[384px]"
                  placeholder="Enter your full name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-body_two text-custom_primary">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  className="border-0 lg:w-[384px]"
                  placeholder="Enter your best email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-body_two text-custom_primary">
                Subject
              </FormLabel>
              <FormControl>
                <Input
                  className="border-0 lg:w-[384px]"
                  placeholder="Enter a subject"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-body_two text-custom_primary">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none border-0 lg:w-[384px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="bg-custom_primary-dark w-full lg:max-w-[135px]"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          <FiArrowUpCircle size={20} className="text-custom_white-light mr-4" />
          <span className="font-headline_five text-custom_white-light">
            Submit
          </span>
        </Button>
      </MotionForm>
    </Form>
  );
}
