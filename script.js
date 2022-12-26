// Specify the URL of the website you want to scrape
const url = "https://simsimi.com";

// Send an HTTP request to the website and retrieve the HTML content
fetch(url)
  .then(response => response.text())
  .then(html => {
    // Parse the HTML content using the DOMParser
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Select all of the paragraphs in the HTML
    const paragraphs = doc.querySelectorAll("p");

    // Iterate over the paragraphs
    for (const p of paragraphs) {
      // Get the text content of the current paragraph
      const text = p.textContent;

      // Use the includes function to search for the word "message" in the text (case-insensitive)
      if (text.toLowerCase().includes("message")) {
        // If the word is found, log the message to the console
        console.log(text);
      }
    }
  console.log("hen");
  });

