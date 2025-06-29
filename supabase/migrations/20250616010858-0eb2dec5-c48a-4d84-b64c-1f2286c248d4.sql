-- Create the contact_submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (optional - makes the table publicly accessible for now)
-- You can add RLS policies later if you want to restrict access
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow anyone to insert contact submissions
CREATE POLICY "Anyone can submit contact forms" 
  ON public.contact_submissions 
  FOR INSERT 
  WITH CHECK (true);
