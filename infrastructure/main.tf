provider "aws" {
    region     = "us-east-1"
    access_key = var.AWS_ACCESS_KEY_ID
    secret_key = var.AWS_SECRET_ACCESS_KEY
}

resource "aws_dynamodb_table" "example" {
    name           = "example-table"
    billing_mode   = "PAY_PER_REQUEST"
    hash_key       = "id"

    attribute {
        name = "id"
        type = "S"
    }

    tags = {
        Name        = "example-table"
        Environment = "dev"
    }
}

