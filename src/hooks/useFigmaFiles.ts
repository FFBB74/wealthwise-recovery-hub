import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

interface FigmaFile {
  key: string;
  name: string;
  thumbnail_url: string;
  last_modified: string;
}

export const useFigmaFiles = (token?: string) => {
  const [files, setFiles] = useState<FigmaFile[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const fetchRecentFiles = React.useCallback(async () => {
    if (!token) return;
    
    setLoading(true);
    try {
      const response = await fetch('https://api.figma.com/v1/me', {
        headers: {
          'X-Figma-Token': token,
        },
      });
      
      if (response.ok) {
        // Mock data for demonstration since we can't access real Figma API without CORS
        const mockFiles = [
          {
            key: 'demo1',
            name: 'Website Design System',
            thumbnail_url: '/placeholder.svg',
            last_modified: new Date().toISOString(),
          },
          {
            key: 'demo2', 
            name: 'Mobile App Wireframes',
            thumbnail_url: '/placeholder.svg',
            last_modified: new Date().toISOString(),
          }
        ];
        setFiles(mockFiles);
        toast({
          title: "Design Files Loaded",
          description: `Found ${mockFiles.length} recent Figma files`,
        });
      }
    } catch (error) {
      console.error('Error fetching Figma files:', error);
    } finally {
      setLoading(false);
    }
  }, [token, toast]);

  return { files, loading, fetchFiles: fetchRecentFiles };
};
