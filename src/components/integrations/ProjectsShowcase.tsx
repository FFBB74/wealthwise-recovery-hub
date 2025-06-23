
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Zap } from "lucide-react";
import { useVercelProjects } from "@/hooks/useVercelProjects";
import { useFigmaFiles } from "@/hooks/useFigmaFiles";

interface ProjectsShowcaseProps {
  vercelToken?: string;
  figmaToken?: string;
}

const ProjectsShowcase = ({ vercelToken, figmaToken }: ProjectsShowcaseProps) => {
  const { projects, loading: vercelLoading } = useVercelProjects(vercelToken);
  const { files, loading: figmaLoading } = useFigmaFiles(figmaToken);

  if (!vercelToken && !figmaToken) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>Configure your API keys to see your projects and designs here</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {vercelToken && (
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Zap className="text-black" size={20} />
            Recent Vercel Deployments
          </h3>
          {vercelLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-4">
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 bg-gray-100 rounded w-2/3"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.slice(0, 4).map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm flex items-center justify-between">
                      {project.name}
                      {project.link && (
                        <ExternalLink 
                          className="cursor-pointer text-gray-400 hover:text-gray-600" 
                          size={14}
                          onClick={() => window.open(project.link?.url, '_blank')}
                        />
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {project.framework || 'Web'}
                      </Badge>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar size={12} className="mr-1" />
                        {new Date(project.updatedAt).toLocaleDateString()}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}

      {figmaToken && (
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <div className="w-5 h-5 bg-orange-500 rounded"></div>
            Recent Figma Designs
          </h3>
          {figmaLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-4">
                    <div className="h-20 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-100 rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {files.map((file) => (
                <Card key={file.key} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="aspect-video bg-gray-100 rounded mb-3 flex items-center justify-center">
                      <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                        <span className="text-white text-sm font-bold">F</span>
                      </div>
                    </div>
                    <h4 className="font-medium text-sm mb-1">{file.name}</h4>
                    <p className="text-xs text-gray-500">
                      Updated {new Date(file.last_modified).toLocaleDateString()}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectsShowcase;
