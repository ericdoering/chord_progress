require("dotenv").config();

// Setting the name of the SECRET_KEY to "chord-progress:"
export const SECRET_KEY = process.env.SECRET_KEY || "chord-progress";
// Setting the BCRYPT_WORK_FACTOR to 12 for hashing the user's password
export const BCRYPT_WORK_FACTOR = 12


