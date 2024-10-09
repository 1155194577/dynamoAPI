To obtain your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY, follow these steps:

# Step-by-Step Guide

## Sign in to the AWS Management Console
Go to the AWS Management Console and sign in with your AWS account.

## Navigate to IAM (Identity and Access Management)
In the AWS Management Console, search for "IAM" and select it.

## Create a New IAM User

1. Click on "Users" in the left sidebar.
2. Click the "Add user" button.
3. Enter a username (e.g., `terraform-user`).
4. Select the "Programmatic access" checkbox to create an access key for CLI, SDK, and API access.
5. Click "Next: Permissions".

## Set Permissions

You can attach existing policies directly or add the user to a group with the necessary permissions. For simplicity, you can attach the `AdministratorAccess` policy, but for production, you should follow the principle of least privilege.

1. Click "Next: Tags" (optional) and then "Next: Review".

## Create User

1. Review the settings and click "Create user".
2. You will see the `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` on the next screen. Make sure to download the `.csv` file or copy the keys to a secure location.
