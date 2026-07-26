import React, { useState, useEffect, Component } from 'react';

// Initialize Supabase using Vercel Environment Variables and CDN script
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = window.supabase?.createClient(supabaseUrl, supabaseKey);

// --- SVG ICONS ---
const Crosshair = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/>
  </svg>
);

const Users = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const BookOpen = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
);

const TrendingUp = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
  </svg>
);

const LogOut = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
);

const Plus = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);

const Loader2 = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/>
  </svg>
);

const Trash2 = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
  </svg>
);

const Edit = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);

const Save = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>
  </svg>
);

const X = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

// --- THEME & CONSTANTS ---
export const COLORS = {
  bg: '#1B1A17',
  surface: '#24211D',
  surfaceAlt: '#2D2A25',
  border: '#3A3732',
  text: '#F2EEE5',
  textMuted: '#A8A195',
  red: '#C62828',
  brass: '#B08D57',
  olive: '#556B2F',
};

export const FONT_STYLE = `
body { margin: 0; padding: 0; background: ${COLORS.bg}; color: ${COLORS.text}; font-family: Arial, sans-serif; }
.font-display { letter-spacing: .05em; }
.font-mono { font-family: monospace; }
`;

export const DISCIPLINES = ['10m Air Rifle', '10m Air Pistol', '25m Sport Pistol', '50m Rifle 3 Positions', 'Trap', 'Skeet'];

export function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

export function generateTeamCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 5; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}

// --- UI COMPONENTS ---
function Button({ children, onClick, type = 'button', variant = 'primary', disabled = false, ariaLabel }) {
  const styles = {
    primary: { background: COLORS.red, color: '#fff', border: 'none' },
    ghost: { background: 'transparent', color: COLORS.textMuted, border: `1px solid ${COLORS.border}` },
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      style={{
        ...styles[variant],
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        padding: '10px 14px',
        borderRadius: 6,
      }}
    >
      {children}
    </button>
  );
}

function Input({ label, ...props }) {
  return (
    <div style={{ marginBottom: 12 }}>
      {label && <label style={{ display: 'block', marginBottom: 6, color: COLORS.textMuted, fontSize: 12 }}>{label}</label>}
      <input
        {...props}
        style={{
          width: '100%',
          padding: 10,
          background: COLORS.surfaceAlt,
          color: COLORS.text,
          border: `1px solid ${COLORS.border}`,
          borderRadius: 4,
          boxSizing: 'border-box',
        }}
      />
    </div>
  );
}

function Card({ children }) {
  return (
    <div style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: 6, padding: 16, marginBottom: 16 }}>
      {children}
    </div>
  );
}

function Reticle({ size = 100 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" stroke={COLORS.brass} strokeWidth="1" fill="none" />
      <circle cx="50" cy="50" r="30" stroke={COLORS.brass} strokeWidth="1" fill="none" />
      <circle cx="50" cy="50" r="15" stroke={COLORS.brass} strokeWidth="1" fill="none" />
      <line x1="0" y1="50" x2="100" y2="50" stroke={COLORS.brass} />
      <line x1="50" y1="0" x2="50" y2="100" stroke={COLORS.brass} />
      <circle cx="50" cy="50" r="3" fill={COLORS.red} />
    </svg>
  );
}

// --- AUTH SCREEN (SUPABASE AUTH INTEGRATED) ---
function AuthScreen({ onAuthed }) {
  const [mode, setMode] = useState('login');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('shooter');
  const [teamMode, setTeamMode] = useState('join');
  const [teamName, setTeamName] = useState('');
  const [teamCode, setTeamCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function login(e) {
    e.preventDefault();
    if (!email || !password) return setError('Please enter your email and password');
    setLoading(true);
    setError('');

    const { data, error: authError } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
    }
  }

  async function signup(e) {
    e.preventDefault();
    if (!email || !password || !displayName) return setError('Fill all required fields');
    setLoading(true);
    setError('');

    let finalTeamCode = teamCode.trim().toUpperCase();

    if (teamMode === 'create') {
      if (!teamName.trim()) {
        setLoading(false);
        return setError('Please provide a team name');
      }
      finalTeamCode = generateTeamCode();
      const { error: teamErr } = await supabase.from('teams').insert([
        { code: finalTeamCode, name: teamName.trim() }
      ]);
      if (teamErr) console.log('Team creation notice:', teamErr.message);
    }

    const { data, error: authError } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: {
          display_name: displayName,
          role: role,
          team_code: finalTeamCode,
        }
      }
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
    } else if (data?.user) {
      // Upsert profile in Supabase table
      await supabase.from('profiles').upsert({
        id: data.user.id,
        email: email.trim(),
        display_name: displayName,
        role: role,
        team_code: finalTeamCode,
      });
      alert('Account created successfully!');
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: COLORS.bg, padding: 20 }}>
      <style>{FONT_STYLE}</style>
      <div style={{ width: '100%', maxWidth: 420 }}>
        <Card>
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <Reticle size={64} />
            <h1 className="font-display" style={{ marginBottom: 4 }}>DEADEYE</h1>
            <p style={{ color: COLORS.textMuted, fontSize: 13, margin: 0 }}>Cloud Target Shooting Platform</p>
          </div>

          <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
            <Button variant={mode === 'login' ? 'primary' : 'ghost'} onClick={() => { setMode('login'); setError(''); }}>Login</Button>
            <Button variant={mode === 'signup' ? 'primary' : 'ghost'} onClick={() => { setMode('signup'); setError(''); }}>Sign Up</Button>
          </div>

          {mode === 'login' ? (
            <form onSubmit={login}>
              <Input label="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              {error && <p style={{ color: COLORS.red, fontSize: 14 }}>{error}</p>}
              <Button type="submit" disabled={loading}>{loading ? <Loader2 size={16} /> : 'Login'}</Button>
            </form>
          ) : (
            <form onSubmit={signup}>
              <Input label="Display Name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
              <Input label="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

              <div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
                <Button type="button" variant={role === 'shooter' ? 'primary' : 'ghost'} onClick={() => setRole('shooter')}>Shooter</Button>
                <Button type="button" variant={role === 'coach' ? 'primary' : 'ghost'} onClick={() => setRole('coach')}>Coach</Button>
              </div>

              <div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
                <Button type="button" variant={teamMode === 'create' ? 'primary' : 'ghost'} onClick={() => setTeamMode('create')}>Create Team</Button>
                <Button type="button" variant={teamMode === 'join' ? 'primary' : 'ghost'} onClick={() => setTeamMode('join')}>Join Team</Button>
              </div>

              {teamMode === 'create' ? (
                <Input label="Team Name" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
              ) : (
                <Input label="Team Code" value={teamCode} onChange={(e) => setTeamCode(e.target.value)} />
              )}

              {error && <p style={{ color: COLORS.red, fontSize: 14 }}>{error}</p>}
              <Button type="submit" disabled={loading}>{loading ? <Loader2 size={16} /> : 'Create Account'}</Button>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
}

// --- TEAM TAB (SUPABASE CLOUD SYNCED) ---
function TeamTab({ profile }) {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMembers();
  }, [profile?.team_code]);

  async function fetchMembers() {
    if (!profile?.team_code) {
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from('profiles')
      .select('display_name, email, role')
      .eq('team_code', profile.team_code);

    if (!error && data) {
      setMembers(data);
    }
    setLoading(false);
  }

  if (loading) return <Card><p style={{ color: COLORS.textMuted }}>Loading team roster...</p></Card>;

  return (
    <div>
      <Card>
        <h2 className="font-display" style={{ marginTop: 0 }}>Team Workspace</h2>
        <p style={{ color: COLORS.textMuted, marginTop: 0 }}>Team Code: <span style={{ color: COLORS.brass, fontWeight: 'bold' }}>{profile?.team_code || 'No Team'}</span></p>
      </Card>

      <Card>
        <h3 className="font-display" style={{ marginTop: 0 }}>Roster ({members.length})</h3>
        {members.map((member, idx) => (
          <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: 12, background: COLORS.surfaceAlt, borderRadius: 6, marginBottom: 8 }}>
            <div>
              <div><strong>{member.display_name || member.email}</strong></div>
              <div className="font-mono" style={{ color: COLORS.textMuted, fontSize: 12 }}>{member.email}</div>
            </div>
            <span style={{ color: COLORS.brass, textTransform: 'capitalize' }}>{member.role || 'Member'}</span>
          </div>
        ))}
      </Card>
    </div>
  );
}

// --- DIARY TAB ---
function DiaryTab({ user }) {
  const [entries, setEntries] = useState([]);
  const [text, setText] = useState('');
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    fetchEntries();
  }, [user?.id]);

  async function fetchEntries() {
    const { data } = await supabase
      .from('diary_entries')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (data) setEntries(data);
  }

  async function addEntry() {
    if (!text.trim()) return;
    const { data, error } = await supabase.from('diary_entries').insert([
      { user_id: user.id, date: todayISO(), text: text.trim() }
    ]).select();

    if (!error && data) {
      setEntries([data[0], ...entries]);
      setText('');
    }
  }

  async function deleteEntry(id) {
    await supabase.from('diary_entries').delete().eq('id', id);
    setEntries(entries.filter((e) => e.id !== id));
  }

  return (
    <div>
      <Card>
        <h2 className="font-display" style={{ marginTop: 0 }}>Training Diary</h2>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          placeholder="Log today's sights, wind adjustments, physical status..."
          style={{
            width: '100%',
            padding: 12,
            resize: 'vertical',
            background: COLORS.surfaceAlt,
            color: COLORS.text,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 6,
            boxSizing: 'border-box',
          }}
        />
        <div style={{ marginTop: 12, display: 'flex', gap: 10 }}>
          <Button onClick={addEntry}><Plus size={16} /> Save Entry</Button>
        </div>
      </Card>

      {entries.map((entry) => (
        <Card key={entry.id}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <strong style={{ color: COLORS.brass }}>{entry.date}</strong>
            <Button variant="ghost" onClick={() => deleteEntry(entry.id)}><Trash2 size={15} /></Button>
          </div>
          <p style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{entry.text}</p>
        </Card>
      ))}
    </div>
  );
}

// --- ANNOUNCEMENT TAB ---
function AnnouncementTab({ profile, user }) {
  const [announcements, setAnnouncements] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchAnnouncements();
  }, [profile?.team_code]);

  async function fetchAnnouncements() {
    const { data } = await supabase
      .from('announcements')
      .select('*')
      .eq('team_code', profile?.team_code)
      .order('created_at', { ascending: false });

    if (data) setAnnouncements(data);
  }

  async function addAnnouncement() {
    if (!message.trim()) return;
    const { data, error } = await supabase.from('announcements').insert([
      { team_code: profile?.team_code, author_email: user.email, text: message.trim(), date: todayISO() }
    ]).select();

    if (!error && data) {
      setAnnouncements([data[0], ...announcements]);
      setMessage('');
    }
  }

  return (
    <div>
      <Card>
        <h2 className="font-display" style={{ marginTop: 0 }}>Team Announcements</h2>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="Broadcast a message to your team..."
          style={{
            width: '100%',
            padding: 12,
            resize: 'vertical',
            background: COLORS.surfaceAlt,
            color: COLORS.text,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 6,
            boxSizing: 'border-box',
          }}
        />
        <div style={{ marginTop: 12, display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={addAnnouncement}>Send Broadcast</Button>
        </div>
      </Card>

      {announcements.map((item) => (
        <Card key={item.id}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <strong style={{ color: COLORS.brass }}>{item.date}</strong>
            <span className="font-mono" style={{ color: COLORS.textMuted, fontSize: 12 }}>{item.author_email}</span>
          </div>
          <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{item.text}</p>
        </Card>
      ))}
    </div>
  );
}

// --- PROGRESS TAB ---
function ProgressTab({ profile, user }) {
  const [entries, setEntries] = useState([]);
  const [discipline, setDiscipline] = useState(DISCIPLINES[0]);
  const [score, setScore] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    fetchSessions();
  }, [user?.id]);

  async function fetchSessions() {
    const { data } = await supabase
      .from('progress_logs')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (data) setEntries(data);
  }

  async function addSession() {
    const value = Number(score);
    if (Number.isNaN(value) || score === '') return;

    const { data, error } = await supabase.from('progress_logs').insert([
      {
        user_id: user.id,
        team_code: profile?.team_code,
        discipline,
        score: value,
        notes: notes.trim(),
        date: todayISO(),
      }
    ]).select();

    if (!error && data) {
      setEntries([data[0], ...entries]);
      setScore('');
      setNotes('');
    }
  }

  async function deleteSession(id) {
    await supabase.from('progress_logs').delete().eq('id', id);
    setEntries(entries.filter((e) => e.id !== id));
  }

  return (
    <div>
      <Card>
        <h2 className="font-display" style={{ marginTop: 0 }}>Target Score Entry</h2>
        <Input label="Score" value={score} type="number" onChange={(e) => setScore(e.target.value)} />
        <Input label="Notes / Conditions" value={notes} onChange={(e) => setNotes(e.target.value)} />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={addSession}>Add Target Score</Button>
        </div>
      </Card>

      {entries.map((item) => (
        <Card key={item.id}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div className="font-display">{item.discipline}</div>
              <div className="font-mono" style={{ color: COLORS.textMuted, fontSize: 12 }}>{item.date}</div>
              {item.notes && <p style={{ marginBottom: 0 }}>{item.notes}</p>}
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="font-display" style={{ color: COLORS.brass, fontSize: 24 }}>{item.score}</div>
              <Button variant="ghost" onClick={() => deleteSession(item.id)}>Delete</Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

// --- DASHBOARD ---
function Dashboard({ user, profile, onLogout }) {
  const [tab, setTab] = useState('team');
  const isCoach = profile?.role === 'coach';

  return (
    <div style={{ minHeight: '100vh', background: COLORS.bg, color: COLORS.text }}>
      <style>{FONT_STYLE}</style>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 18, borderBottom: `1px solid ${COLORS.border}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Crosshair color={COLORS.red} />
          <h2 className="font-display" style={{ margin: 0 }}>DEADEYE</h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span>{profile?.display_name || user.email}</span>
          <Button variant="ghost" onClick={onLogout}><LogOut size={16} /></Button>
        </div>
      </header>

      <nav style={{ display: 'flex', borderBottom: `1px solid ${COLORS.border}` }}>
        <button onClick={() => setTab('team')} style={{ flex: 1, padding: 15, cursor: 'pointer', border: 'none', background: tab === 'team' ? COLORS.surfaceAlt : 'transparent', color: tab === 'team' ? COLORS.text : COLORS.textMuted }}>
          <Users size={18} style={{ marginBottom: 4 }} />
          <div>Team</div>
        </button>

        {isCoach ? (
          <button onClick={() => setTab('announce')} style={{ flex: 1, padding: 15, cursor: 'pointer', border: 'none', background: tab === 'announce' ? COLORS.surfaceAlt : 'transparent', color: tab === 'announce' ? COLORS.text : COLORS.textMuted }}>
            <Edit size={18} style={{ marginBottom: 4 }} />
            <div>Announce</div>
          </button>
        ) : (
          <button onClick={() => setTab('diary')} style={{ flex: 1, padding: 15, cursor: 'pointer', border: 'none', background: tab === 'diary' ? COLORS.surfaceAlt : 'transparent', color: tab === 'diary' ? COLORS.text : COLORS.textMuted }}>
            <BookOpen size={18} style={{ marginBottom: 4 }} />
            <div>Diary</div>
          </button>
        )}

        <button onClick={() => setTab('progress')} style={{ flex: 1, padding: 15, cursor: 'pointer', border: 'none', background: tab === 'progress' ? COLORS.surfaceAlt : 'transparent', color: tab === 'progress' ? COLORS.text : COLORS.textMuted }}>
          <TrendingUp size={18} style={{ marginBottom: 4 }} />
          <div>Progress</div>
        </button>
      </nav>

      <main style={{ padding: 20, maxWidth: 900, margin: 'auto' }}>
        {tab === 'team' && <TeamTab profile={profile} />}
        {tab === 'diary' && !isCoach && <DiaryTab user={user} />}
        {tab === 'announce' && isCoach && <AnnouncementTab profile={profile} user={user} />}
        {tab === 'progress' && <ProgressTab profile={profile} user={user} />}
      </main>
    </div>
  );
}

// --- ERROR BOUNDARY ---
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: COLORS.bg, color: COLORS.text }}>
          <div style={{ padding: 24, background: COLORS.surface, border: `1px solid ${COLORS.red}`, borderRadius: 6 }}>
            <p>Application Error</p>
            <pre>{String(this.state.error)}</pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// --- MAIN APP INNER ---
function AppInner() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabase) return;

    // Check auth session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) fetchProfile(session.user.id);
      else setLoading(false);
    });

    // Auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) fetchProfile(session.user.id);
      else {
        setProfile(null);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  async function fetchProfile(userId) {
    const { data } = await supabase.from('profiles').select('*').eq('id', userId).single();
    if (data) setProfile(data);
    setLoading(false);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
  }

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: COLORS.bg }}>
        <Loader2 size={40} color={COLORS.brass} />
      </div>
    );
  }

  if (!user) {
    return <AuthScreen onAuthed={setUser} />;
  }

  return <Dashboard user={user} profile={profile} onLogout={handleLogout} />;
}

export default function App() {
  return (
    <ErrorBoundary>
      <AppInner />
    </ErrorBoundary>
  );
}
