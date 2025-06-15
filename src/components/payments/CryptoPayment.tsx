
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bitcoin, Copy, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CryptoPayment = () => {
  const [selectedCrypto, setSelectedCrypto] = useState<string>('bitcoin');
  const [amount, setAmount] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [paymentGenerated, setPaymentGenerated] = useState<boolean>(false);
  const { toast } = useToast();

  const cryptoOptions = [
    { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa' },
    { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', address: '0x742d35Cc6634C0532925a3b8D93C1B37ea3b7c4' },
    { id: 'litecoin', name: 'Litecoin', symbol: 'LTC', address: 'LTC1qXyZ9abc123def456ghi789jkl012mno345pqr' },
    { id: 'monero', name: 'Monero', symbol: 'XMR', address: '4AdUndXHHZ6cfufTMvppY6JwXNouMBzSkbLYfpAV6SzS9rmb3jbz' }
  ];

  const selectedCryptoData = cryptoOptions.find(crypto => crypto.id === selectedCrypto);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "Address has been copied to your clipboard",
    });
  };

  const generatePayment = () => {
    if (!amount || !email) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    setPaymentGenerated(true);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Bitcoin className="h-12 w-12 mx-auto mb-4 text-orange-500" />
        <h2 className="text-2xl font-bold mb-2">Cryptocurrency Payment</h2>
        <p className="text-gray-600">Complete your payment using your preferred cryptocurrency</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Select Cryptocurrency</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {cryptoOptions.map((crypto) => (
              <button
                key={crypto.id}
                onClick={() => setSelectedCrypto(crypto.id)}
                className={`p-3 border rounded-lg text-center transition-colors ${
                  selectedCrypto === crypto.id 
                    ? 'border-[#28c7d9] bg-[#28c7d9]/10' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-medium">{crypto.symbol}</div>
                <div className="text-xs text-gray-500">{crypto.name}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Amount (USD)</label>
            <Input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email (for confirmation)</label>
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {!paymentGenerated ? (
          <Button onClick={generatePayment} className="w-full bg-[#28c7d9] hover:bg-[#28c7d9]/90">
            Generate Payment Address
          </Button>
        ) : (
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">Payment Details Generated</span>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Send {selectedCryptoData?.symbol} to this address:</label>
              <div className="flex items-center gap-2 p-3 bg-white border rounded-lg">
                <code className="flex-1 text-sm break-all">{selectedCryptoData?.address}</code>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard(selectedCryptoData?.address || '')}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              <p><strong>Amount:</strong> ${amount} USD</p>
              <p><strong>Confirmation email:</strong> {email}</p>
              <p className="mt-2 text-xs">
                Please send the exact equivalent amount in {selectedCryptoData?.symbol} to the address above. 
                You will receive a confirmation email once the transaction is detected on the blockchain.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CryptoPayment;
