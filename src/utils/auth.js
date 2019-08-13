export const authenticate = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    if (email === "test@test.pl" && password === "Password1") {
      setTimeout(
        () =>
          resolve({
            name: "John Doe",
            token: "Sample JWT Token"
          }),
        2000
      );
    } else {
      setTimeout(() => reject(new Error("Authentication failed")), 2000);
    }
  });
};
