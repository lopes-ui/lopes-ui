import { MultiStepContainer, MultiStepLabel, Step, Steps } from "./styles";

export function MultiStep({ size = 1, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <MultiStepLabel>
        Passo {currentStep} de {size}
      </MultiStepLabel>

      <Steps css={{ "--steps-size": size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />;
        })}
      </Steps>
    </MultiStepContainer>
  );
}

export interface MultiStepProps {
  size: number;
  currentStep?: number;
}

MultiStep.displayName = "MultiStep";
