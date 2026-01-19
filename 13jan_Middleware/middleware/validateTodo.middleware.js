const validateTodo = (req, res, next) => {   //this is custom middleware so no need of install like npm and all
  const keys = Object.keys(req.body);

  // allow only title and status
  if (
    keys.length !== 2 ||
    !keys.includes("title") ||
    !keys.includes("status")
  ) {
    return res.status(400).json({
      error: "Invalid request body. Only 'title' and 'status' are allowed",
    });
  }

  // optional type check (good practice)
  if (
    typeof req.body.title !== "string" ||
    typeof req.body.status !== "string"
  ) {
    return res.status(400).json({
      error: "'title' and 'status' must be strings",
    });
  }

  next();
};

export default validateTodo;
