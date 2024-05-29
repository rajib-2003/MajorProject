import React, { useState } from 'react';
import Step1CustomerInfo from '../CheckoutPage/CustomerInfo';
import Step2DeliveryAddress from '../CheckoutPage/DeliveryAddress';
import CartSummaryPage from '../FoodandDress/CartSummaryPage';
import Step4Success from '../CheckoutPage/SuccessAlert';
import FinalPaymentConfirmation from '../CheckoutPage/FinalPaymentConfirmation'; // new component for final confirmation

const MultiStepForm = ({ foodCartItems, dressCartItems, removeFromFoodCart, removeFromDressCart }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  switch (step) {
    case 1:
      return <Step1CustomerInfo formData={formData} setFormData={setFormData} nextStep={nextStep} />;
    case 2:
      return <Step2DeliveryAddress formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return (
        <CartSummaryPage 
          foodCartItems={foodCartItems} 
          dressCartItems={dressCartItems} 
          removeFromFoodCart={removeFromFoodCart} 
          removeFromDressCart={removeFromDressCart} 
          nextStep={nextStep} 
          prevStep={prevStep}
        />
      );
    case 4:
      return <FinalPaymentConfirmation nextStep={nextStep} prevStep={prevStep} />;
    case 5:
      return <Step4Success />;
    default:
      return <Step1CustomerInfo formData={formData} setFormData={setFormData} nextStep={nextStep} />;
  }
};

export default MultiStepForm;
