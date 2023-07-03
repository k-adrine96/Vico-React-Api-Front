import { Space, Rate, Input, Button } from 'antd';
import {raitingParams} from '../../helper';

export default function StepOne({ props, setValues }) {
  const {
    rateValue,
    textValue,
    vico,
    project,
  } = props || {};
  const { setTextValue, setRateValue, setStep } = setValues;

  const onTextChange = ({target}) => setTextValue(target.value)
  const handleNext = () => setStep(2);

  return (
    <>
      <p>Please review the work done by {vico?.name} for the project "{project?.title}"</p>
      <h3>Overall satisfaction</h3>
      <Space>
        <Rate tooltips={raitingParams} onChange={setRateValue} value={rateValue} />
      </Space>
      <h3>{rateValue || 0}/5</h3>
      <p>Please add a short review</p>
      <Input.TextArea
        maxLength={1000}
        rows={4}
        showCount
        placeholder={`Write one or two sentences about your experience working with ${vico?.name}`}
        onChange={onTextChange}
        value={textValue}
      />
      <Button key="submit" onClick={handleNext} style={{marginTop: '20px'}} type="primary" block>
        Next
      </Button> 
    </>
  );
}
