
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Mail, User, MessageSquare } from "lucide-react";

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
    <section id="custom-form" className="bg-gradient-to-br from-slate-900 to-slate-800 py-24 px-6 mt-12">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-playfair text-5xl md:text-6xl text-center font-bold text-white mb-4 drop-shadow-lg">Request Info / Contact Us</h2>
        <p className="text-center text-gray-300 mb-12 text-xl max-w-3xl mx-auto">
          Fill in the form below and our team will get back to you within 24 hours.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-white p-10 rounded-3xl shadow-2xl border border-gray-200">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <span className="flex items-center gap-3 font-semibold text-gray-800 text-lg"><User size={22} />Name</span>
                  </FormLabel>
                  <FormControl>
                    <Input className="h-14 text-base px-4" placeholder="Your full name" {...field} autoComplete="name" />
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
                    <span className="flex items-center gap-3 font-semibold text-gray-800 text-lg"><Mail size={22} />Email</span>
                  </FormLabel>
                  <FormControl>
                    <Input className="h-14 text-base px-4" type="email" placeholder="you@email.com" {...field} autoComplete="email" />
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
                  <FormLabel>
                    <span className="flex items-center gap-3 font-semibold text-gray-800 text-lg"><MessageSquare size={22} />Message</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea className="text-base p-4" placeholder="Write your message or request here..." rows={6} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" size="lg" className="w-full bg-brand-emerald hover:bg-brand-emerald-dark text-white font-bold text-lg py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Send Message
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default CustomFormSection;
