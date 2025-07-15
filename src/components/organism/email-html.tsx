export function generateLoginEmailHTML(url: string, host: string) {
  const escapedHost = host.replace(/\./g, "&#8203;.");

  return `
    <body style="background: #f9f9f9; margin: 0; padding: 20px; font-family: Arial, sans-serif;">
      <table width="100%" style="max-width: 600px; margin: auto; background: #ffffff; padding: 30px; border-radius: 12px; box-shadow: 0 0 12px rgba(0,0,0,0.05);">
        <tr>
          <td align="center">
            <img src="${process.env.AUTH_URL}/logo.png" alt="Lisync.click Logo" width="60" style="margin-bottom: 16px;" />
            <h1 style="color: #333; font-size: 24px; margin: 0 0 10px;">Sign in to <strong>Lisync.click</strong></h1>
            <p style="font-size: 15px; color: #666; margin-bottom: 20px;">
              You requested to sign in to your account on <strong>Lisync.click</strong>.
              Please click the button below to securely access your dashboard using your unique, one-time magic link.
            </p>
            <a href="${url}" style="display: inline-block; padding: 12px 24px; background-color: #4f46e5; color: #fff; text-decoration: none; border-radius: 6px; font-size: 16px; font-weight: 600;">
              Sign in Now
            </a>
            <p style="color: #999; font-size: 14px; margin-top: 24px;">
              This link is valid for a limited time only and can be used once. For your security, please do not share this link with anyone.
            </p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 32px 0;" />
            <p style="color: #999; font-size: 13px;">
              If you did not request to sign in to your account on <strong>${escapedHost}</strong>, please ignore this email.
              <br /><br />
              <strong>⚠️ Important security notice:</strong> Clicking this link will grant access to your account.
              If you did not initiate this request, do not click the button above or share this message.
              To help protect your account, report any suspicious activity to our support team immediately.
            </p>
          </td>
        </tr>
      </table>
    </body>
  `;
}
