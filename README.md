# Welcome to this simple CDK TypeScript project!

![image](https://github.com/borelkoumo/apigateway-and-lambda/blob/main/diagram.png)

## Description
A Lambda function with an API Gateway endpoint in front of it. When users hit URL endpoint, they receive a greeting from our function.

- API Gateway expose a public HTTP endpoint that anyone on the internet can hit with an HTTP client such as curl or a web browser.
- The lambda function is mounted to the root of the API using Lambda proxy integration. This means that any request to any URL path will be proxied directly to our Lambda function, and the response from the function will be returned back to the user.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
