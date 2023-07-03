import { Space, Rate, Input, Button } from 'antd';
import {raitingParams} from '../../helper';

export default function StepTwo({ props, setValues }) {
  const {
    rateValue,
    textValue,
    vico,
    project,
  } = props || {};
  const { setRateValue, setStep } = setValues;

  const handleNext = () => setStep(2);

  return (
    <>
      <p>Please review the work done by {vico?.name} for the project "{project?.title}"</p>
      <h3>Additional raitings</h3>
      <h4>Communication</h4>
      <p>How responsive was the Vico through the duration of the project?</p>
      <Rate tooltips={raitingParams} onChange={setRateValue} value={rateValue} />
      <h4>Quality of work</h4>
      <p>How satisfied are you with the deliverables provided by the Vico?</p>
      <Rate tooltips={raitingParams} onChange={setRateValue} value={rateValue} />
      <h4>Value of money</h4>
      <p>How satisfied are you with the pricing of this project compared to the work delivered?</p>
      <Rate tooltips={raitingParams} onChange={setRateValue} value={rateValue} />
      <Button key="submit" onClick={handleNext} style={{marginTop: '20px'}} type="primary" block>
        Next
      </Button> 
    </>
  );
}
