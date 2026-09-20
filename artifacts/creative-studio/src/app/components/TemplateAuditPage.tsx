import React from 'react';
import { ArrowLeft, ShieldCheck, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

import { CANONICAL_FALLBACK_TEMPLATES } from '../lib/canonicalTemplates';

export function TemplateAuditPage() {
  return (
    <div className="min-h-screen bg-[#090d16] text-white flex flex-col">
      <div className="h-14 border-b border-white/10 bg-[#111827]/80 backdrop-blur-md px-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <Link
            to="/dashboard"
            className="flex items-center gap-1.5 text-xs text-white/70 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Studio
          </Link>
          <div className="h-4 w-px bg-white/15 mx-1" />
          <div className="flex items-center gap-2 text-xs font-semibold text-purple-400">
            <ShieldCheck size={16} />
            <span>Developer Internal — Template Diversity & Quality Audit</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-white/50 font-mono">
          <Cpu size={13} className="text-emerald-400" />
          <span>Single Source of Truth: canonicalTemplates.ts ({CANONICAL_FALLBACK_TEMPLATES.length} templates)</span>
        </div>
      </div>
      <div className="flex-1 w-full bg-[#090d16]">
        <iframe
          src="/contact_sheet.html"
          title="Template Diversity Catalog"
          className="w-full h-[calc(100vh-56px)] border-none"
        />
      </div>
    </div>
  );
}
