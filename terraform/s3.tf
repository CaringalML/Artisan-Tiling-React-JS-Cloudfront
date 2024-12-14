# This file handles all S3-related configurations including bucket creation,
# CORS settings, and folder structure

resource "aws_s3_bucket" "storage_bucket" {
  bucket        = var.s3_bucket_name
  force_destroy = true
}

resource "aws_s3_bucket_server_side_encryption_configuration" "storage_bucket" {
  bucket = aws_s3_bucket.storage_bucket.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_s3_bucket_public_access_block" "storage_bucket" {
  bucket = aws_s3_bucket.storage_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_cors_configuration" "s3_cors" {
  bucket = aws_s3_bucket.storage_bucket.id

  cors_rule {
    allowed_headers = [
      "*"
    ]
    allowed_methods = [
      "GET",
      "HEAD",
      "PUT",
      "POST",
      "DELETE"
    ]
    allowed_origins = ["*"]
    expose_headers = [
      "ETag",
      "x-amz-server-side-encryption",
      "x-amz-request-id",
      "x-amz-id-2"
    ]
    max_age_seconds = 3000
  }
}

# Create default folder (prefix) in S3 for React build
resource "aws_s3_object" "react_build" {
  bucket  = aws_s3_bucket.storage_bucket.id
  key     = "react-build/"
  content = ""
}