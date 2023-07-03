import { Button, Modal, Space } from 'antd';
import { useState } from 'react';
import StepOne from './stepOne';
import StepTwo from './stepTwo';

export default function FeedbackBox ({currentProject}) {
  const {raiting, project, vico} = currentProject || {};

  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);

  const showModal = () => setOpen(true);
  const handleCancel = () => setOpen(false);

  const handleBack = () => {
    setStep(1)
  }

  const handleSubmit = () => {
    
  }

  const [rateValue, setRateValue] = useState(raiting);
  const [textValue, setTextValue] = useState();

  const setValues = {
    setRateValue,
    setTextValue,
    setStep,
  }

  const props = {
    rateValue,
    textValue,
    vico,
    project,
  }

  return (
    <>
      <Space style={{"marginTop": "20px"}}>
        <br/>
        <Button type="primary" size='large' onClick={showModal}>
          Review
        </Button>
      </Space>
      <Modal
        open={open}
        title={`Your Review of ${vico?.name}`}
        onCancel={handleCancel}
        footer={false}
      >
        {step === 1 && <StepOne props={props} setValues={setValues} />}
        {step === 2 && <StepTwo props={props} setValues={setValues} />}
        <h2>Step {step} of 2</h2>
      </Modal>
    </>
  );
};