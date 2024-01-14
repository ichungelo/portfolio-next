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
        title: "Parastar App - Merchant Management System (Backend)",
        date: "Aug 2022 - Aug 2023",
        description:
            "Merchant Management System for business and sales that handle distribution, employee and courier management, and payment for parastar as the biggest distributor of mobile sim card and mobile credits.",
        details: [
            "Build and maintain Golang backend serverless applications using AWS, utilizing Lambda, DynamoDB for database, S3 Bucket, and Opensearch Stack (ElasticSearch) for search engines.",
            "Using Amazon Cognito as Identity Provider.",
        ],
        images: ["/portfolio/parastar_1.png", "/portfolio/parastar_2.png", "/portfolio/parastar_3.png"],
    },
    {
        title: "Content Delivery - Content Provider for Telecom VAS (Backend)",
        date: "Aug 2022 - Aug 2023",
        description:
            "Subscriber management to send scheduled messages to end users via VAS subscriber with millions of subscribers.",
        details: ["Maintain Golang backend serverless application using AWS, utilizing Lambda, SQS for Event Handling and queueing, DynamoDB for database.", "Integrate with VAS Telecom Provider system."],
        images: null,
    },
    {
        title: "Telkomsel Maxstream Quiz - Quiz Website (Backend)",
        date: "Mar 2023 - Aug 2023",
        description:
            "Customer Loyalty Program that collects points from quizzes that can be redeemed as credits.",
        details: ["Create and maintain Golang backend serverless applications using AWS, utilizing Lambda, using postgres via AWS RDS as Database.", "Create Authorization and authentication for users.", "Using GORM as ORM.", "Connect with 3rd Party API to provide redeem points into phone credits."],
        images: ["/portfolio/quiz_1.png","/portfolio/quiz_2.png","/portfolio/quiz_3.png"],
    },
    {
        title: "Smartfren GameFren - Mini Games Web App (Backend)",
        date: "Jun 2023 - Dec 2023",
        description:
            "Games portal that users can access  with subscription to the VAS service.",
        details: ["Create and maintain Golang backend serverless applications using AWS, utilizing Lambda, using postgres via AWS RDS as Database.", "Create Authorization and authentication for users.", "Using GORM as ORM.", "Connect with VAS service."],
        images: ["/portfolio/gamefren_1.png","/portfolio/gamefren_2.png","/portfolio/gamefren_3.png"],
    },
    {
        title: "AMI ERP - Internal ERP Web App (Backend)",
        date: "Jun 2023 - Jan 2024",
        description:
            "Internal ERP Application combined with HRM which contain manager of employee, reimbursement, leave, timesheet, project timeline and report.",
        details: ["Create ERD, flow diagram, build and maintain Golang backend serverless applications using AWS, utilizing Lambda, using postgres via AWS RDS as Database.", "Create Authorization and authentication for users using Amazon Cognito Identity Provider.", "Using GORM as ORM."],
        images: ["/portfolio/erp_1.png","/portfolio/erp_2.png","/portfolio/erp_3.png"],
    },
    {
        title: "Axis - Muslim Pro Redemption Page - Redeem Web (Backend)",
        date: "Aug 2023 - Now",
        description:
            "Redemption page for Axis muslim pro bundling package.",
        details: ["Create and maintain Golang backend serverless applications using AWS, utilizing Lambda, using postgres via AWS RDS as Database.", "Using GORM as ORM."],
        images: ["/portfolio/muslimpro_1.png","/portfolio/muslimpro_2.png", "/portfolio/muslimpro_3.png"],
    },
    {
        title: "EMI SITE - EV (electric vehicle)  website (Backend)",
        date: "April 2022- June 2022",
        description:
            "Create backend website using strapi (nest js) headless cms",
        details: null,
        images: ["/portfolio/emi_site_1.png","/portfolio/emi_site_2.png","/portfolio/emi_site_3.png"],
    },
    {
        title: "EMI Commerce -  EV (electric vehicle) commerce service (Backend)",
        date: "April 2022- June 2022",
        description:
            "Maintaining commercial service, payment, and main using Nest JS framework",
        details: null,
        images: ["/portfolio/emi_commerce_1.png","/portfolio/emi_commerce_2.png","/portfolio/emi_commerce_3.png"],
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