//Update using MongoDB

const { connectToDB } = require("./dbConnection");

async function main() {
  try {
    const db = await connectToDB();
    const collection = db.collection("users");
    const updatedData = await collection.updateOne(
      { firstName: "Khushbu" },
      { $set: { email: "khushbu@gmail.com" } }
    );
    console.log(`${updatedData} Document Updated`);
  } catch (error) {
    console.error(error);
  }
}

main();
