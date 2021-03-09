import * as React from "react";
import { useState, useEffect } from "react";
import { Alert } from "reactstrap";

export interface AdviceSlipProps {
  url: string;
}

const AdviceSlip: React.SFC<AdviceSlipProps> = (props) => {
  const [advice, setAdvice] = useState();
  function fetchTheAdvice() {
    fetch(props.url)
      .then((res) => res.json())
      .then((json) => {
        setAdvice(json.slip.advice);
      });
  }
  useEffect(() => {
    fetchTheAdvice();
  }, []);
  return (
    <div>
      <Alert>{advice}</Alert>
    </div>
  );
};

export default AdviceSlip;
