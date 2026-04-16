"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import emailjs from "@emailjs/browser";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().min(10, "Please describe how we can help you"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const res = await emailjs.send(
        "service_rd7skv8",
        "template_mdu21so",
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        },
        "lfmyIBfKUL4WVf0-n"
      );
      
      if (res.status === 200) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("EmailJS Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent" />
      
      <div className="mb-8">
        <h3 className="text-3xl font-bold text-text-primary mb-2">Get In Touch</h3>
        <p className="text-text-secondary">We will be happy to assist you</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-text-primary block">Full Name</label>
          <input
            id="name"
            {...register("name")}
            className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-text-primary block">Email Address</label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-text-primary block">Phone Number</label>
            <input
              id="phone"
              type="tel"
              {...register("phone")}
              className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="(123) 456-7890"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-text-primary block">Your Message</label>
          <textarea
            id="message"
            rows={5}
            {...register("message")}
            className="w-full p-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
            placeholder="How can we help you?"
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>

        <Button type="submit" size="lg" variant="gradient" className="w-full sm:w-auto" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Submit Message"}
        </Button>

        {submitStatus === "success" && (
          <div className="p-4 bg-green-50 text-green-700 rounded-lg border border-green-100">
            Thank you! Your message has been sent successfully. We will get back to you soon.
          </div>
        )}
        {submitStatus === "error" && (
          <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-100">
            Oops! Something went wrong. Please try again later or contact us directly.
          </div>
        )}
      </form>
    </div>
  );
}
