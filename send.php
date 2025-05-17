<?php
// Konfigurasi email tujuan
$to = "admin@faisaljuniardi.web.id";

// Ambil data dari form
$name = htmlspecialchars($_POST['name'] ?? 'Anonymous');
$email = htmlspecialchars($_POST['email'] ?? '');
$message = htmlspecialchars($_POST['message'] ?? '');

// Validasi sederhana
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Email tidak valid.";
    exit;
}

// Subjek email
$subject = "Pesan dari Form Kontak Website";

// Format isi email
$body = "Nama: $name\nEmail: $email\n\nPesan:\n$message";

// Header email
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Kirim email
if (mail($to, $subject, $body, $headers)) {
    echo "Pesan berhasil dikirim. Terima kasih!";
} else {
    echo "Gagal mengirim pesan. Silakan coba lagi nanti.";
}
?>
