# faasd CDK Demo

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://raw.githubusercontent.com/strongishllama/faasd-cdk-demo/main/LICENSE)

This is a demo project for the [@strongishllama/faasd-cdk](https://www.npmjs.com/package/@strongishllama/faasd-cdk) NPM package.

## Prerequisites.

The following deployment steps assume:
* You have CDK setup locally.
* You've used CDK before in the past and are relatively comfortable deploying stacks.
* Route53 hosted zone is in the same region you're deploying into.
* A VPC is in the same region you're deploying into.

## Deployment

To deploy this stack into your AWS account execute the following steps.

Clone the stack.
```
git clone git@github.com:strongishllama/faasd-cdk-demo.git
```

Install dependencies.
```
cd faasd-cdk-demo && npm install
```

Replace the placeholder properties in the ```bin/faasd-cdk.demo.ts``` file.
* **AWS_ACCOUNT**: The AWS account number you're deploying into.
* **AWS_REGION**: The AWS region you're deploying into.
* **BASE_DOMAIN_NAME**: The base domain name of the Route53 hosted zone.
* **FULL_DOMAIN_NAME**: The full domain name where faasd will be hosted. Leave undefined if you wish to use the base domain name.
* **EMAIL_ADDRESS**: The email address LetsEncrypt will use.
* **VPC_ID**: The ID of the VPC that the EC2 instance will be deployed into.
* **AMI_ID**: The ID of the AMI that the EC2 instance will use when deployed.

Deploy the stack.
```
cdk deploy faasd-cdk-demo-stack
```

Once the stack is deployed you will see 3 outputs on your terminal.
* The URL where faasd is hosted.
* Your username to login.
* The URL of the SecretsManager secret where your generated password is stored.

Fetch the password from SecretsManager and the follow the faasd URL to login. You may have to wait a few minutes for the user data script to finish running.
