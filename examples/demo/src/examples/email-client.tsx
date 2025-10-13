import React, { useState } from 'react'
import { Grid } from '@/components/grid/grid'
import { Block } from '@/components/grid/block'
import { BlockLayout } from '@/components/grid/block-layout'
import { BlockContent } from '@/components/grid/block-content'
import { BlockHeader } from '@/components/grid/block-header'
import { useBlockState, useGridActions } from '@/components/grid/grid-provider'
import type { BlockConfig } from '@/lib/grid-types'
import { Inbox, Send, Archive, Trash2, Star, Mail, Search, Paperclip, Reply, Forward, PanelLeftClose, PanelLeft } from 'lucide-react'

const emailLayout: BlockConfig[] = [
  {
    id: 'root',
    type: 'group',
    direction: 'row',
    order: 0
  },
  {
    id: 'folders',
    type: 'block',
    defaultSize: 200,
    minSize: 60,
    maxSize: 300,
    sizeUnit: 'px',
    collapseTo: 60,
    parentId: 'root',
    order: 0
  },
  {
    id: 'email-list',
    type: 'block',
    defaultSize: 350,
    minSize: 300,
    maxSize: 500,
    sizeUnit: 'px',
    parentId: 'root',
    order: 1
  },
  {
    id: 'email-preview',
    type: 'block',
    defaultSize: 1,
    sizeUnit: 'fr',
    parentId: 'root',
    order: 2
  }
]

type Folder = 'inbox' | 'sent' | 'starred' | 'archive' | 'trash'

interface Email {
  id: string
  from: string
  subject: string
  preview: string
  time: string
  folder: Folder
  hasAttachments?: boolean
  isStarred?: boolean
  body: string
}

const emailDatabase: Email[] = [
  {
    id: '1',
    from: 'Sarah Johnson',
    subject: 'Q4 Budget Review Meeting',
    preview: 'Hi team, I wanted to schedule a meeting to review the Q4 budget allocations and discuss any necessary adjustments...',
    time: '10:30 AM',
    folder: 'inbox',
    hasAttachments: true,
    body: `Hi team,

I wanted to schedule a meeting to review the Q4 budget allocations and discuss any necessary adjustments based on our current performance metrics.

Key topics for discussion:
• Review of Q3 spending vs. projections
• Q4 budget reallocation proposals
• New project funding requests
• Cost optimization opportunities

Please review the attached documents before the meeting and come prepared with your questions and suggestions.

Best regards,
Sarah Johnson
Finance Director`
  },
  {
    id: '2',
    from: 'Marketing Team',
    subject: 'New Campaign Performance Report',
    preview: "The latest campaign metrics are in. We've seen a 25% increase in engagement across all channels...",
    time: 'Yesterday',
    folder: 'inbox',
    body: `The latest campaign metrics are in. We've seen a 25% increase in engagement across all channels.

Key highlights:
• Social media reach up 35%
• Email open rates improved to 28%
• Website traffic increased by 42%
• Conversion rate holding steady at 3.2%

The team has done an excellent job optimizing our messaging and targeting. Let's keep this momentum going!`
  },
  {
    id: '3',
    from: 'John Martinez',
    subject: 'Project Milestone Update',
    preview: "Great news! We've completed the first milestone ahead of schedule. The team has been working really hard...",
    time: '2 days ago',
    folder: 'inbox',
    isStarred: true,
    body: `Great news! We've completed the first milestone ahead of schedule.

The team has been working really hard and I'm proud to announce we're 2 weeks ahead of our timeline. Here's what we've accomplished:

✓ Backend API fully implemented
✓ Database schema finalized and tested
✓ Authentication system deployed
✓ Initial UI mockups approved

Next up: Frontend development begins next week. Thanks everyone for the amazing effort!`
  },
  {
    id: '4',
    from: 'You',
    subject: 'Re: Design Review Feedback',
    preview: 'Thanks for the detailed feedback on the mockups. I have incorporated most of your suggestions...',
    time: '3 days ago',
    folder: 'sent',
    body: `Thanks for the detailed feedback on the mockups. I have incorporated most of your suggestions and the designs are looking much better now.

I have updated:
• Color contrast for accessibility
• Spacing in the navigation
• Button hierarchy
• Mobile responsive breakpoints

The revised designs are in Figma. Let me know if you would like to schedule another review session.`
  },
  {
    id: '5',
    from: 'Design Team',
    subject: 'UI Component Library v2.0',
    preview: 'Excited to announce our new component library is ready for production use...',
    time: '1 week ago',
    folder: 'starred',
    isStarred: true,
    body: `Excited to announce our new component library v2.0 is ready for production use!

New components:
• Advanced data tables
• Multi-step forms
• Notification system
• File upload with preview
• Rich text editor

Documentation and Storybook examples are available. Migration guide attached for teams using v1.x.`
  }
]

const folders = [
  { id: 'inbox' as Folder, name: 'Inbox', icon: Inbox, count: emailDatabase.filter(e => e.folder === 'inbox').length },
  { id: 'sent' as Folder, name: 'Sent', icon: Send, count: emailDatabase.filter(e => e.folder === 'sent').length },
  { id: 'starred' as Folder, name: 'Starred', icon: Star, count: emailDatabase.filter(e => e.folder === 'starred' || e.isStarred).length },
  { id: 'archive' as Folder, name: 'Archive', icon: Archive, count: emailDatabase.filter(e => e.folder === 'archive').length },
  { id: 'trash' as Folder, name: 'Trash', icon: Trash2, count: emailDatabase.filter(e => e.folder === 'trash').length },
]

// Inner component that uses grid hooks (must be inside Grid context)
const EmailClientContent: React.FC<{
  selectedFolder: Folder
  setSelectedFolder: (folder: Folder) => void
  selectedEmail: Email
  setSelectedEmail: (email: Email) => void
}> = ({ selectedFolder, setSelectedFolder, selectedEmail, setSelectedEmail }) => {
  // Access folders block state and grid actions (inside Grid context)
  const foldersBlock = useBlockState('folders')
  const { collapseBlock, expandBlock } = useGridActions()

  const filteredEmails = emailDatabase.filter(email => email.folder === selectedFolder)

  return (
    <>
      {/* Folder List */}
      <Block id="folders" className="bg-white border-r border-slate-200">
        <BlockLayout>
          <BlockHeader className="p-4 border-b border-slate-200">
            {foldersBlock?.isCollapsed ? (
              <button
                className="w-full p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center justify-center"
                title="Compose"
              >
                <Mail className="w-4 h-4" />
              </button>
            ) : (
              <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
                Compose
              </button>
            )}
          </BlockHeader>

          <BlockContent className="p-2">
            <nav className={foldersBlock?.isCollapsed ? 'space-y-2' : 'space-y-1'}>
              {folders.map((folder) => {
                const Icon = folder.icon
                const isActive = selectedFolder === folder.id
                return (
                  <button
                    key={folder.id}
                    onClick={() => {
                      setSelectedFolder(folder.id)
                      const firstEmail = emailDatabase.find(e =>
                        folder.id === 'starred' ? e.isStarred : e.folder === folder.id
                      )
                      if (firstEmail) setSelectedEmail(firstEmail)
                    }}
                    className={`flex items-center rounded-lg w-full transition-colors relative ${
                      foldersBlock?.isCollapsed
                        ? 'justify-center p-2'
                        : 'gap-3 px-3 py-2'
                    } ${
                      isActive
                        ? 'bg-blue-50 text-blue-600'
                        : 'hover:bg-slate-50 text-slate-700'
                    }`}
                    title={foldersBlock?.isCollapsed ? folder.name : undefined}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    {!foldersBlock?.isCollapsed && (
                      <>
                        <span className="text-sm font-medium">{folder.name}</span>
                        {folder.count > 0 && (
                          <span className={`ml-auto text-xs px-2 py-0.5 rounded-full ${
                            isActive
                              ? 'bg-blue-600 text-white'
                              : 'bg-slate-200 text-slate-600'
                          }`}>
                            {folder.count}
                          </span>
                        )}
                      </>
                    )}
                    {foldersBlock?.isCollapsed && folder.count > 0 && (
                      <span className={`absolute -top-1 -right-1 text-xs px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-200 text-slate-600'
                      }`}>
                        {folder.count}
                      </span>
                    )}
                  </button>
                )
              })}
            </nav>
          </BlockContent>
        </BlockLayout>
      </Block>

      {/* Email List */}
      <Block id="email-list" className="bg-white border-r border-slate-200">
        <BlockLayout>
          <BlockHeader className="p-4 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (foldersBlock?.isCollapsed) {
                    expandBlock('folders')
                  } else {
                    collapseBlock('folders')
                  }
                }}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                title={foldersBlock?.isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              >
                {foldersBlock?.isCollapsed ? (
                  <PanelLeft className="w-4 h-4 text-slate-600" />
                ) : (
                  <PanelLeftClose className="w-4 h-4 text-slate-600" />
                )}
              </button>
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search emails..."
                  className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </BlockHeader>

          <BlockContent>
            <div className="divide-y divide-slate-200">
              {filteredEmails.length === 0 ? (
                <div className="p-8 text-center text-slate-500">
                  <Mail className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No emails in {selectedFolder}</p>
                </div>
              ) : (
                filteredEmails.map((email) => {
                  const isSelected = selectedEmail.id === email.id
                  return (
                    <button
                      key={email.id}
                      onClick={() => setSelectedEmail(email)}
                      className={`w-full text-left p-4 hover:bg-slate-50 cursor-pointer transition-colors ${
                        isSelected ? 'bg-blue-50 border-l-4 border-l-blue-600' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between mb-1">
                        <span className={`font-semibold text-sm ${isSelected ? 'text-slate-900' : 'text-slate-900'}`}>
                          {email.from}
                        </span>
                        <span className="text-xs text-slate-500">{email.time}</span>
                      </div>
                      <div className={`text-sm mb-1 ${isSelected ? 'font-medium text-slate-900' : 'text-slate-900'}`}>
                        {email.subject}
                      </div>
                      <p className="text-sm text-slate-600 line-clamp-2">
                        {email.preview}
                      </p>
                      {(email.hasAttachments || email.isStarred) && (
                        <div className="flex items-center gap-2 mt-2">
                          {email.hasAttachments && (
                            <>
                              <Paperclip className="w-3 h-3 text-slate-400" />
                              <span className="text-xs text-slate-500">2 attachments</span>
                            </>
                          )}
                          {email.isStarred && (
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 ml-auto" />
                          )}
                        </div>
                      )}
                    </button>
                  )
                })
              )}
            </div>
          </BlockContent>
        </BlockLayout>
      </Block>

      {/* Email Preview */}
      <Block id="email-preview" className="bg-white">
        <BlockLayout>
          <BlockHeader className="p-6 border-b border-slate-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-slate-900 mb-2">
                  {selectedEmail.subject}
                </h2>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="font-medium text-slate-900">{selectedEmail.from}</span>
                  {selectedEmail.from !== 'You' && (
                    <span>&lt;{selectedEmail.from.toLowerCase().replace(' ', '.')}@company.com&gt;</span>
                  )}
                </div>
              </div>
              <span className="text-sm text-slate-500">{selectedEmail.time}</span>
            </div>

            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors">
                <Reply className="w-4 h-4" />
                Reply
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 hover:bg-slate-50 text-slate-700 rounded text-sm transition-colors">
                <Forward className="w-4 h-4" />
                Forward
              </button>
              <button className="ml-auto p-1.5 hover:bg-slate-100 rounded transition-colors">
                <Archive className="w-4 h-4 text-slate-600" />
              </button>
              <button className="p-1.5 hover:bg-slate-100 rounded transition-colors">
                <Trash2 className="w-4 h-4 text-slate-600" />
              </button>
            </div>
          </BlockHeader>

          <BlockContent className="p-6">
            <div className="prose max-w-none">
              <div className="text-slate-700 whitespace-pre-line">
                {selectedEmail.body}
              </div>

              {selectedEmail.hasAttachments && (
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <h3 className="text-sm font-semibold text-slate-900 mb-3">Attachments (2)</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
                      <div className="p-2 bg-blue-100 rounded">
                        <Paperclip className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-slate-900">Q3-Budget-Report.pdf</div>
                        <div className="text-xs text-slate-500">2.4 MB</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
                      <div className="p-2 bg-green-100 rounded">
                        <Paperclip className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-slate-900">Q4-Projections.xlsx</div>
                        <div className="text-xs text-slate-500">1.8 MB</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </BlockContent>
        </BlockLayout>
      </Block>
    </>
  )
}

const EmailClient: React.FC = () => {
  const [selectedFolder, setSelectedFolder] = useState<Folder>('inbox')
  const [selectedEmail, setSelectedEmail] = useState<Email>(emailDatabase[0])

  return (
    <Grid
      defaultLayout={emailLayout}
      dividers="auto"
      className="h-dvh bg-slate-50"
    >
      <EmailClientContent
        selectedFolder={selectedFolder}
        setSelectedFolder={setSelectedFolder}
        selectedEmail={selectedEmail}
        setSelectedEmail={setSelectedEmail}
      />
    </Grid>
  )
}

export default EmailClient
