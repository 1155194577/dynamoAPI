import {
  DynamoDBClient,
  PutItemCommand,
  PutItemCommandInput,
} from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";

// Initialize DynamoDB client
const client = new DynamoDBClient({ region: "us-east-1" });

// Define TypeScript interface to model your data
interface Document {
  id: string;
  title: string;
  content: string;
  test : string;
}

// Function to post data to DynamoDB
async function postData<Tdocument>(
  tableName: string,
  document: Tdocument
): Promise<boolean> {
  // Convert JavaScript object to DynamoDB record

  try {
    const marshalledDocument = marshall(document);

    const params: PutItemCommandInput = {
      TableName: tableName,
      Item: marshalledDocument,
    };

    const command = new PutItemCommand(params);
    const result = await client.send(command);
    console.log(result);
    if (result.$metadata.httpStatusCode !== 200) {
      throw new Error("Failed to post data to DynamoDB");
    }
    return true;
  } catch (err) {
    console.error("Error", err);
    return false;
  }
}

// Example usage
const newDocument: Document = {
  id: "1",
  title: "Sample Title",
  content: "Sample content",
  test : 'val',
};

postData<Document>("example-table",newDocument).catch((err) => {
  console.error("Error in example usage:", err);
});
