import { Alert } from "react-bootstrap";

const AlertMessage: React.FC<{
  alertMessageType: string;
  onClose: (event: any) => void;
}> = (props) => {
  return (
    <Alert variant={props.alertMessageType} dismissible>
      {props.children}
    </Alert>
  );
};

export default AlertMessage;
