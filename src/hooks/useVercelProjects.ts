
import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

interface VercelProject {
  id: string;
  name: string;
  framework: string;
  updatedAt: number;
  link?: {
    url: string;
  };
}

export const useVercelProjects = (token?: string) => {
  const [projects, setProjects] = useState<VercelProject[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const fetchProjects = React.useCallback(async () => {
    if (!token) return;
    
    setLoading(true);
    try {
      const response = await fetch('https://api.vercel.com/v9/projects', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        setProjects(data.projects || []);
        toast({
          title: "Projects Loaded",
          description: `Found ${data.projects?.length || 0} Vercel projects`,
        });
      }
    } catch (error) {
      console.error('Error fetching Vercel projects:', error);
      toast({
        title: "Connection Error",
        description: "Could not connect to Vercel API",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [token, toast]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return { projects, loading, refetch: fetchProjects };
};
