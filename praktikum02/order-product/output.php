<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit'])) {
  $productTitle = htmlspecialchars($_POST['product-title']);
  $productDescription = htmlspecialchars($_POST['product-description']);
  $accountNumber = htmlspecialchars($_POST['account-number']);
  $bank = htmlspecialchars($_POST['bank']);
  $accountHolder = htmlspecialchars($_POST['account-holder']);
  $sendToPhone = htmlspecialchars($_POST['send-to-phone']);
  $sendToEmail = htmlspecialchars($_POST['send-to-email']);
  $sendToPhoneCheckbox = isset($_POST['send-to-phone-checkbox']) ? 'on' : '';
  $sendToEmailCheckbox = isset($_POST['send-to-email-checkbox']) ? 'on' : '';

  $imagePath = '';
  if (isset($_FILES['image']) && $_FILES['image']['error'] === 0) {
    $uploadDir = 'uploads/';
    if (!is_dir($uploadDir)) {
      mkdir($uploadDir, 0777, true);
    }

    $imageName = basename($_FILES['image']['name']);
    $targetFile = $uploadDir . $imageName;


    if (move_uploaded_file($_FILES['image']['tmp_name'], $targetFile)) {
      $imagePath = $targetFile;
    } else {
      $imagePath = '';
    }
  }
?>
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="assets/css/reset.css" />
    <link rel="stylesheet" href="assets/css/output.css" />
    <title>Order Product - Ouput</title>
  </head>

  <body>
    <!-- Navigation Bar -->
    <nav class="navbar">
      <ul class="nav-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">Transaction History</a></li>
        <li><a href="#">Policy</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </nav>

    <!-- Order Form -->
    <form action="" method="post">
      <div style="display: flex">
        <div class="upload-image">
          <?php if (!empty($imagePath)): ?>
            <img src="<?= $imagePath; ?>" alt="Uploaded Image" style="width:300px; height:300px; object-fit:cover;">
          <?php else: ?>
            <p>No image uploaded</p>
          <?php endif; ?>

          <div>
            <label for="image">Gambar Produk</label><br />
          </div>
        </div>

        <div class="product-detail">
          <div class="product-detail-input">
            <label for="product-title">Title Here:</label>
            <p><?= $productTitle; ?></p>
          </div>

          <div class="product-detail-input">
            <label for="product-description">Description:</label>
            <p><?= $productDescription; ?></p>
          </div>

          <div class="product-detail-input">
            <label for="pay-to">Pay to:</label>
            <p><?= $accountNumber; ?></p>
          </div>

          <div class="product-detail-input">
            <label for="bank">Bank:</label>
            <p><?= $bank; ?></p>
          </div>

          <div class="product-detail-input">
            <label for="account-holder">Account Holder:</label>
            <p><?= $accountHolder; ?></p>
          </div>

          <div class="product-detail-input">
            <label for="account-no">Account No:</label>
            <div>
              <p><?= $accountNumber; ?></p>

              <div style="display: flex; margin-top: 5px">
                <input
                  type="checkbox"
                  name="send-to-phone-checkbox"
                  id="send-to-phone-checkbox"
                  <?php if ($sendToPhoneCheckbox === 'on') echo 'checked'; ?> />
                <p>Send to Mobile Phone</p>
              </div>

              <div style="display: flex">
                <input
                  type="checkbox"
                  name="send-to-email-checkbox"
                  id="send-to-email-checkbox"
                  <?php if ($sendToEmailCheckbox === 'on') echo 'checked'; ?> />
                <p>Send to Email</p>
              </div>
            </div>
          </div>

          <div class="product-detail-input">
            <label for="send-to-phone">Send to Mobile Phone:</label>
            <p><?= $sendToPhone; ?></p>
          </div>

          <div class="product-detail-input">
            <label for="send-to-email">Send to Email:</label>
            <p><?= $sendToEmail; ?></p>
          </div>
        </div>
      </div>

      <button type="submit" class="pay-btn">Pay using QuidLink</button>
    </form>
  </body>

  </html>

<?php
} else {
  echo "<script>alert('Please fill out the form first.');</script>";
  exit();
}
?>