export function generateLoginEmailHTML(url: string, host: string) {
  const escapedHost = host.replace(/\./g, "&#8203;.");

  return `
    <body style="background: #f9f9f9; margin: 0; padding: 20px; font-family: Arial, sans-serif;">
      <table width="100%" style="max-width: 600px; margin: auto; background: #ffffff; padding: 30px; border-radius: 12px; box-shadow: 0 0 12px rgba(0,0,0,0.05);">
        <tr>
          <td align="center">
            <img src="https://${host}/logo.png" alt="Zync.click Logo" width="60" style="margin-bottom: 16px;" />
            <h1 style="color: #333; font-size: 24px; margin: 0 0 10px;">Login ke <strong>Zync.click</strong></h1>
            <p style="font-size: 15px; color: #666; margin-bottom: 20px;">Klik tombol di bawah ini untuk mengakses akunmu.</p>
            <a href="${url}" style="display: inline-block; padding: 12px 24px; background-color: #4f46e5; color: #fff; text-decoration: none; border-radius: 6px; font-size: 16px; font-weight: 600;">
              Login Sekarang
            </a>
            <p style="color: #999; font-size: 14px; margin-top: 24px;">Link ini hanya berlaku selama beberapa menit dan hanya bisa digunakan sekali.</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 32px 0;" />
            <p style="color: #999; font-size: 13px;">
              Jika kamu tidak meminta login ke akun <strong>${escapedHost}</strong>, abaikan saja email ini. Tidak ada tindakan yang akan dilakukan.
            </p>
          </td>
        </tr>
      </table>
    </body>
  `;
}
