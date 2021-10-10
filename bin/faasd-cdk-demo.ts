#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { FaasdCdkDemoStack } from '../lib/faasd-cdk-demo-stack';

const app = new cdk.App();
new FaasdCdkDemoStack(app, 'faasd-cdk-demo-stack', {
  env: {
    account: 'AWS_ACCOUNT',
    region: 'AWS_REGION'
  },
  baseDomainName: 'BASE_DOMAIN_NAME',
  fullDomainName: 'FULL_DOMAIN_NAME',
  emailAddress: 'EMAIL_ADDRESS',
  vpcId: 'VPC_ID',
});
