#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { FaasdCdkDemoStack } from '../lib/faasd-cdk-demo-stack';

const app = new cdk.App();
new FaasdCdkDemoStack(app, 'faasd-cdk-demo-stack', {

});
