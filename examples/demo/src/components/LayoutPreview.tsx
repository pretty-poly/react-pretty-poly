interface LayoutPreviewProps {
  layout: 'basic-dashboard' | 'ide-layout' | 'email-client' | 'music-daw' | 'file-manager' | 'fixed-sidebar'
}

export function LayoutPreview({ layout }: LayoutPreviewProps) {
  const layouts = {
    'basic-dashboard': (
      <div className="grid grid-cols-[70px_1fr_80px] gap-1 h-32 w-full bg-slate-50 p-2 rounded-lg border border-slate-200">
        {/* Sidebar */}
        <div className="bg-slate-900 rounded flex flex-col gap-1 p-2">
          <div className="h-3 bg-slate-800 rounded"></div>
          <div className="h-2 bg-slate-800 rounded opacity-70"></div>
          <div className="h-2 bg-slate-800 rounded opacity-70"></div>
          <div className="h-2 bg-slate-800 rounded opacity-70"></div>
        </div>

        {/* Main content */}
        <div className="bg-white rounded p-2 flex flex-col gap-1">
          <div className="h-3 bg-slate-200 rounded w-1/3"></div>
          <div className="grid grid-cols-3 gap-1 flex-1">
            <div className="bg-blue-50 rounded border border-blue-200"></div>
            <div className="bg-green-50 rounded border border-green-200"></div>
            <div className="bg-purple-50 rounded border border-purple-200"></div>
          </div>
          <div className="h-8 bg-slate-100 rounded"></div>
        </div>

        {/* Activity panel */}
        <div className="bg-white rounded border border-slate-200 p-2 flex flex-col gap-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-green-500"></div>
            <div className="h-1 bg-slate-200 rounded flex-1"></div>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-blue-500"></div>
            <div className="h-1 bg-slate-200 rounded flex-1"></div>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-yellow-500"></div>
            <div className="h-1 bg-slate-200 rounded flex-1"></div>
          </div>
        </div>
      </div>
    ),

    'ide-layout': (
      <div className="grid grid-cols-[70px_1fr_80px] gap-1 h-32 w-full bg-slate-900 p-2 rounded-lg border border-slate-800">
        {/* File tree */}
        <div className="bg-slate-900 rounded border border-slate-800 p-2 flex flex-col gap-1">
          <div className="h-2 bg-slate-700 rounded w-3/4"></div>
          <div className="h-1.5 bg-slate-800 rounded w-full ml-1"></div>
          <div className="h-1.5 bg-slate-800 rounded w-full ml-1"></div>
          <div className="h-1.5 bg-blue-700 rounded w-full ml-1"></div>
        </div>

        {/* Editor + Terminal */}
        <div className="grid grid-rows-[1fr_60px] gap-1">
          {/* Editor */}
          <div className="bg-slate-950 rounded p-2 flex flex-col gap-0.5">
            <div className="h-1.5 bg-slate-800 rounded w-1/4 mb-1"></div>
            <div className="h-1 bg-purple-500/30 rounded w-3/4"></div>
            <div className="h-1 bg-green-500/30 rounded w-2/3"></div>
            <div className="h-1 bg-blue-500/30 rounded w-1/2"></div>
          </div>

          {/* Terminal */}
          <div className="bg-slate-950 rounded border-t-2 border-slate-800 p-1.5 flex flex-col gap-0.5">
            <div className="h-1 bg-green-500/50 rounded w-3/4"></div>
            <div className="h-1 bg-slate-700 rounded w-1/2"></div>
          </div>
        </div>

        {/* Properties */}
        <div className="bg-slate-900 rounded border border-slate-800 p-2 flex flex-col gap-1">
          <div className="h-2 bg-slate-700 rounded w-3/4"></div>
          <div className="h-1 bg-slate-800 rounded"></div>
          <div className="h-1 bg-slate-800 rounded"></div>
          <div className="h-1 bg-slate-800 rounded w-2/3"></div>
        </div>
      </div>
    ),

    'email-client': (
      <div className="grid grid-cols-[60px_90px_1fr] gap-1 h-32 w-full bg-slate-50 p-2 rounded-lg border border-slate-200">
        {/* Folders */}
        <div className="bg-white rounded border border-slate-200 p-2 flex flex-col gap-1">
          <div className="h-2 bg-blue-600 rounded"></div>
          <div className="flex items-center gap-1">
            <div className="h-1.5 bg-slate-200 rounded flex-1"></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full text-[6px] text-white flex items-center justify-center"></div>
          </div>
          <div className="h-1.5 bg-slate-200 rounded"></div>
          <div className="h-1.5 bg-slate-200 rounded"></div>
          <div className="h-1.5 bg-slate-200 rounded"></div>
        </div>

        {/* Email list */}
        <div className="bg-white rounded border border-slate-200 p-2 flex flex-col gap-1">
          <div className="h-2 bg-slate-100 rounded"></div>
          <div className="bg-blue-50 rounded border-l-2 border-blue-600 p-1 space-y-0.5">
            <div className="h-1 bg-slate-400 rounded w-3/4"></div>
            <div className="h-1 bg-slate-300 rounded w-full"></div>
          </div>
          <div className="bg-white rounded border border-slate-100 p-1 space-y-0.5">
            <div className="h-1 bg-slate-300 rounded w-2/3"></div>
            <div className="h-1 bg-slate-200 rounded w-full"></div>
          </div>
          <div className="bg-white rounded border border-slate-100 p-1 space-y-0.5">
            <div className="h-1 bg-slate-300 rounded w-3/4"></div>
            <div className="h-1 bg-slate-200 rounded w-full"></div>
          </div>
        </div>

        {/* Preview */}
        <div className="bg-white rounded border border-slate-200 p-2 flex flex-col gap-1">
          <div className="flex justify-between items-start mb-1">
            <div className="h-2 bg-slate-700 rounded w-1/2"></div>
            <div className="h-1.5 bg-slate-300 rounded w-1/4"></div>
          </div>
          <div className="flex gap-1 mb-1">
            <div className="h-1.5 bg-blue-600 rounded w-12"></div>
            <div className="h-1.5 bg-slate-200 rounded w-12"></div>
          </div>
          <div className="space-y-0.5 flex-1">
            <div className="h-1 bg-slate-200 rounded"></div>
            <div className="h-1 bg-slate-200 rounded w-5/6"></div>
            <div className="h-1 bg-slate-200 rounded"></div>
            <div className="h-1 bg-slate-200 rounded w-4/5"></div>
          </div>
        </div>
      </div>
    ),

    'music-daw': (
      <div className="grid grid-rows-[1fr_40px] gap-1 h-32 w-full bg-slate-900 p-2 rounded-lg border border-slate-800">
        {/* Main area: Track list + Timeline + Editor */}
        <div className="grid grid-cols-[50px_1fr] gap-1">
          {/* Left: Track list + Instruments */}
          <div className="grid grid-rows-2 gap-1">
            <div className="bg-slate-800 rounded p-1.5 flex flex-col gap-0.5">
              <div className="h-1 bg-slate-700 rounded"></div>
              <div className="h-1 bg-slate-700 rounded"></div>
              <div className="h-1 bg-slate-700 rounded"></div>
            </div>
            <div className="bg-slate-800 rounded p-1.5 flex flex-col gap-0.5">
              <div className="h-1 bg-purple-600/50 rounded w-3/4"></div>
              <div className="h-1 bg-blue-600/50 rounded w-2/3"></div>
            </div>
          </div>

          {/* Right: Timeline + Editor */}
          <div className="grid grid-rows-[1fr_1fr] gap-1">
            {/* Timeline */}
            <div className="bg-slate-950 rounded p-1.5 relative overflow-hidden">
              <div className="absolute inset-0 flex gap-1 p-1">
                <div className="w-0.5 bg-slate-700"></div>
                <div className="w-0.5 bg-slate-700"></div>
                <div className="w-0.5 bg-slate-700"></div>
                <div className="w-0.5 bg-slate-800"></div>
                <div className="w-8 h-2 bg-purple-600/40 rounded-sm mt-1"></div>
                <div className="w-6 h-2 bg-blue-600/40 rounded-sm mt-3"></div>
              </div>
            </div>

            {/* Editor (Piano roll) */}
            <div className="bg-slate-950 rounded p-1.5">
              <div className="grid grid-cols-8 gap-px h-full">
                <div className="bg-slate-700/30 rounded-sm"></div>
                <div className="bg-purple-600/40 rounded-sm"></div>
                <div className="bg-slate-700/30 rounded-sm"></div>
                <div className="bg-slate-700/30 rounded-sm"></div>
                <div className="bg-blue-600/40 rounded-sm"></div>
                <div className="bg-slate-700/30 rounded-sm"></div>
                <div className="bg-slate-700/30 rounded-sm"></div>
                <div className="bg-slate-700/30 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mixer panel (bottom) */}
        <div className="bg-slate-800 rounded p-1.5 flex gap-1 overflow-hidden">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="flex flex-col gap-0.5 w-6">
              <div className="h-full bg-gradient-to-t from-green-500/50 via-yellow-500/30 to-transparent rounded-sm"></div>
              <div className="h-1 bg-slate-600 rounded-sm"></div>
            </div>
          ))}
        </div>
      </div>
    ),

    'file-manager': (
      <div className="grid grid-cols-[70px_1fr] gap-1 h-32 w-full bg-slate-50 p-2 rounded-lg border border-slate-200">
        {/* Sidebar */}
        <div className="bg-white rounded border border-slate-200 p-2 flex flex-col gap-1">
          <div className="h-2 bg-slate-200 rounded w-3/4 mb-1"></div>
          <div className="flex items-center gap-1 bg-blue-50 rounded p-1">
            <div className="w-2 h-2 bg-blue-500 rounded"></div>
            <div className="h-1 bg-blue-600 rounded flex-1"></div>
          </div>
          <div className="flex items-center gap-1 rounded p-1">
            <div className="w-2 h-2 bg-slate-400 rounded"></div>
            <div className="h-1 bg-slate-300 rounded flex-1"></div>
          </div>
          <div className="flex items-center gap-1 rounded p-1">
            <div className="w-2 h-2 bg-slate-400 rounded"></div>
            <div className="h-1 bg-slate-300 rounded flex-1"></div>
          </div>
          <div className="flex items-center gap-1 rounded p-1">
            <div className="w-2 h-2 bg-slate-400 rounded"></div>
            <div className="h-1 bg-slate-300 rounded flex-1"></div>
          </div>
        </div>

        {/* File list */}
        <div className="bg-white rounded border border-slate-200 p-2 flex flex-col gap-0.5">
          <div className="h-1.5 bg-slate-200 rounded w-1/4 mb-1"></div>
          <div className="flex items-center gap-2 p-1 bg-blue-50 border border-blue-200 rounded">
            <div className="w-2 h-2 bg-blue-500 rounded"></div>
            <div className="h-1 bg-slate-600 rounded flex-1"></div>
          </div>
          <div className="flex items-center gap-2 p-1">
            <div className="w-2 h-2 bg-slate-400 rounded"></div>
            <div className="h-1 bg-slate-400 rounded flex-1"></div>
          </div>
          <div className="flex items-center gap-2 p-1">
            <div className="w-2 h-2 bg-slate-400 rounded"></div>
            <div className="h-1 bg-slate-400 rounded flex-1"></div>
          </div>
          <div className="flex items-center gap-2 p-1">
            <div className="w-2 h-2 bg-slate-400 rounded"></div>
            <div className="h-1 bg-slate-400 rounded flex-1"></div>
          </div>
        </div>
      </div>
    ),

    'fixed-sidebar': (
      <div className="grid grid-cols-[55px_1fr_70px] gap-1 h-32 w-full bg-slate-50 p-2 rounded-lg border border-slate-200">
        {/* Fixed sidebar with lock indicator */}
        <div className="bg-slate-900 rounded p-2 flex flex-col gap-1 relative">
          {/* Lock icon indicator */}
          <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full flex items-center justify-center">
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
          <div className="h-2 bg-slate-800 rounded w-3/4"></div>
          <div className="h-1.5 bg-slate-800 rounded opacity-70"></div>
          <div className="h-1.5 bg-slate-800 rounded opacity-70"></div>
          <div className="h-1.5 bg-slate-800 rounded opacity-70"></div>
          <div className="flex-1"></div>
          <div className="h-1 bg-red-600/30 rounded text-center text-[6px] text-red-300"></div>
        </div>

        {/* Main content */}
        <div className="bg-white rounded border border-slate-200 p-2 flex flex-col gap-1">
          <div className="h-2 bg-slate-200 rounded w-1/3"></div>
          <div className="bg-blue-50 rounded border border-blue-200 p-1.5 flex-1">
            <div className="space-y-1">
              <div className="h-1 bg-slate-300 rounded w-full"></div>
              <div className="h-1 bg-slate-300 rounded w-5/6"></div>
              <div className="h-1 bg-slate-300 rounded w-4/6"></div>
            </div>
          </div>
        </div>

        {/* Resizable properties panel with unlock indicator */}
        <div className="bg-white rounded border border-slate-200 p-2 flex flex-col gap-1 relative">
          {/* Unlock icon indicator */}
          <div className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full flex items-center justify-center">
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="bg-slate-50 rounded p-1 space-y-0.5">
            <div className="h-1 bg-slate-300 rounded w-2/3"></div>
            <div className="h-1 bg-slate-200 rounded"></div>
          </div>
          <div className="bg-slate-50 rounded p-1 space-y-0.5">
            <div className="h-1 bg-slate-300 rounded w-3/4"></div>
            <div className="h-1 bg-slate-200 rounded"></div>
          </div>
          <div className="flex-1"></div>
          <div className="h-1 bg-green-600/30 rounded"></div>
        </div>
      </div>
    ),
  }

  return layouts[layout]
}
