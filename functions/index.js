const functions = require("firebase-functions");

// Function to handle the booking process
async function bookMeetingRoom(request, response) {
  let context;

  try {
    // Query 1: Initial request
    const query1 =
      "Reserve a meeting room in Toronto office, there will be 5 of us";
    const result1 = await processQuery(query1, context);
    context = result1.context;
    console.log("Agent Response 1:", result1.response);

    // Query 2: Specify time
    const query2 = "Next monday at 3pm for 1 hour, please";
    const result2 = await processQuery(query2, context);
    context = result2.context;
    console.log("Agent Response 2:", result2.response);

    // Query 3: Select room
    const query3 = "B";
    const result3 = await processQuery(query3, context);
    console.log("Agent Response 3:", result3.response);

    // Final confirmation
    console.log("Booking process completed");

    // Send a success response
    response.status(200).send("Booking process completed");
  } catch (error) {
    console.error("Error during booking process:", error);
    response.status(500).send("Internal Server Error");
  }
}

exports.getColorOfDay = functions.https.onRequest(bookMeetingRoom);
