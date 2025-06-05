import { Alert } from "@mui/material";

interface errorProps {
    error: string;
}

const ErrorMessage = ({error}:errorProps) => {
  return <Alert severity="error">{error}</Alert>;
};

export default ErrorMessage;
