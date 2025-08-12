import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Add state for tracking submission status
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', or 'error'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState(0);
  const [submissionCount, setSubmissionCount] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);

  // Rate limiting constants
  const RATE_LIMIT_WINDOW = 60000; // 1 minute
  const MAX_SUBMISSIONS = 3; // max 3 submissions per minute
  const COOLDOWN_PERIOD = 300000; // 5 minutes cooldown after blocking

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if user is currently blocked
    if (isBlocked) {
      setSubmitStatus("blocked");
      return;
    }

    // Rate limiting logic
    const now = Date.now();
    const timeSinceLastSubmission = now - lastSubmissionTime;

    // Reset count if window has passed
    if (timeSinceLastSubmission > RATE_LIMIT_WINDOW) {
      setSubmissionCount(1);
    } else {
      // Check if user has exceeded rate limit
      if (submissionCount >= MAX_SUBMISSIONS) {
        setIsBlocked(true);
        setSubmitStatus("rate_limited");
        // Unblock after cooldown period
        setTimeout(() => {
          setIsBlocked(false);
          setSubmissionCount(0);
          setSubmitStatus(null);
        }, COOLDOWN_PERIOD);
        return;
      }
      setSubmissionCount((prev) => prev + 1);
    }

    setLastSubmissionTime(now);
    setIsSubmitting(true);
    setSubmitStatus(null); // Clear any previous status

    // Basic validation
    const formData = new FormData(form.current);
    const name = formData.get("user_name").trim();
    const email = formData.get("user_email").trim();
    const message = formData.get("message").trim();

    // Check for minimum lengths and suspicious content
    if (name.length < 2 || message.length < 10) {
      setSubmitStatus("validation_error");
      setIsSubmitting(false);
      return;
    }

    // Simple spam detection (you can expand this)
    const spamKeywords = [
      "viagra",
      "casino",
      "lottery",
      "winner",
      "congratulations",
      "click here",
      "free money",
    ];
    const messageText = `${name} ${message}`.toLowerCase();
    const hasSpamContent = spamKeywords.some((keyword) =>
      messageText.includes(keyword)
    );

    if (hasSpamContent) {
      setSubmitStatus("spam_detected");
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm("service_6sugbgh", "template_7dyl46m", form.current, {
        publicKey: "EcTFgoSqKlS61ctOu",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSubmitStatus("success");
          form.current.reset(); // Clear the form
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSubmitStatus("error");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section
      id="contact"
      className="bg-[#4AB050] text-white py-16 px-4 w-full md:w-[60%] md:ml-[20%] md:rounded-t-2xl"
    >
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Top - Info */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-200">
            Have a question, suggestion, or just want to say hello? Fill out the
            form, and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Bottom - Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white rounded-lg shadow-lg p-8 space-y-6 text-black"
        >
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="name"
              placeholder="Your Name"
              minLength="2"
              maxLength="50"
              className="w-full px-4 py-3 rounded-md bg-gray-200 text-black border border-gray-400 focus:ring-2 focus:ring-[#4AB050] outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-md bg-gray-200 text-black border border-gray-400 focus:ring-2 focus:ring-[#4AB050] outline-none"
              required
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-2 text-black"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message..."
              rows="4"
              minLength="10"
              maxLength="1000"
              className="w-full px-4 py-3 rounded-md bg-gray-200 text-black border border-gray-400 focus:ring-2 focus:ring-[#4AB050] outline-none resize-none"
              required
            />
          </div>

          {/* Status Messages */}
          <p
            className={`text-[#4AB050] font-medium ${
              submitStatus === "success" ? "block" : "hidden"
            }`}
          >
            ✔️ Your message was sent successfully.
          </p>
          <p
            className={`text-[#F03A17] font-medium ${
              submitStatus === "error" ? "block" : "hidden"
            }`}
          >
            ❌ Error occurred. Could not send the message.
          </p>
          <p
            className={`text-[#F03A17] font-medium ${
              submitStatus === "rate_limited" ? "block" : "hidden"
            }`}
          >
            ⚠️ Too many submissions. Please wait 5 minutes before trying again.
          </p>
          <p
            className={`text-[#F03A17] font-medium ${
              submitStatus === "blocked" ? "block" : "hidden"
            }`}
          >
            🚫 You are temporarily blocked. Please wait before submitting again.
          </p>
          <p
            className={`text-[#F03A17] font-medium ${
              submitStatus === "validation_error" ? "block" : "hidden"
            }`}
          >
            ❌ Please provide a valid name (2+ characters) and message (10+
            characters).
          </p>
          <p
            className={`text-[#F03A17] font-medium ${
              submitStatus === "spam_detected" ? "block" : "hidden"
            }`}
          >
            🚫 Your message appears to contain spam content. Please revise and
            try again.
          </p>

          <button
            type="submit"
            disabled={isSubmitting || isBlocked}
            className="w-full bg-[#4AB050] hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 px-6 rounded-md font-semibold transition cursor-pointer"
          >
            {isSubmitting ? "Sending..." : isBlocked ? "Blocked" : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}
