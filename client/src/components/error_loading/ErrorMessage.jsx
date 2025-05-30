const ErrorMessage = ({ error }) =>
  error ? <p className="text-sm text-red-500">{error.message}</p> : null;

export default ErrorMessage;
