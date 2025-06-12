import { GoogleGenerativeAI } from "@google/generative-ai"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { apiKey } = await request.json()

    if (!apiKey) {
      return NextResponse.json({
        success: false,
        error: "API key is required",
      })
    }

    // Test the API key
    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

    const result = await model.generateContent("Hello")
    const response = await result.response
    const text = response.text()

    return NextResponse.json({
      success: true,
      message: `API key is valid. Response: ${text}`,
    })
  } catch (error: any) {
    console.error("API key validation error:", error)

    let errorMessage = "Unknown error occurred"

    if (error.message?.includes("API_KEY_INVALID")) {
      errorMessage = "Invalid API key. Please check your key and try again."
    } else if (error.message?.includes("403")) {
      errorMessage = "API key doesn't have permission to access Generative AI API."
    } else if (error.message?.includes("429")) {
      errorMessage = "API quota exceeded. Please try again later."
    } else if (error.message) {
      errorMessage = error.message
    }

    return NextResponse.json({
      success: false,
      error: errorMessage,
    })
  }
}
