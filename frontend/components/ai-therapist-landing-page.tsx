'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Brain, MessageSquare, UserCircle2, UserCog, History, ShieldCheck, Link } from 'lucide-react'

export function AiTherapistLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Brain className="h-6 w-6 mr-2" />
          <span className="font-bold">AI Therapist</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#register">
            Register
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Artificial Emotional Intelligence
                </h1>
                <h1 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl">
                  Meet Your Personal Therapist
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Experience personalized therapy sessions with our advanced AI. Empathetic, understanding, and always available.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <UserCircle2 className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Profile Building</h3>
                <p className="text-gray-500 dark:text-gray-400">Create a detailed profile for personalized therapy sessions.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <UserCog className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Dynamic Persona Tracking</h3>
                <p className="text-gray-500 dark:text-gray-400">AI adapts to your changing needs and personality over time.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <MessageSquare className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Emotional Responses</h3>
                <p className="text-gray-500 dark:text-gray-400">Receive empathetic and understanding responses from the AI.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Brain className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Situation-based Reasoning</h3>
                <p className="text-gray-500 dark:text-gray-400">AI analyzes each conversation turn for contextual understanding.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <History className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Issue Tracking</h3>
                <p className="text-gray-500 dark:text-gray-400">Keep track of current issues and past therapy history.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Ethical AI Responses</h3>
                <p className="text-gray-500 dark:text-gray-400">Constitutional rules ensure safe and appropriate interactions.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">How It Works</h2>
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col items-center text-center max-w-sm">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Register and provide information</h3>
                <p className="text-gray-500 dark:text-gray-400">Create an account and share your background for personalized therapy.</p>
              </div>
              <div className="flex flex-col items-center text-center max-w-sm">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">Start talking to your AI Therapist</h3>
                <p className="text-gray-500 dark:text-gray-400">Begin your therapy sessions with our empathetic AI.</p>
              </div>
              <div className="flex flex-col items-center text-center max-w-sm">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">The therapist automatically tracks and updates profile</h3>
                <p className="text-gray-500 dark:text-gray-400">Your AI Therapist learns and adapts to your needs over time.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="register" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Start Your Journey?</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Register now and take the first step towards better mental health with AI-powered therapy.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                  <Input type="email" placeholder="Enter your email" />
                  <Button type="submit" className="w-full">Get Started</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 AI Therapist. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}