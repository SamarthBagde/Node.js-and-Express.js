const sendError = (err, res) => {
  //sending error msg only if error is operational i.e related to user input
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    console.error("Error : ", err);
    //sending generic error if it is not operational error
    res.status(500).json({
      status: "error",
      message: "Something went wrong",
    });
  }
};

export const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  let error = err;

  sendError(error, res);
};
