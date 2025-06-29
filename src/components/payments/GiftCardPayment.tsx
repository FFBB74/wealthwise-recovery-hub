"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Gift, Upload, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const GiftCardPayment = () => {
  const [selectedCard, setSelectedCard] = useState<string>("amazon")
  const [cardCode, setCardCode] = useState<string>("")
  const [cardValue, setCardValue] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [cardImage, setCardImage] = useState<File | null>(null)
  const [paymentSubmitted, setPaymentSubmitted] = useState<boolean>(false)
  const { toast } = useToast()

  const giftCardOptions = [
    { id: "amazon", name: "Amazon", logo: "🛒" },
    { id: "googleplay", name: "Google Play", logo: "▶️" },
    { id: "itunes", name: "iTunes", logo: "🍎" },
    { id: "steam", name: "Steam", logo: "🎮" },
    { id: "visa", name: "Visa Gift Card", logo: "💳" },
    { id: "mastercard", name: "Mastercard Gift Card", logo: "💳" },
    { id: "playstation", name: "PlayStation", logo: "🎮" },
    { id: "xbox", name: "Xbox", logo: "🎮" },
  ]

  const selectedCardData = giftCardOptions.find((card) => card.id === selectedCard)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setCardImage(file)
    }
  }

  const submitPayment = () => {
    if (!cardCode || !cardValue || !email) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    // In a real implementation, this would send the data to a backend
    console.log("Gift card payment submitted:", {
      cardType: selectedCard,
      cardCode: cardCode,
      cardValue: cardValue,
      email: email,
      hasImage: !!cardImage,
    })

    setPaymentSubmitted(true)
    toast({
      title: "Payment submitted",
      description: "Your gift card payment is being processed",
    })
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Gift className="h-12 w-12 mx-auto mb-4 text-green-500" />
        <h2 className="text-2xl font-bold mb-2">Gift Card Payment</h2>
        <p className="text-gray-600">Pay using your gift cards and vouchers</p>
      </div>

      {!paymentSubmitted ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Select Gift Card Type</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {giftCardOptions.map((card) => (
                <button
                  key={card.id}
                  onClick={() => setSelectedCard(card.id)}
                  className={`p-3 border rounded-lg text-center transition-colors ${
                    selectedCard === card.id
                      ? "border-[#28c7d9] bg-[#28c7d9]/10"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="text-lg mb-1">{card.logo}</div>
                  <div className="text-xs font-medium">{card.name}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Gift Card Code</label>
              <Input
                type="text"
                placeholder="Enter gift card code"
                value={cardCode}
                onChange={(e) => setCardCode(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Card Value (USD)</label>
              <Input
                type="number"
                placeholder="Enter card value"
                value={cardValue}
                onChange={(e) => setCardValue(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email (for confirmation)</label>
            <Input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Upload Gift Card Image (Optional)</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="card-image" />
              <label htmlFor="card-image" className="cursor-pointer">
                <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-600">
                  {cardImage ? cardImage.name : "Click to upload gift card image"}
                </p>
              </label>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-medium text-yellow-800 mb-2">Important Notes:</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Gift cards will be verified before processing</li>
              <li>• Processing time: 1-24 hours</li>
              <li>• You'll receive email confirmation once verified</li>
              <li>• Unused card balance will be refunded if applicable</li>
            </ul>
          </div>

          <Button onClick={submitPayment} className="w-full bg-[#28c7d9] hover:bg-[#28c7d9]/90">
            Submit Gift Card Payment
          </Button>
        </div>
      ) : (
        <div className="bg-green-50 rounded-lg p-6 text-center">
          <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-500" />
          <h3 className="text-xl font-bold text-green-800 mb-2">Payment Submitted Successfully!</h3>
          <p className="text-green-700 mb-4">Your {selectedCardData?.name} gift card payment is being processed.</p>
          <div className="text-sm text-green-600 space-y-1">
            <p>
              <strong>Card Type:</strong> {selectedCardData?.name}
            </p>
            <p>
              <strong>Value:</strong> ${cardValue} USD
            </p>
            <p>
              <strong>Confirmation Email:</strong> {email}
            </p>
          </div>
          <p className="text-xs text-green-600 mt-4">
            You will receive a confirmation email within 24 hours once your gift card has been verified.
          </p>
        </div>
      )}
    </div>
  )
}

export default GiftCardPayment
