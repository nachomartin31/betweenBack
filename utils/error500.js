const serverError = (res) => res.status(500).json({ message: "Something went wrong" });

module.exports = serverError;
