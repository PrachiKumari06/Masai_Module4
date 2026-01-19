import morgan from "morgan";  //npm install morgan


module.exports = morgan((tokens, req, res) => {
  return `[${new Date().toISOString().replace("T", " ").split(".")[0]}] ${
    tokens.method(req, res)
  } ${tokens.url(req, res)}`;
});
