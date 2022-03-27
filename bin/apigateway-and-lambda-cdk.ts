#!/usr/bin/env node
import * as cdk from "@aws-cdk/core";
import { APIGatewayAndLambdaStack } from "../lib/apigateway-and-lambda-stack";

const app = new cdk.App();
new APIGatewayAndLambdaStack(app, "APIGatewayAndLambdaStack");
