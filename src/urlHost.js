export const URL_HOST =
    process.env.NODE_ENV === "production"
        ? "https://cors-anywhere.herokuapp.com/http://aws-practice-backend-dev.us-west-2.elasticbeanstalk.com"
        : "HTTP://127.0.0.1:8000";
