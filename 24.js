//Delete using MongoDB
const { connectToDB } = require("./dbConnection");

async function main() {
  try {
    const db = await connectToDB();
    const collection = db.collection("users");
    const deletedData = await collection.deleteOne({ firstName: "Ojasvi" });
    console.log(`${deletedData} Document Deleted`);
  } catch (error) {
    console.error(error);
  }
}
main();