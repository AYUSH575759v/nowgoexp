async function submitDelivery(event) {
  event.preventDefault(); // Prevent default form submit

  const form = event.target;
  const formData = new FormData(form);

  // Convert form data to plain object
  const payload = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("http://localhost:3000/submit-address", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      // Optional: show a success message before redirecting
      alert("Booking confirmed!");
      window.location.href = "payment.html";
    } else {
      const errorData = await response.json();
      alert("Booking failed: " + (errorData.error || "Please try again."));
    }
  } catch (err) {
    console.error("Error while submitting form:", err);
    alert("Something went wrong. Please check your connection and try again.");
  }
}
