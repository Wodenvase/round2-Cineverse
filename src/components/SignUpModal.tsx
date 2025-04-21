
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'

const SignUpModal = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [step, setStep] = useState(1)

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This would normally submit to a backend
    console.log({ name, email, password })
  }

  return (
    <div className="bg-cinema-darkpurple rounded-lg overflow-hidden animate-scale-in">
      <div className="bg-gradient-to-r from-cinema-purple/30 to-cinema-blue/30 p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {step === 1 ? "Sign Up for CineVerse" : "Create Your Account"}
        </h2>
        
        {step === 1 ? (
          <form onSubmit={handleNext} className="space-y-4 animate-fade-in">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email Address</Label>
              <Input 
                id="email"
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-cinema-darkpurple/70 border-cinema-purple/50 text-white"
              />
            </div>
            
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Get Started
            </Button>
            
            <p className="text-cinema-text text-sm text-center mt-4">
              Already have an account? <a href="#" className="text-primary hover:underline">Sign In</a>
            </p>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">Your Name</Label>
              <Input 
                id="name"
                type="text" 
                placeholder="Enter your name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-cinema-darkpurple/70 border-cinema-purple/50 text-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">Password</Label>
              <Input 
                id="password"
                type="password" 
                placeholder="Create a password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-cinema-darkpurple/70 border-cinema-purple/50 text-white"
              />
            </div>
            
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Create Account
            </Button>
            
            <p className="text-cinema-text text-sm text-center">
              By signing up, you agree to our <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

export default SignUpModal
