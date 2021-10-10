import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as faasd from '@strongishllama/faasd-cdk';

export interface FaasdCdkDemoStackProps extends cdk.StackProps {
  readonly baseDomainName: string;
  readonly fullDomainName?: string;
  readonly emailAddress: string;
  readonly vpcId: string;
}

export class FaasdCdkDemoStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: FaasdCdkDemoStackProps) {
    super(scope, id, props);

    if (props.env === undefined || props.env.account === undefined || props.env.region === undefined) {
      throw new Error('FaasdCdkDemoStackProps.env property must be fully defined');
    }

    new faasd.Instance(this, 'faasd-instance', {
      account: props.env.account,
      region: props.env.region,
      baseDomainName: props.baseDomainName,
      fullDomainName: props.fullDomainName,
      emailAddress: props.emailAddress,
      vpc: ec2.Vpc.fromLookup(this, 'vpc', {
        vpcId: props.vpcId
      })
    });
  }
}
