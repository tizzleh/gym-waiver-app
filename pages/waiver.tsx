import React, { useRef, useState } from 'react';
import User from '../server/models/User';
import SignaturePad from 'react-signature-canvas';

const Waiver = () => {
  const [isSignatureEmpty, setIsSignatureEmpty] = useState(true);
  const signatureRef = useRef(null);

  const clearSignature = () => {
    if (signatureRef.current) {
      signatureRef.current.clear();
      setIsSignatureEmpty(true);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (isSignatureEmpty) {
      // Show error message or prevent form submission if signature is empty
      return;
    }

    try {
      // Create a new instance of the User model
      const newUser = new User({
        firstName: 'John',
        lastName: 'Doe',
        signatureData: signatureRef.current.toDataURL(),
      });

      // Save the user to the database
      await newUser.save();

      // Reset form fields or show success message
    } catch (error) {
      // Handle any errors that occur during saving
      console.error('Error saving signature:', error);
    }
  };

  const handleSignatureChange = () => {
    const isEmpty = signatureRef.current.isEmpty();
    setIsSignatureEmpty(isEmpty);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Participant Waiver</h1>
      <form className="max-w-md w-full bg-white p-6 rounded shadow">
        {/* Form inputs */}
        {/* ... */}

        {/* Signature */}
        <div className="flex flex-col items-center mb-6">
          <label htmlFor="signature" className="text-lg font-medium mb-2">
            Signature
          </label>
          <div className="w-full h-64 border-2 border-gray-300 max-w-xs">
            <SignaturePad
              ref={signatureRef}
              canvasProps={{ className: 'w-full h-full' }}
              onEnd={handleSignatureChange}
            />
          </div>
          <button
            type="button"
            className="mt-4 px-4 py-2 bg-gray-200 text-gray-800 rounded"
            onClick={clearSignature}
          >
            Clear Signature
          </button>
          {isSignatureEmpty && (
            <p className="text-red-500 mt-2">Please provide a signature.</p>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded mt-4"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Waiver;

