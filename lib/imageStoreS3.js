const AWS = require("aws-sdk");
var credentials = new AWS.SharedIniFileCredentials({ profile: "personal-sdk" });
AWS.config.credentials = credentials;
const s3 = new AWS.S3();

function save(name, data) {
  return new Promise((resolve, reject) => {
    const params = {
      Bucket: "pizza-luvrs-harps116",
      Key: `pizzas/${name}.png`,
      Body: Buffer.from(data, "base64"),
      ContentEncoding: "base64",
      ContentType: "image/png"
    };
    s3.putObject(params, (err, _) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(
          `//pizza-luvrs-harps116.s3.us-east-2.amazonaws.com/${params.Key}`
        );
      }
    });
  });
}

module.exports = {
  save
};
