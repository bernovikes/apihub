const isTypeOf = require('is-type-of');
module.exports = options => {
  return async function request(ctx, next) {
    const { app: { telescope: { model } }, request } = ctx;
    await next();
    if (!request.url.match(/telescope/)) {
      const params = {
        url: request.url,
        method: request.method,
        request_header: request.header,
        response_body: isTypeOf.object(ctx.response.body) ? ctx.response.body : JSON.stringify(ctx.response.body),
        ip: ctx.request.ip
      };
      const store = await model.telescopeRequest.create(params);
    }
  };
};
