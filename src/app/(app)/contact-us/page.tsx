"use client";

import Image from "next/image";
import React, { useState } from "react";
import Footer from "../../../../components/ui/Footer";
import axios from "axios";
import { redirect} from "next/navigation";

import { Button1 } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { useForm } from "react-hook-form";
import { feedback } from "../../../../schemas/feedback";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import z from "zod";
import { toast } from "react-hot-toast";

const Page = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof feedback>>({
    resolver: zodResolver(feedback),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof feedback>) => {
    setIsSubmitting(true);
    try {
      await axios.post("/api/feedback", data);
      toast.success("Thank you for your feedback!");
      redirect("/contact-us"); 
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast.error("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-white text-black w-full">
        
        <div className="relative w-full h-[220px]">
          <Image
            src="/write.jpg"
            alt="Contact Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h2 className="text-white text-4xl md:text-6xl font-bold">
              Contact-us
            </h2>
          </div>
        </div>

        
        <div className="max-w-2xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            We`d love to hear from you
          </h3>

          <div className="bg-gray-100 border border-gray-300 shadow-xl p-8 rounded-xl">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
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
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                
                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile Number</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+91 98765 43210"
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
                      <FormLabel>Your Feedback</FormLabel>
                      <FormControl>
                        <Textarea
                          className="min-h-[160px]"
                          placeholder="Share your thoughts, suggestions, or concerns..."
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        We appreciate honest and constructive feedback.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                
                <Button1
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-3 rounded-md transition"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin mr-2 h-4 w-4" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Feedback"
                  )}
                </Button1>
              </form>
            </Form>
          </div>

        
          <p className="text-center text-gray-600 mt-8 text-sm">
            Or you can also{" "}
            <a
              href="mailto:pushpanshugujjar@gmail.com"
              className="text-blue-600 underline hover:text-blue-800"
              target="_blank"
            >
              send us an email directly
            </a>
            .
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page;
