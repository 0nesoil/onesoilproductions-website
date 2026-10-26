// ONE SOIL PRODUCTIONS — site settings. Edit the values between the quotes, save, and upload.
// Leave a value empty ("") and that button shows "Soon" and does nothing.
window.SITE = {
  // Book One retailer pages (paste the full https://... link once each page is live)
  links: {
    amazon: "",
    apple: "",
    google: ""
  },
  // Newsletter. Use ONE of these two options:
  newsletter: {
    // Option A: a form address from your email service (Kit: https://app.kit.com/forms/XXXX/subscriptions)
    action: "https://app.kit.com/forms/10085774/subscriptions",
    emailField: "email_address",   // Kit uses email_address; MailerLite/most others use email
    // Option B: a hosted sign-up page link (works with any service). Used if action is empty.
    link: ""
  }
};
