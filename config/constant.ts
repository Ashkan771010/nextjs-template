export const ApiConfig = {
  baseUrl:
    process.env.NODE_ENV === "production"
      ? "https://loanapi.setareyek.ir"
      : "https://loanapi.setareyek.ir",
  appName: process.env.REACT_APP_APP_NAME || "وام سیم کارت",
  prefix: "",
  publicPrefix: "",
};
