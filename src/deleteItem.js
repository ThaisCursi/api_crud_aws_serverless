"use strict";

const AWS = require("aws-sdk")

const deleteItem = async (event) => {

  const {id} = event.pathParameters

  const dynamodb = new AWS.DynamoDB.DocumentClient();

  await dynamodb.delete({
    TableName: "ItemTableNew",
    Key: {id}
  }).promise()

  return {
    statusCode: 200,
    body: JSON.stringify(
      { msg: `Item deletetado`}
    ),
  };
};


module.exports = {
    handler:deleteItem
}


