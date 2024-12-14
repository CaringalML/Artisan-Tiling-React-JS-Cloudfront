variable "aws_region" {
  description = "AWS region"
  default     = "ap-southeast-2"
}

variable "s3_bucket_name" {
  description = "Name of the S3 bucket"
  default     = "artisantilingbucket"
}

variable "environment" {
  description = "Environment name"
  default     = "production"
}

variable "domain_name" {
  description = "Full domain name"
  default     = "artisantiling.co.nz"
}

variable "subdomain" {
  description = "Subdomain prefix"
  default     = "www"
}

variable "waf_name" {
  description = "Name for the WAF ACL"
  default     = "artisan-tiling-waf"
}

variable "oac_name" {
  description = "Name for the CloudFront Origin Access Control"
  default     = "artisan-tiling-oac"
}

variable "function_name" {
  description = "Name for the CloudFront Function"
  default     = "artisan-tiling-function"
}