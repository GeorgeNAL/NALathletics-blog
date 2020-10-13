exports.handler = async (event, context) => {
  const redirectUrl = `https://nalathletics.com/blog/`;
  console.log("redirecting", event);
  return {
    statusCode: 302,
    headers: {
      Location: redirectUrl,
      "Cache-Control": "no-cache"
    },
    body: JSON.stringify({})
  };
};
