const AWS = require("aws-sdk");
const s3 = new AWS.S3({ profile: "personal" });

function save(name, base64String) {
  return new Promise((resolve, reject) => {
    const params = {
      Bucket: "pizza-luvrs-harps116",
      Key: `pizzas/${name}.png`,
      Body: Buffer.from(data, "base64"),
      ContentEncoding: "base64",
      ContentType: "image/png"
    };
    s3.putObject(params, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(
        `//pizza-luvrs-harps116.s3.us-east-2.amazonaws.com/${params.Key}`
      );
    });
  });
}

module.exports = {
  save
};
