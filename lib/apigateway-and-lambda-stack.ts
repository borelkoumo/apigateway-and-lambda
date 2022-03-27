import { App, Stack, StackProps } from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as apigw from "@aws-cdk/aws-apigateway";

export class APIGatewayAndLambdaStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    // Create Lambda ressource
    const helloLambda = new lambda.Function(this, "HelloWorldLambda", {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset("lambda"),
      handler: "helloWorld.handler",
    });

    //API Gateway REST API resource backed by our "helloLambda" function.
    new apigw.LambdaRestApi(this, "APIGatewayEndpoint", {
      handler: helloLambda,
    });
  }
}
