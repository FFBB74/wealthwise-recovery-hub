
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Mail, User } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Please write a detailed message"),
});

type FormValues = z.infer<typeof formSchema>;

const CustomFormSection: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  function onSubmit(data: FormValues) {
    // Show a toast that the message was "sent"
    toast.success("Your request has been received! We'll contact you soon.");
    form.reset();
  }

  return (
    <section id="custom-form" className="bg-brand-navy/5 py-16 px-6 border-t border-gray-100 mt-12">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl text-center font-bold text-brand-navy mb-4">Request Info / Contact Us</h2>
        <p className="text-center text-gray-600 mb-10 text-lg">
          Fill in the form below and our team will get back to you within 24 hours.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <span className="flex items-center gap-2"><User size={18} />Name</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} autoComplete="name" />
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
                  <FormLabel>
                    <span className="flex items-center gap-2"><Mail size={18} />Email</span>
                  </FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@email.com" {...field} autoComplete="email" />
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
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Write your message or request here..." rows={5} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" size="lg" className="w-full bg-brand-emerald hover:bg-brand-emerald-dark text-white">
              Send Message
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default CustomFormSection;

