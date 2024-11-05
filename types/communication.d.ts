interface Feedback<T = any> {
    hasError: boolean; // Indicates whether an error occurred
    errorDetail?: Error | unknown; // Complete runtime error object or message
    userMessage?: string; // Message for end users
    developerMessage?: string; // Detailed info for developers
    data?: T; // Data to return if no errors
  }
  