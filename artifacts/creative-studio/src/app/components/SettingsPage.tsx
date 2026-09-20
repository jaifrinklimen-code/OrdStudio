import { supabase } from "@/lib/supabase";
import { useEffect } from "react";
import { useState, useRef } from 'react';
import {
  User, Shield, Check, Sparkles, Camera,
  Bell, Lock, Eye, EyeOff, Download,
  Monitor, Mail, KeyRound, Smartphone, ChevronRight, Save,
  AlertTriangle, Volume2, VolumeX, Globe, Building2, Briefcase, Key, Database
} from 'lucide-react';
type SettingsTab =
  | 'general'
  | 'security';

interface SaveState {
  section: string;
  show: boolean;
}

/* ── Stable sub-components (defined outside to avoid re-mount on re-render) ── */

function ToggleSwitch({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className={`relative rounded-full transition-all duration-300 focus:outline-none cursor-pointer w-11 h-6 ${
        enabled ? 'bg-purple-500 shadow-[0_0_12px_rgba(139,92,246,0.3)]' : 'bg-white/[0.08]'
      }`}
    >
      <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all duration-300 shadow-sm ${
        enabled ? 'left-[22px]' : 'left-0.5'
      }`} />
    </button>
  );
}

function SaveButton({ section, onSave, isSaved, hasChanges }: {
  section: string;
  onSave: (section: string) => void;
  isSaved: boolean;
  hasChanges: boolean;
}) {
  return (
    <button
      onClick={() => onSave(section)}
      className={`h-9 px-5 rounded-xl text-white font-bold text-[12px] flex items-center gap-2 cursor-pointer transition-all duration-300 shadow-lg ${
        isSaved
          ? 'bg-emerald-500 shadow-emerald-500/20'
          : hasChanges
            ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 shadow-amber-500/20 hover:shadow-amber-500/30 animate-pulse'
            : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-purple-500/15 hover:shadow-purple-500/30'
      }`}
    >
      {isSaved ? (
        <>
          <Check size={14} />
          Saved!
        </>
      ) : hasChanges ? (
        <>
          <Save size={14} />
          Save Changes
          <span className="w-2 h-2 rounded-full bg-white animate-ping" />
        </>
      ) : (
        <>
          <Save size={14} />
          Save Changes
        </>
      )}
    </button>
  );
}

function SectionCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm transition-all duration-300 hover:border-white/[0.1] ${className}`}>
      {children}
    </div>
  );
}

/* ── Main Settings Page ── */

export function SettingsPage() {
  const [activeSection, setActiveSection] =
    useState<SettingsTab>('general');
  const [user, setUser] = useState<any>(null);

  // Profile state — draft values (editable in form)
  const [name, setName] = useState(() =>
    localStorage.getItem('ord_name') || 'User'
  );
  const [email, setEmail] = useState(() =>
    localStorage.getItem('ord_email') || ''
  );
  const [bio, setBio] = useState(() =>
    localStorage.getItem('ord_bio') || ''
  );
  const [theme, setTheme] = useState(
    localStorage.getItem("ord_theme") || "dark"
  );
  const [org, setOrg] = useState(() =>
    localStorage.getItem('ord_org') || 'Personal Workspace'
  );
  const [role, setRole] = useState(() =>
    localStorage.getItem('ord_role') || 'Creative Designer'
  );
  const [lang, setLang] = useState(() =>
    localStorage.getItem('ord_lang') || 'en'
  );
  const [tz, setTz] = useState(() =>
    localStorage.getItem('ord_tz') || 'UTC'
  );

  const [savedName, setSavedName] = useState(() =>
    localStorage.getItem('ord_name') || 'User'
  );
  const [savedEmail, setSavedEmail] = useState(() =>
    localStorage.getItem('ord_email') || ''
  );
  const [savedBio, setSavedBio] = useState(() => localStorage.getItem('ord_bio') || '');
  
  const [savedOrg, setSavedOrg] = useState(() =>
    localStorage.getItem('ord_org') || 'Personal Workspace'
  );
  const [savedRole, setSavedRole] = useState(() =>
    localStorage.getItem('ord_role') || 'Creative Designer'
  );
  const [savedLang, setSavedLang] = useState(() =>
    localStorage.getItem('ord_lang') || 'en'
  );
  const [savedTz, setSavedTz] = useState(() =>
    localStorage.getItem('ord_tz') || 'UTC'
  );

  // Notifications state
  const [emailNotifs, setEmailNotifs] = useState(() => {
    const saved = localStorage.getItem('ord_email_notifs');
    return saved !== null ? saved === 'true' : true;
  });
  const [exportNotifs, setExportNotifs] = useState(() => {
    const saved = localStorage.getItem('ord_export_notifs');
    return saved !== null ? saved === 'true' : true;
  });
  const [soundEnabled, setSoundEnabled] = useState(() => {
    const saved = localStorage.getItem('ord_sound_enabled');
    return saved !== null ? saved === 'true' : true;
  });
  const [weeklyDigest, setWeeklyDigest] = useState(() => {
    const saved = localStorage.getItem('ord_weekly_digest');
    return saved !== null ? saved === 'true' : false;
  });
  const [inAppNotifs, setInAppNotifs] = useState(() => {
    const saved = localStorage.getItem('ord_in_app_notifs');
    return saved !== null ? saved === 'true' : true;
  });
  const [pushNotifs, setPushNotifs] = useState(() => {
    const saved = localStorage.getItem('ord_push_notifs');
    return saved !== null ? saved === 'true' : false;
  });
  const [newsletter, setNewsletter] = useState(() => {
    const saved = localStorage.getItem('ord_newsletter');
    return saved !== null ? saved === 'true' : false;
  });

  const [savedEmailNotifs, setSavedEmailNotifs] = useState(emailNotifs);
  const [savedExportNotifs, setSavedExportNotifs] = useState(exportNotifs);
  const [savedSoundEnabled, setSavedSoundEnabled] = useState(soundEnabled);
  const [savedWeeklyDigest, setSavedWeeklyDigest] = useState(weeklyDigest);
  const [savedInAppNotifs, setSavedInAppNotifs] = useState(inAppNotifs);
  const [savedPushNotifs, setSavedPushNotifs] = useState(pushNotifs);
  const [savedNewsletter, setSavedNewsletter] = useState(newsletter);

  useEffect(() => {
    const loadUser = async () => {
      const {
        data: { user: authUser },
      } = await supabase.auth.getUser();

      if (authUser) {
        setUser(authUser);

        const fullName =
          authUser.user_metadata?.full_name ||
          authUser.user_metadata?.name ||
          "User";
        const userBio = authUser.user_metadata?.bio || "";
        const userOrg = authUser.user_metadata?.organization || "Personal Workspace";
        const userRole = authUser.user_metadata?.role || "Creative Designer";
        const userLang = authUser.user_metadata?.language || "en";
        const userTz = authUser.user_metadata?.timezone || "UTC";

        setName(fullName);
        setEmail(authUser.email || "");
        setBio(userBio);
        setOrg(userOrg);
        setRole(userRole);
        setLang(userLang);
        setTz(userTz);

        setSavedName(fullName);
        setSavedEmail(authUser.email || "");
        setSavedBio(userBio);
        setSavedOrg(userOrg);
        setSavedRole(userRole);
        setSavedLang(userLang);
        setSavedTz(userTz);

        localStorage.setItem("ord_name", fullName);
        localStorage.setItem("ord_email", authUser.email || "");
        localStorage.setItem("ord_bio", userBio);
        localStorage.setItem("ord_org", userOrg);
        localStorage.setItem("ord_role", userRole);
        localStorage.setItem("ord_lang", userLang);
        localStorage.setItem("ord_tz", userTz);

        // Load notifications from backend metadata
        const backendNotifs = authUser.user_metadata?.notifications || {};
        const emailN = backendNotifs.email !== undefined ? backendNotifs.email : true;
        const exportN = backendNotifs.export !== undefined ? backendNotifs.export : true;
        const soundN = backendNotifs.sound !== undefined ? backendNotifs.sound : true;
        const weeklyN = backendNotifs.weekly !== undefined ? backendNotifs.weekly : false;
        const inAppN = backendNotifs.inApp !== undefined ? backendNotifs.inApp : true;
        const pushN = backendNotifs.push !== undefined ? backendNotifs.push : false;
        const newsN = backendNotifs.newsletter !== undefined ? backendNotifs.newsletter : false;

        setEmailNotifs(emailN);
        setExportNotifs(exportN);
        setSoundEnabled(soundN);
        setWeeklyDigest(weeklyN);
        setInAppNotifs(inAppN);
        setPushNotifs(pushN);
        setNewsletter(newsN);

        setSavedEmailNotifs(emailN);
        setSavedExportNotifs(exportN);
        setSavedSoundEnabled(soundN);
        setSavedWeeklyDigest(weeklyN);
        setSavedInAppNotifs(inAppN);
        setSavedPushNotifs(pushN);
        setSavedNewsletter(newsN);

        localStorage.setItem('ord_email_notifs', String(emailN));
        localStorage.setItem('ord_export_notifs', String(exportN));
        localStorage.setItem('ord_sound_enabled', String(soundN));
        localStorage.setItem('ord_weekly_digest', String(weeklyN));
        localStorage.setItem('ord_in_app_notifs', String(inAppN));
        localStorage.setItem('ord_push_notifs', String(pushN));
        localStorage.setItem('ord_newsletter', String(newsN));
      }
    };    

    loadUser();
  }, []);

  const [avatarColor] = useState(() => {
    const colors = ['from-purple-600 to-indigo-600', 'from-rose-500 to-orange-500', 'from-cyan-500 to-blue-600', 'from-emerald-500 to-teal-600', 'from-amber-500 to-yellow-500'];
    const saved = localStorage.getItem('ord_avatar_color');
    return saved ? colors[parseInt(saved)] || colors[0] : colors[0];
  });

  // Security state
  const [showCurrentPw, setShowCurrentPw] = useState(false);
  const [showNewPw, setShowNewPw] = useState(false);
  const [currentPw, setCurrentPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [twoFactor, setTwoFactor] = useState(false);

  // Save states
  const [saveState, setSaveState] = useState<SaveState>({ section: '', show: false });
  const saveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Detect unsaved changes
  const hasUnsavedChanges =
    name !== savedName ||
    email !== savedEmail ||
    bio !== savedBio ||
    org !== savedOrg ||
    role !== savedRole ||
    lang !== savedLang ||
    tz !== savedTz;

  const hasUnsavedNotifs =
    emailNotifs !== savedEmailNotifs ||
    exportNotifs !== savedExportNotifs ||
    soundEnabled !== savedSoundEnabled ||
    weeklyDigest !== savedWeeklyDigest ||
    inAppNotifs !== savedInAppNotifs ||
    pushNotifs !== savedPushNotifs ||
    newsletter !== savedNewsletter;

  const handleSave = async (section: string) => {
    // Persist to localStorage immediately
    if (section === 'general') {
      localStorage.setItem('ord_name', name);
      localStorage.setItem('ord_email', email);
      localStorage.setItem('ord_bio', bio);
      localStorage.setItem('ord_org', org);
      localStorage.setItem('ord_role', role);
      localStorage.setItem('ord_lang', lang);
      localStorage.setItem('ord_tz', tz);
      
      window.dispatchEvent(new CustomEvent('ord_user_updated', { detail: { name } }));

      setSavedName(name);
      setSavedEmail(email);
      setSavedBio(bio);
      setSavedOrg(org);
      setSavedRole(role);
      setSavedLang(lang);
      setSavedTz(tz);

      try {
        const { data: { user: authUser } } = await supabase.auth.getUser();
        if (authUser) {
          await supabase.auth.updateUser({
            email: email !== authUser.email ? email : undefined,
            data: {
              full_name: name,
              bio: bio,
              organization: org,
              role: role,
              language: lang,
              timezone: tz
            }
          });
        }
      } catch (e) {
        console.error("Error saving general settings to Supabase:", e);
      }
    }

    if (section === 'notifications') {
      localStorage.setItem('ord_email_notifs', String(emailNotifs));
      localStorage.setItem('ord_export_notifs', String(exportNotifs));
      localStorage.setItem('ord_sound_enabled', String(soundEnabled));
      localStorage.setItem('ord_weekly_digest', String(weeklyDigest));
      localStorage.setItem('ord_in_app_notifs', String(inAppNotifs));
      localStorage.setItem('ord_push_notifs', String(pushNotifs));
      localStorage.setItem('ord_newsletter', String(newsletter));

      setSavedEmailNotifs(emailNotifs);
      setSavedExportNotifs(exportNotifs);
      setSavedSoundEnabled(soundEnabled);
      setSavedWeeklyDigest(weeklyDigest);
      setSavedInAppNotifs(inAppNotifs);
      setSavedPushNotifs(pushNotifs);
      setSavedNewsletter(newsletter);

      try {
        const { data: { user: authUser } } = await supabase.auth.getUser();
        if (authUser) {
          await supabase.auth.updateUser({
            data: {
              ...authUser.user_metadata,
              notifications: {
                email: emailNotifs,
                export: exportNotifs,
                sound: soundEnabled,
                weekly: weeklyDigest,
                inApp: inAppNotifs,
                push: pushNotifs,
                newsletter: newsletter
              }
            }
          });
        }
      } catch (e) {
        console.error("Error saving notifications to Supabase:", e);
      }
    }

    // Show success feedback
    setSaveState({ section, show: true });
    if (saveTimeout.current) clearTimeout(saveTimeout.current);
    saveTimeout.current = setTimeout(() => setSaveState({ section: '', show: false }), 3000);
  };

  const getInitials = (n: string) => {
    return n.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  };

const tabs: {
  id: SettingsTab;
  label: string;
  icon: any;
  color: string;
}[] = [
  { id: 'general', label: 'General', icon: User, color: 'text-purple-400' },
  { id: 'security', label: 'Security', icon: Shield, color: 'text-rose-400' },
];
  const renderGeneral = () => (
    <div className="flex flex-col gap-5">
      {/* Avatar + Name Card */}
      <SectionCard>
        <div className="flex items-start gap-5">
          <div className="relative group">
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-tr ${avatarColor} flex items-center justify-center text-2xl font-bold text-white shadow-xl shadow-purple-500/10 transition-transform duration-300 group-hover:scale-105`}>
              {getInitials(name)}
            </div>
            <div className="absolute inset-0 rounded-2xl bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center cursor-pointer">
              <Camera size={20} className="text-white" />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <h3 className="text-2xl font-bold text-white">
              Hello, {name} 👋
            </h3>
            <p className="text-white/50 mt-1">
              Manage your OrdStudio account, profile details, and preferences.
            </p>
            <p className="text-[12px] text-white/45">
              {email}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
                ✓ Email Verified
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold">
                🔒 Secure Session
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold">
                ☁️ Synced
              </span>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* Profile Form */}
      <SectionCard>
        <div className="mb-5 border-b border-white/[0.06] pb-4">
          <h2 className="text-[13px] font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <User size={14} className="text-purple-400" /> Personal Information
          </h2>
          <p className="text-xs text-white/40 mt-1">
            Update your account details and profile biography.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider flex items-center gap-2">
              Display Name
              {name !== savedName && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className={`h-11 px-4 rounded-xl bg-white/[0.04] text-white text-[13px] outline-none transition-all placeholder:text-white/20 border ${
                name !== savedName ? 'border-amber-500/40 bg-amber-500/[0.03]' : 'border-white/[0.08] focus:border-purple-500/50 focus:bg-white/[0.06]'
              }`}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider flex items-center gap-2">
              Email Address
              {email !== savedEmail && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className={`h-11 px-4 rounded-xl bg-white/[0.04] text-white text-[13px] outline-none transition-all placeholder:text-white/20 border ${
                email !== savedEmail ? 'border-amber-500/40 bg-amber-500/[0.03]' : 'border-white/[0.08] focus:border-purple-500/50 focus:bg-white/[0.06]'
              }`}
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-2 mt-4">
          <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider">Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell us a little about yourself..."
            rows={2}
            className="px-4 py-3 min-h-[90px] rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-[13px] outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all placeholder:text-white/20 resize-none"
          />
        </div>
      </SectionCard>

      {/* Workplace & Role */}
      <SectionCard>
        <div className="mb-5 border-b border-white/[0.06] pb-4">
          <h2 className="text-[13px] font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Building2 size={14} className="text-cyan-400" /> Workplace & Role
          </h2>
          <p className="text-xs text-white/40 mt-1">
            Specify your professional affiliations and roles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider flex items-center gap-2">
              Organization / Company
              {org !== savedOrg && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
            </label>
            <input
              type="text"
              value={org}
              onChange={(e) => setOrg(e.target.value)}
              placeholder="e.g. Acme Corp"
              className={`h-11 px-4 rounded-xl bg-white/[0.04] text-white text-[13px] outline-none transition-all placeholder:text-white/20 border ${
                org !== savedOrg ? 'border-amber-500/40 bg-amber-500/[0.03]' : 'border-white/[0.08] focus:border-purple-500/50 focus:bg-white/[0.06]'
              }`}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider flex items-center gap-2">
              Job Title / Role
              {role !== savedRole && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
            </label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="e.g. Product Designer"
              className={`h-11 px-4 rounded-xl bg-white/[0.04] text-white text-[13px] outline-none transition-all placeholder:text-white/20 border ${
                role !== savedRole ? 'border-amber-500/40 bg-amber-500/[0.03]' : 'border-white/[0.08] focus:border-purple-500/50 focus:bg-white/[0.06]'
              }`}
            />
          </div>
        </div>
      </SectionCard>

      {/* Regional & System Preferences */}
      <SectionCard>
        <div className="mb-5 border-b border-white/[0.06] pb-4">
          <h2 className="text-[13px] font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Globe size={14} className="text-emerald-400" /> Regional Settings
          </h2>
          <p className="text-xs text-white/40 mt-1">
            Choose your preferred display language and timezone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider flex items-center gap-2">
              Language
              {lang !== savedLang && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
            </label>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className={`h-11 px-3 rounded-xl bg-[#141517] text-white text-[13px] outline-none border transition-all cursor-pointer ${
                lang !== savedLang ? 'border-amber-500/40 bg-amber-500/[0.03]' : 'border-white/[0.08] focus:border-purple-500/50'
              }`}
            >
              <option value="en">English (US)</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="ja">日本語</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider flex items-center gap-2">
              Timezone
              {tz !== savedTz && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
            </label>
            <select
              value={tz}
              onChange={(e) => setTz(e.target.value)}
              className={`h-11 px-3 rounded-xl bg-[#141517] text-white text-[13px] outline-none border transition-all cursor-pointer ${
                tz !== savedTz ? 'border-amber-500/40 bg-amber-500/[0.03]' : 'border-white/[0.08] focus:border-purple-500/50'
              }`}
            >
              <option value="UTC">Coordinated Universal Time (UTC)</option>
              <option value="EST">Eastern Standard Time (EST)</option>
              <option value="CST">Central Standard Time (CST)</option>
              <option value="PST">Pacific Standard Time (PST)</option>
              <option value="GMT">Greenwich Mean Time (GMT)</option>
              <option value="IST">Indian Standard Time (IST)</option>
            </select>
          </div>
        </div>
      </SectionCard>

      {/* Connected Accounts */}
      <SectionCard>
        <div className="mb-5 border-b border-white/[0.06] pb-4">
          <h2 className="text-[13px] font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <KeyRound size={14} className="text-rose-400" /> Connected Accounts
          </h2>
          <p className="text-xs text-white/40 mt-1">
            Manage your integration connections with third-party platforms.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between p-3.5 bg-white/[0.015] border border-white/[0.05] rounded-xl hover:border-white/[0.08] transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 text-xs font-bold font-mono">G</div>
              <div>
                <span className="text-[12px] font-bold text-white block">Google Account</span>
                <span className="text-[10px] text-white/35">Connected as {email || name.toLowerCase().replace(' ', '') + '@gmail.com'}</span>
              </div>
            </div>
            <button className="text-[10px] text-white/60 hover:text-white bg-white/[0.06] border border-white/[0.08] px-3 py-1 rounded-lg font-bold uppercase cursor-pointer transition-colors">
              Disconnect
            </button>
          </div>

          <div className="flex items-center justify-between p-3.5 bg-white/[0.015] border border-white/[0.05] rounded-xl hover:border-white/[0.08] transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 text-xs font-bold font-mono">GH</div>
              <div>
                <span className="text-[12px] font-bold text-white block">GitHub Integration</span>
                <span className="text-[10px] text-white/35">Sync repositories and deploy designs directly</span>
              </div>
            </div>
            <button className="text-[10px] text-purple-400 hover:text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-lg font-bold uppercase cursor-pointer transition-colors">
              Connect
            </button>
          </div>
        </div>
      </SectionCard>

      {/* Save Action Block */}
      <div className="flex items-center justify-between p-4 bg-white/[0.015] border border-white/[0.05] rounded-2xl">
        <span className="text-xs text-white/40">
          {hasUnsavedChanges ? '⚠️ You have unsaved changes' : '✓ All settings are up to date'}
        </span>
        <SaveButton
          section="general"
          onSave={handleSave}
          isSaved={saveState.show && saveState.section === 'general'}
          hasChanges={hasUnsavedChanges}
        />
      </div>

      {saveState.show && saveState.section === 'general' && (
        <div className="flex items-center gap-2 p-3.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-[12px]" style={{ animation: 'fadeSlideIn 0.3s ease' }}>
          <Check size={14} />
          Settings saved successfully to your OrdStudio cloud profile.
        </div>
      )}
    </div>
  );

  const renderSecurity = () => (
    <div className="flex flex-col gap-5">
      {/* Change Password */}
      <SectionCard>
        <div className="flex items-center gap-2 mb-5">
          <Lock size={16} className="text-white/40" />
          <h2 className="text-[13px] font-bold text-white uppercase tracking-wider">Change Password</h2>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider">Current Password</label>
            <div className="relative">
              <input
                type={showCurrentPw ? 'text' : 'password'}
                value={currentPw}
                onChange={(e) => setCurrentPw(e.target.value)}
                placeholder="Enter current password"
                className="w-full h-11 px-4 pr-11 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-[13px] outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all placeholder:text-white/20"
              />
              <button
                onClick={() => setShowCurrentPw(!showCurrentPw)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 cursor-pointer transition-colors"
              >
                {showCurrentPw ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider">New Password</label>
            <div className="relative">
              <input
                type={showNewPw ? 'text' : 'password'}
                value={newPw}
                onChange={(e) => setNewPw(e.target.value)}
                placeholder="Enter new password"
                className="w-full h-11 px-4 pr-11 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-[13px] outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all placeholder:text-white/20"
              />
              <button
                onClick={() => setShowNewPw(!showNewPw)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 cursor-pointer transition-colors"
              >
                {showNewPw ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {newPw.length > 0 && (
              <div className="flex items-center gap-2 mt-1">
                <div className="flex gap-1 flex-1">
                  {[1,2,3,4].map(i => (
                    <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${
                      newPw.length >= i * 4
                        ? newPw.length >= 12 ? 'bg-emerald-500' : newPw.length >= 8 ? 'bg-amber-500' : 'bg-rose-500'
                        : 'bg-white/[0.06]'
                    }`} />
                  ))}
                </div>
                <span className={`text-[10px] font-bold ${
                  newPw.length >= 12 ? 'text-emerald-400' : newPw.length >= 8 ? 'text-amber-400' : 'text-rose-400'
                }`}>
                  {newPw.length >= 12 ? 'Strong' : newPw.length >= 8 ? 'Medium' : 'Weak'}
                </span>
              </div>
            )}
          </div>
          <button
            className="self-start h-9 px-5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-[12px] flex items-center gap-2 cursor-pointer transition-all shadow-lg shadow-purple-500/15 mt-1"
          >
            <KeyRound size={14} />
            Update Password
          </button>
        </div>
      </SectionCard>

      {/* Two-Factor */}
      <SectionCard>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <Smartphone size={18} className="text-emerald-400" />
            </div>
            <div>
              <span className="text-[13px] font-bold text-white block">Two-Factor Authentication</span>
              <span className="text-[11px] text-white/40">Add an extra layer of security to your account</span>
            </div>
          </div>
          <ToggleSwitch enabled={twoFactor} onToggle={() => setTwoFactor(!twoFactor)} />
        </div>
        {twoFactor && (
          <div className="mt-4 p-3 bg-emerald-500/[0.06] border border-emerald-500/15 rounded-xl text-[11.5px] text-emerald-300 flex items-center gap-2" style={{ animation: 'fadeSlideIn 0.3s ease' }}>
            <Check size={14} />
            2FA is enabled. Use your authenticator app to generate codes.
          </div>
        )}
      </SectionCard>

      {/* Active Sessions */}
      <SectionCard>
        <div className="flex items-center gap-2 mb-4">
          <Monitor size={16} className="text-white/40" />
          <h2 className="text-[13px] font-bold text-white uppercase tracking-wider">Active Sessions</h2>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between p-3.5 bg-purple-500/[0.04] border border-purple-500/15 rounded-xl">
            <div className="flex items-center gap-3">
              <Monitor size={16} className="text-purple-400" />
              <div>
                <span className="text-[12px] font-bold text-white block">Windows · Chrome</span>
                <span className="text-[10px] text-white/35">Current session · Last active now</span>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[9px] font-bold uppercase">Active</span>
          </div>
          <div className="flex items-center justify-between p-3.5 bg-white/[0.015] border border-white/[0.05] rounded-xl">
            <div className="flex items-center gap-3">
              <Smartphone size={16} className="text-white/40" />
              <div>
                <span className="text-[12px] font-bold text-white/70 block">Android · OrdStudio App</span>
                <span className="text-[10px] text-white/30">Last active 2 days ago</span>
              </div>
            </div>
            <button className="text-[10px] text-rose-400 hover:text-rose-300 font-bold uppercase cursor-pointer transition-colors">
              Revoke
            </button>
          </div>
        </div>
      </SectionCard>

      {/* Danger Zone */}
      <SectionCard className="border-rose-500/10">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle size={16} className="text-rose-400" />
          <h2 className="text-[13px] font-bold text-rose-400 uppercase tracking-wider">Danger Zone</h2>
        </div>
        <div className="flex items-center justify-between p-4 bg-rose-500/[0.04] border border-rose-500/10 rounded-xl">
          <div>
            <span className="text-[12.5px] font-bold text-white block">Delete Account</span>
            <span className="text-[10.5px] text-white/35">Permanently remove your account and all data</span>
          </div>
          <button className="h-8 px-4 rounded-lg bg-rose-500/15 border border-rose-500/25 text-rose-400 text-[11px] font-bold cursor-pointer hover:bg-rose-500/25 transition-all">
            Delete Account
          </button>
        </div>
      </SectionCard>
    </div>
  );
const renderContent = () => {
  switch (activeSection) {
    case 'general':
      return renderGeneral();

    case 'security':
      return renderSecurity();

    default:
      return renderGeneral();
  }
};

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto p-2">
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Header */}
      <div>
        <h1 className="font-sans font-bold text-2xl text-white tracking-tight">Settings</h1>
        <p className="text-sm text-white/40 mt-1">Manage your profile and security.</p>
      </div>

      {/* Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* Sidebar Nav */}
        <div className="flex flex-col gap-1.5">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSection === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[12.5px] font-semibold text-left transition-all duration-200 cursor-pointer w-full ${
                  isActive
                    ? 'bg-white/[0.05] border border-white/[0.1] text-white shadow-lg shadow-black/10'
                    : 'text-white/45 hover:bg-white/[0.02] hover:text-white/70 border border-transparent'
                }`}
              >
                <Icon size={16} className={isActive ? tab.color : 'text-white/30'} />
                {tab.label}
                {isActive && <ChevronRight size={12} className="ml-auto text-white/25" />}
              </button>
            );
          })}

        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          {renderContent()}
        </div>

      </div>
    </div>
  );
}
