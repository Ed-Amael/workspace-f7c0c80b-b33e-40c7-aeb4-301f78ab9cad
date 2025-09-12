"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Build Netlify form submission payload
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        body: data,
      });

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Support</h1>

      <form
        name="supportForm"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Hidden field required by Netlify */}
        <input type="hidden" name="form-name" value="supportForm" />

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Name *
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="bg-input border-border text-foreground"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Email *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="bg-input border-border text-foreground"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Subject *
          </label>
          <Input
            id="subject"
            name="subject"
            type="text"
            required
            value={formData.subject}
            onChange={handleInputChange}
            className="bg-input border-border text-foreground"
            placeholder="How can we help you?"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Message *
          </label>
          <Textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleInputChange}
            rows={5}
            className="bg-input border-border text-foreground"
            placeholder="Please provide detailed information about your inquiry..."
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </>
          )}
        </Button>

        {submitStatus === "success" && (
          <div className="flex items-center space-x-2 text-green-400 bg-green-400/10 p-3 rounded-lg">
            <CheckCircle className="w-5 h-5" />
            <span>
              Message sent successfully! We&apos;ll get back to you soon.
            </span>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="flex items-center space-x-2 text-orange-400 bg-orange-400/10 p-3 rounded-lg">
            <AlertCircle className="w-5 h-5" />
            <span>
              There was an error sending your message. Please try again.
            </span>
          </div>
        )}
      </form>
    </main>
  );
}
