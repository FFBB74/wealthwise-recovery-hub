"use client"

import { useState, useEffect } from "react"
import VercelIntegration from "./integrations/VercelIntegration"
import BuilderIntegration from "./integrations/BuilderIntegration"
import FigmaIntegration from "./integrations/FigmaIntegration"
import NetlifyIntegration from "./integrations/NetlifyIntegration"
import APIKeysModal from "./integrations/APIKeysModal"
import ProjectsShowcase from "./integrations/ProjectsShowcase"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Rocket, Code, Palette, Globe } from "lucide-react"

const IntegrationsSection = () => {
  const [apiKeys, setApiKeys] = useState({
    vercel: "",
    figma: "",
    netlify: "",
    builder: "",
  })

  useEffect(() => {
    // Load saved API keys from localStorage
    setApiKeys({
      vercel: localStorage.getItem("vercel_token") || "",
      figma: localStorage.getItem("figma_token") || "",
      netlify: localStorage.getItem("netlify_token") || "",
      builder: localStorage.getItem("builder_token") || "",
    })
  }, [])

  const handleKeysUpdate = (newKeys: typeof apiKeys) => {
    setApiKeys(newKeys)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-emerald/10 text-brand-emerald px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap size={16} />
            Development Tools
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Streamline Your Development Workflow
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Connect with industry-leading platforms to accelerate your development process, from design to deployment
            and beyond.
          </p>

          <APIKeysModal onKeysUpdate={handleKeysUpdate} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <VercelIntegration />
          <BuilderIntegration />
          <FigmaIntegration />
          <NetlifyIntegration />
        </div>

        {/* Live Projects Showcase */}
        <div className="mb-12">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  <Palette size={14} />
                  Live Integration
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-2">Your Connected Projects</h3>
                <p className="text-gray-600">Real-time data from your connected development platforms</p>
              </div>

              <ProjectsShowcase vercelToken={apiKeys.vercel} figmaToken={apiKeys.figma} />
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-lg text-brand-navy mb-2">Instant Deployment</h3>
              <p className="text-gray-600 text-sm">
                Deploy your applications instantly with zero configuration using Vercel or Netlify's powerful platforms.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-lg text-brand-navy mb-2">Design-to-Code</h3>
              <p className="text-gray-600 text-sm">
                Transform Figma designs into production-ready code automatically with dev mode integration.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-lg text-brand-navy mb-2">Visual Development</h3>
              <p className="text-gray-600 text-sm">
                Build and optimize experiences visually with Builder.io's drag-and-drop interface and A/B testing.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-lg text-brand-navy mb-2">Real-time Data</h3>
              <p className="text-gray-600 text-sm">
                Connect your accounts to see live project data, deployment status, and design files directly in your
                dashboard.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default IntegrationsSection
