"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, Key, AlertCircle, CheckCircle } from "lucide-react"

interface ApiKeyManagerProps {
  onApiKeySet: (apiKey: string) => void
}

export function ApiKeyManager({ onApiKeySet }: ApiKeyManagerProps) {
  const [apiKey, setApiKey] = useState("")
  const [showKey, setShowKey] = useState(false)
  const [isValidating, setIsValidating] = useState(false)
  const [validationResult, setValidationResult] = useState<{
    isValid: boolean
    message: string
  } | null>(null)

  const validateApiKey = async () => {
    if (!apiKey.trim()) {
      setValidationResult({
        isValid: false,
        message: "Please enter an API key",
      })
      return
    }

    setIsValidating(true)
    setValidationResult(null)

    try {
      // Test the API key with a simple request
      const response = await fetch("/api/test-gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ apiKey: apiKey.trim() }),
      })

      const result = await response.json()

      if (result.success) {
        setValidationResult({
          isValid: true,
          message: "API key is valid and working!",
        })
        onApiKeySet(apiKey.trim())
      } else {
        setValidationResult({
          isValid: false,
          message: result.error || "API key validation failed",
        })
      }
    } catch (error) {
      setValidationResult({
        isValid: false,
        message: "Failed to validate API key. Please try again.",
      })
    } finally {
      setIsValidating(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Key className="h-5 w-5 mr-2" />
          Google API Key Setup
        </CardTitle>
        <CardDescription>
          Enter your Google Generative AI API key to enable AI-powered resource recommendations.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="api-key" className="text-sm font-medium">
            API Key
          </label>
          <div className="relative">
            <Input
              id="api-key"
              type={showKey ? "text" : "password"}
              placeholder="Enter your Google API key (AIza...)"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="pr-10"
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3"
              onClick={() => setShowKey(!showKey)}
            >
              {showKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        <Button onClick={validateApiKey} disabled={isValidating || !apiKey.trim()} className="w-full">
          {isValidating ? "Validating..." : "Validate API Key"}
        </Button>

        {validationResult && (
          <Alert variant={validationResult.isValid ? "default" : "destructive"}>
            {validationResult.isValid ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
            <AlertDescription>
              {validationResult.isValid ? (
                <span className="text-green-700">✅ {validationResult.message}</span>
              ) : (
                <span>{validationResult.message}</span>
              )}
            </AlertDescription>
          </Alert>
        )}

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">How to get a Google API Key:</h4>
          <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
            <li>
              Go to{" "}
              <a
                href="https://makersuite.google.com/app/apikey"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Google AI Studio
              </a>
            </li>
            <li>Click "Create API Key"</li>
            <li>Select your Google Cloud project (or create a new one)</li>
            <li>Copy the generated API key</li>
            <li>Make sure the "Generative Language API" is enabled in your project</li>
          </ol>
        </div>

        <div className="mt-4 p-4 bg-amber-50 rounded-lg">
          <h4 className="font-medium text-amber-900 mb-2">⚠️ Security Note:</h4>
          <p className="text-sm text-amber-800">
            This is a demo environment. In production, never enter API keys in forms like this. Use environment
            variables instead.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
