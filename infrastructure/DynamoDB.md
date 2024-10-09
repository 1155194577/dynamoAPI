# Initialize AWS DynamoDB

To initialize an AWS DynamoDB, we can use Terraform, a tool that allows you to define and provision infrastructure as code.

1. **Install Terraform:**
    Follow the instructions on the [Terraform website](https://www.terraform.io/downloads.html) to install Terraform on your system.

2. **Create a `.env` file:**
    Create a `.env` file in your project directory with the following content:
    ```ini
    AWS_ACCESS_KEY_ID=your-access-key-id
    AWS_SECRET_ACCESS_KEY=your-secret-access-key
    ```

3. **Load environment variables:**
    Use the `dotenv` package to load the environment variables from the `.env` file. Install `dotenv` if you haven't already. After that, load the environment variables via `source` command. 
    ```sh
    npm install dotenv
    source .env
    ```

4. **Initialize Terraform:**
    Run the following command to initialize Terraform:
    ```sh
    terraform init
    terraform plan -var "AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID" -var "AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY"
    terraform apply -var "AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID" -var "AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY"
    ```

5. **Apply the Terraform configuration:**
    Run the following command to create the DynamoDB table:
    ```sh
    terraform apply
    ```

6. **Confirm the creation:**
    Type `yes` when prompted to confirm the creation of the resources.