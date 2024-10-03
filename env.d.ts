namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    NEXT_PUBLIC_BACKEND_URL: string;
    NEXT_PUBLIC_SUPABASE_URL: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
    SUPABASE_PROJECT_REF: string;
    OPENAI_API_KEY: string;
    NEXT_PUBLIC_NEXT_URL: string;
    RESEND_API_KEY: string;
    // And the rest of the environment variables
  }
}
