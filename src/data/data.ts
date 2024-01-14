type Portfolio = {
    title: string;
    images: string[] | null;
    date: string;
    description: string;
    details: string[] | null;
};

type Skill = {
    no: number;
    name: string;
    image: string;
};

const portfolios: Portfolio[] = [
    {
        title: "Parastar App",
        date: "Aug 2022 - Aug 2023",
        description:
            "Merchant Management System for business and sales that handle distribution, employee and courier management, and payment for parastar as the biggest distributor of mobile sim card and mobile credits.",
        details: [
            "Build and maintain Golang backend serverless applications using AWS, utilizing Lambda, DynamoDB for database, S3 Bucket, and Opensearch Stack (ElasticSearch) for search engines.",
            "Using Amazon Cognito as Identity Provider.",
        ],
        images: ["/portfolio/parastar_1.png", "/portfolio/parastar_2.png"],
    },
    {
        title: "Content Delivery",
        date: "Aug 2022 - Aug 2023",
        description:
            "Merchant Management System for business and sales that handle distribution, employee and courier management, and payment for parastar as the biggest distributor of mobile sim card and mobile credits.",
        details: null,
        images: null,
    },
];

const skills: Skill[] = [
    { no: 1, image: "/skill/android_studio.svg", name: "Android Studio" },
    { no: 2, image: "/skill/bash.svg", name: "bash" },
    { no: 3, image: "/skill/css.svg", name: "CSS" },
    { no: 4, image: "/skill/docker.svg", name: "Docker" },
    { no: 5, image: "/skill/firebase.svg", name: "Firebase" },
    { no: 6, image: "/skill/git.svg", name: "GIT" },
    { no: 7, image: "/skill/go.svg", name: "Go" },
    { no: 8, image: "/skill/graphql.svg", name: "GraphQL" },
    { no: 9, image: "/skill/html5.svg", name: "HTML 5" },
    { no: 10, image: "/skill/javascript.svg", name: "JavaScript" },
    { no: 11, image: "/skill/kotlin.svg", name: "Kotlin" },
    { no: 12, image: "/skill/linux.svg", name: "Linux" },
    { no: 13, image: "/skill/mongodb.svg", name: "MongoDB" },
    { no: 14, image: "/skill/mysql.svg", name: "MySQL" },
    { no: 15, image: "/skill/node.svg", name: "NodeJS" },
    { no: 16, image: "/skill/postgres.svg", name: "PostgreSQL" },
    { no: 17, image: "/skill/react.svg", name: "React" },
    { no: 18, image: "/skill/redis.svg", name: "Redis" },
    { no: 19, image: "/skill/typescript.svg", name: "TypeScript" },
    { no: 20, image: "/skill/aws.svg", name: "AWS" },
    {
        no: 21,
        image: "/skill/amazon_api_gateway.svg",
        name: "Amazon Api Gateway",
    },
    { no: 22, image: "/skill/amazon_cognito.svg", name: "Amazon Cognito" },
    { no: 23, image: "/skill/amazon_dynamodb.svg", name: "Amazon DynamoDB" },
    { no: 24, image: "/skill/amazon_ec2.svg", name: "Amazon EC2" },
    {
        no: 25,
        image: "/skill/amazon_opensearch.svg",
        name: "Amazon Opensearch",
    },
    { no: 26, image: "/skill/amazon_s3.svg", name: "Amazon S3" },
    { no: 27, image: "/skill/amazon_ses.svg", name: "Amazon SES" },
    { no: 28, image: "/skill/amazon_sns.svg", name: "Amazon SNS" },
    { no: 29, image: "/skill/amazon_sqs.svg", name: "Amazon SQS" },
    { no: 30, image: "/skill/aws_lambda.svg", name: "AWS Lambda" },
];

export { portfolios, skills, type Portfolio, type Skill }