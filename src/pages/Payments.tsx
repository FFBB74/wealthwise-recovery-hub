
import { ArrowLeft, Bitcoin, CreditCard, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CryptoPayment from "@/components/payments/CryptoPayment";
import GiftCardPayment from "@/components/payments/GiftCardPayment";
import { useState } from "react";

const Payments = () => {
  const [selectedMethod, setSelectedMethod] = useState<'crypto' | 'giftcard' | null>(null);

  return (
    <div className="min-h-screen bg-[#28c7d9]/[0.91] p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-2">Anonymous Payment Methods</h1>
          <p className="text-gray-600 text-center mb-8">Choose your preferred payment method for complete privacy</p>

          {!selectedMethod ? (
            <div className="grid md:grid-cols-2 gap-6">
              <div 
                className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#28c7d9] transition-colors cursor-pointer"
                onClick={() => setSelectedMethod('crypto')}
              >
                <div className="text-center">
                  <Bitcoin className="h-16 w-16 mx-auto mb-4 text-orange-500" />
                  <h3 className="text-xl font-semibold mb-2">Cryptocurrency</h3>
                  <p className="text-gray-600 mb-4">Pay with Bitcoin, Ethereum, or other cryptocurrencies</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Complete anonymity</li>
                    <li>• Instant transactions</li>
                    <li>• Global acceptance</li>
                    <li>• No personal data required</li>
                  </ul>
                </div>
              </div>

              <div 
                className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#28c7d9] transition-colors cursor-pointer"
                onClick={() => setSelectedMethod('giftcard')}
              >
                <div className="text-center">
                  <Gift className="h-16 w-16 mx-auto mb-4 text-green-500" />
                  <h3 className="text-xl font-semibold mb-2">Gift Cards</h3>
                  <p className="text-gray-600 mb-4">Pay with popular gift cards and vouchers</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Amazon, Google Play, iTunes</li>
                    <li>• Steam, PlayStation, Xbox</li>
                    <li>• Visa/Mastercard gift cards</li>
                    <li>• Easy verification process</li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <Button 
                variant="outline" 
                onClick={() => setSelectedMethod(null)}
                className="mb-6"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Payment Methods
              </Button>

              {selectedMethod === 'crypto' && <CryptoPayment />}
              {selectedMethod === 'giftcard' && <GiftCardPayment />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payments;
