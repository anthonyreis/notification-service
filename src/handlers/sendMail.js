import AWS from 'aws-sdk';

const ses = new AWS.SES({ region: 'sa-east-1' });

async function sendMail(event, context) {
  const params = {
    Source: 'emailjogos.max@gmail.com',
    Destination: {
      toAddresses: ['matheus.anthony1@gmail.com'],
    },
    Message: {
      Body: {
        Text: {
          Data: 'Hello from my notification service!',
        },
      },
      Subject: {
        Data: 'Test Mail',
      },
    }
  };

  try {
    const result = await ses.sendEmail(params).promise();

    console.log(result);

    return result;
  } catch (err) {
    console.error(err);
  }
};

export const handler = sendMail;


