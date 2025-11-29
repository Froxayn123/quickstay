const color = (status) => {
  if (status >= 500) return "\x1b[31m"; // red
  if (status >= 400) return "\x1b[33m"; // yellow
  if (status >= 300) return "\x1b[36m"; // cyan
  return "\x1b[32m"; // green
};

export const logger = (req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    const status = res.statusCode;

    console.log(
      `${new Date().toISOString()} | ${req.method} ${req.originalUrl} | ${
        color(status) + status + "\x1b[0m"
      } | ${duration}ms`
    );
  });

  next();
};
