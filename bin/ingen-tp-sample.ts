#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { IngenTpSampleStack } from '../lib/ingen-tp-sample-stack';

const app = new cdk.App();
new IngenTpSampleStack(app, 'IngenTpSampleStack', {
});