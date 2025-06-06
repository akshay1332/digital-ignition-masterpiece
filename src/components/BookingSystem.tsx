
import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageCircle, CheckCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';

const BookingSystem = () => {
  const [step, setStep] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookingData, setBookingData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    budget: ''
  });

  const services = [
    'Free Consultation',
    'Website Redesign',
    'Web Design',
    'Web Development',
    'UI/UX Design',
    'Performance Optimization'
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const budgetRanges = [
    'Free Consultation',
    '₹9,999 - ₹19,999',
    '₹20,000 - ₹49,999',
    '₹50,000 - ₹99,999',
    '₹1,00,000+'
  ];

  const handleInputChange = (field: string, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Booking submitted:', bookingData);
    setShowConfirmation(true);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return bookingData.service && bookingData.date && bookingData.time;
      case 2:
        return bookingData.name && bookingData.email;
      case 3:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                step >= stepNumber ? 'bg-eco-green text-dark' : 'bg-gray-700 text-gray-400'
              }`}>
                {step > stepNumber ? <CheckCircle className="w-5 h-5" /> : stepNumber}
              </div>
              {stepNumber < 3 && (
                <div className={`w-24 h-1 mx-4 transition-all duration-300 ${
                  step > stepNumber ? 'bg-eco-green' : 'bg-gray-700'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-white font-roboto">
            Step {step} of 3: {
              step === 1 ? 'Service & Schedule' :
              step === 2 ? 'Your Information' :
              'Additional Details'
            }
          </p>
        </div>
      </div>

      {/* Step 1: Service Selection & Scheduling */}
      {step === 1 && (
        <Card className="bg-dark/80 backdrop-blur-md border-eco-green/20">
          <CardHeader>
            <CardTitle className="text-2xl font-montserrat font-bold text-white flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-eco-green" />
              Choose Service & Schedule
            </CardTitle>
            <CardDescription className="text-gray-300">
              Select the service you're interested in and pick a convenient time slot.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-white font-roboto mb-2">Service Type *</label>
              <Select onValueChange={(value) => handleInputChange('service', value)} required>
                <SelectTrigger className="bg-dark/60 border-eco-green/20 text-white focus:border-eco-green">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-dark border-eco-green/20">
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>{service}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-roboto mb-2">Preferred Date *</label>
                <Input
                  type="date"
                  value={bookingData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className="bg-dark/60 border-eco-green/20 text-white focus:border-eco-green"
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              <div>
                <label className="block text-white font-roboto mb-2">Preferred Time *</label>
                <Select onValueChange={(value) => handleInputChange('time', value)} required>
                  <SelectTrigger className="bg-dark/60 border-eco-green/20 text-white focus:border-eco-green">
                    <SelectValue placeholder="Select time slot" />
                  </SelectTrigger>
                  <SelectContent className="bg-dark border-eco-green/20">
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>{time}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Personal Information */}
      {step === 2 && (
        <Card className="bg-dark/80 backdrop-blur-md border-eco-green/20">
          <CardHeader>
            <CardTitle className="text-2xl font-montserrat font-bold text-white flex items-center">
              <User className="w-6 h-6 mr-2 text-eco-green" />
              Your Information
            </CardTitle>
            <CardDescription className="text-gray-300">
              Tell us about yourself so we can prepare for our consultation.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-roboto mb-2">Full Name *</label>
                <Input
                  value={bookingData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="bg-dark/60 border-eco-green/20 text-white placeholder-gray-400 focus:border-eco-green"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-roboto mb-2">Email Address *</label>
                <Input
                  type="email"
                  value={bookingData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-dark/60 border-eco-green/20 text-white placeholder-gray-400 focus:border-eco-green"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-roboto mb-2">Phone Number</label>
                <Input
                  value={bookingData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="bg-dark/60 border-eco-green/20 text-white placeholder-gray-400 focus:border-eco-green"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-white font-roboto mb-2">Company/Organization</label>
                <Input
                  value={bookingData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="bg-dark/60 border-eco-green/20 text-white placeholder-gray-400 focus:border-eco-green"
                  placeholder="Your company name"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 3: Additional Details */}
      {step === 3 && (
        <Card className="bg-dark/80 backdrop-blur-md border-eco-green/20">
          <CardHeader>
            <CardTitle className="text-2xl font-montserrat font-bold text-white flex items-center">
              <MessageCircle className="w-6 h-6 mr-2 text-eco-green" />
              Project Details
            </CardTitle>
            <CardDescription className="text-gray-300">
              Help us understand your project requirements better.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-white font-roboto mb-2">Budget Range</label>
              <Select onValueChange={(value) => handleInputChange('budget', value)}>
                <SelectTrigger className="bg-dark/60 border-eco-green/20 text-white focus:border-eco-green">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent className="bg-dark border-eco-green/20">
                  {budgetRanges.map((budget) => (
                    <SelectItem key={budget} value={budget}>{budget}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-white font-roboto mb-2">Project Description</label>
              <Textarea
                value={bookingData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className="bg-dark/60 border-eco-green/20 text-white placeholder-gray-400 focus:border-eco-green min-h-[120px]"
                placeholder="Tell us about your project goals, timeline, and any specific requirements..."
              />
            </div>

            {/* Booking Summary */}
            <div className="bg-eco-green/10 border border-eco-green/20 rounded-lg p-4">
              <h4 className="text-lg font-montserrat font-bold text-white mb-3">Booking Summary</h4>
              <div className="space-y-2 text-gray-300">
                <p><strong>Service:</strong> {bookingData.service}</p>
                <p><strong>Date:</strong> {bookingData.date}</p>
                <p><strong>Time:</strong> {bookingData.time}</p>
                <p><strong>Name:</strong> {bookingData.name}</p>
                <p><strong>Email:</strong> {bookingData.email}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={step === 1}
          className="border-eco-green/50 text-eco-green hover:bg-eco-green hover:text-dark"
        >
          Previous
        </Button>

        {step < 3 ? (
          <Button
            onClick={nextStep}
            disabled={!isStepValid()}
            className="bg-gradient-to-r from-eco-green to-eco-medium text-dark font-roboto font-semibold"
          >
            Next
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={!isStepValid()}
            className="bg-gradient-to-r from-eco-green to-eco-medium text-dark font-roboto font-semibold"
          >
            Book Consultation
          </Button>
        )}
      </div>

      {/* Confirmation Dialog */}
      <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <AlertDialogContent className="bg-dark border-eco-green/20">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white flex items-center">
              <CheckCircle className="w-6 h-6 mr-2 text-eco-green" />
              Booking Confirmed!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-300">
              Your consultation has been scheduled successfully. We'll send you a confirmation email with meeting details.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction 
              onClick={() => setShowConfirmation(false)}
              className="bg-eco-green text-dark hover:bg-eco-medium"
            >
              Close
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default BookingSystem;
