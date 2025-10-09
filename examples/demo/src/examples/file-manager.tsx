import { useState } from 'react';
import {
  Grid,
  Block,
  BlockContent,
  BlockHeader,
  type BlockConfig
} from '@pretty-poly/react';
import {
  Folder,
  FolderOpen,
  File,
  FileText,
  FileImage,
  FileCode,
  FileArchive,
  ChevronRight,
  Home,
  Search,
  MoreVertical
} from 'lucide-react';

const fileManagerLayout: BlockConfig[] = [
  {
    id: 'root',
    type: 'group',
    direction: 'row',
    order: 0,
  },
  {
    id: 'sidebar',
    type: 'block',
    defaultSize: 280,
    minSize: 200,
    maxSize: 450,
    sizeUnit: 'px',
    parentId: 'root',
    order: 0,
  },
  {
    id: 'main',
    type: 'block',
    defaultSize: 1,
    sizeUnit: 'fr',
    parentId: 'root',
    order: 1,
  },
];

interface FileItem {
  id: string;
  name: string;
  type: 'folder' | 'file';
  fileType?: 'image' | 'code' | 'text' | 'archive' | 'other';
  size?: string;
  modified: string;
}

const folders = [
  { id: '1', name: 'Documents', icon: Folder, count: 24 },
  { id: '2', name: 'Downloads', icon: Folder, count: 156 },
  { id: '3', name: 'Pictures', icon: Folder, count: 892 },
  { id: '4', name: 'Projects', icon: FolderOpen, count: 12, active: true },
  { id: '5', name: 'Music', icon: Folder, count: 234 },
  { id: '6', name: 'Videos', icon: Folder, count: 45 },
];

const files: FileItem[] = [
  { id: 'f1', name: 'pretty-poly', type: 'folder', modified: '2 days ago' },
  { id: 'f2', name: 'website-redesign', type: 'folder', modified: '1 week ago' },
  { id: 'f3', name: 'mobile-app', type: 'folder', modified: '3 weeks ago' },
  { id: 'f4', name: 'README.md', type: 'file', fileType: 'text', size: '2.4 KB', modified: 'Yesterday' },
  { id: 'f5', name: 'package.json', type: 'file', fileType: 'code', size: '1.2 KB', modified: '2 days ago' },
  { id: 'f6', name: 'tsconfig.json', type: 'file', fileType: 'code', size: '856 B', modified: '1 week ago' },
  { id: 'f7', name: 'screenshot.png', type: 'file', fileType: 'image', size: '342 KB', modified: 'Today' },
  { id: 'f8', name: 'design-mockup.png', type: 'file', fileType: 'image', size: '1.8 MB', modified: 'Yesterday' },
  { id: 'f9', name: 'archive.zip', type: 'file', fileType: 'archive', size: '45.2 MB', modified: '1 month ago' },
  { id: 'f10', name: 'index.tsx', type: 'file', fileType: 'code', size: '3.1 KB', modified: 'Today' },
];

const getFileIcon = (item: FileItem) => {
  if (item.type === 'folder') return Folder;

  switch (item.fileType) {
    case 'image': return FileImage;
    case 'code': return FileCode;
    case 'text': return FileText;
    case 'archive': return FileArchive;
    default: return File;
  }
};

export default function FileManager() {
  const [selectedFile, setSelectedFile] = useState<string | null>('f7');

  return (
    <Grid defaultLayout={fileManagerLayout} dividers="auto" className="h-screen bg-slate-50">
      <Block id="sidebar" className="bg-white border-r border-slate-200">
        <BlockHeader className="p-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Home className="h-5 w-5 text-slate-600" />
            <h2 className="font-semibold text-slate-900">My Files</h2>
          </div>
        </BlockHeader>

        <BlockContent className="p-3">
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search files..."
                className="w-full pl-9 pr-3 py-2 bg-slate-100 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-semibold text-slate-500 px-2 py-1">FOLDERS</div>
            {folders.map((folder) => {
              const Icon = folder.icon;
              return (
                <button
                  key={folder.id}
                  className={`w-full flex items-center gap-3 px-2 py-2 rounded-lg text-sm transition-colors ${
                    folder.active
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  <span className="flex-1 text-left truncate">{folder.name}</span>
                  <span className="text-xs text-slate-400">{folder.count}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 p-3 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-lg">
            <div className="text-sm font-medium text-slate-900 mb-1">Storage</div>
            <div className="text-xs text-slate-600 mb-2">23.4 GB of 50 GB used</div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full" style={{ width: '47%' }} />
            </div>
          </div>
        </BlockContent>
      </Block>

      <Block id="main" className="bg-white">
        <BlockHeader className="px-6 py-3 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Home className="h-4 w-4" />
              <ChevronRight className="h-4 w-4" />
              <span>Projects</span>
            </div>
            <button className="p-1 hover:bg-slate-100 rounded">
              <MoreVertical className="h-5 w-5 text-slate-600" />
            </button>
          </div>
        </BlockHeader>

        <BlockContent>
          <div className="p-6">
            <div className="grid grid-cols-1 gap-1">
              {/* Header */}
              <div className="grid grid-cols-[1fr_100px_120px] gap-4 px-4 py-2 text-xs font-semibold text-slate-500 border-b border-slate-200">
                <div>Name</div>
                <div>Size</div>
                <div>Modified</div>
              </div>

              {/* Files */}
              {files.map((item) => {
                const Icon = getFileIcon(item);
                const isSelected = selectedFile === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedFile(item.id)}
                    className={`grid grid-cols-[1fr_100px_120px] gap-4 px-4 py-3 rounded-lg text-sm transition-colors ${
                      isSelected
                        ? 'bg-blue-50 border border-blue-200'
                        : 'hover:bg-slate-50 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <Icon className={`h-5 w-5 flex-shrink-0 ${
                        item.type === 'folder' ? 'text-blue-500' : 'text-slate-400'
                      }`} />
                      <span className={`truncate ${
                        item.type === 'folder' ? 'font-medium text-slate-900' : 'text-slate-700'
                      }`}>
                        {item.name}
                      </span>
                    </div>
                    <div className="text-slate-500 text-left">
                      {item.size || '—'}
                    </div>
                    <div className="text-slate-500 text-left">
                      {item.modified}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </BlockContent>
      </Block>
    </Grid>
  );
}
