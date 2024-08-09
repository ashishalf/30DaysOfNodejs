// Insert Data using MongoDB

const { connectToDB } = require("./dbConnection");

async function main() {
  try {
    const db = await connectToDB();
    const collection = db.collection("users");
  
    const data = [
      {
        firstName: "Ojasvi",
        lastName: "Pundir",
        email: "oj@gmail.com",
      },
      {
          firstName: "Khushbu",
          lastName: "Kamboj",
          email: "kk@gmail.com",
        }
    ];
  
    const insertData = await collection.insertMany(data)
    console.log(`${insertData} Document Inserted`)
  } catch (error) {
    console.error(error)
  }

}

main()
