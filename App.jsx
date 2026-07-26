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
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 1 4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
);

const TrendingUp = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
  </svg>
);

const Bot = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/>
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

const Camera = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>
  </svg>
);

const Send = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
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

export const DISCIPLINES = [
  '10m Air Rifle',
  '10m Air Pistol',
  '25m Sport Pistol',
  '25m Rapid Fire Pistol',
  '50m Rifle 3 Positions',
  '50m Rifle Prone',
  'Trap',
  'Skeet'
];

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

// --- AUTH SCREEN ---
function AuthScreen({ onAuthed }) {
  const [mode, setMode] = useState('login');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('shooter');
  const [category, setCategory] = useState(DISCIPLINES[0]);
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
          category: role === 'shooter' ? category : null,
          team_code: finalTeamCode,
        }
      }
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
    } else if (data?.user) {
      await supabase.from('profiles').upsert({
        id: data.user.id,
        email: email.trim(),
        display_name: displayName,
        role: role,
        category: role === 'shooter' ? category : null,
        team_code: finalTeamCode,
      });

      if (role === 'coach') {
        await supabase.from('coach_teams').insert([
          { coach_id: data.user.id, team_code: finalTeamCode }
        ]);
      }

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

              {role === 'shooter' && (
                <div style={{ marginBottom: 12 }}>
                  <label style={{ display: 'block', marginBottom: 6, color: COLORS.textMuted, fontSize: 12 }}>Shooting Category / Event</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={{
                      width: '100%',
                      padding: 10,
                      background: COLORS.surfaceAlt,
                      color: COLORS.text,
                      border: `1px solid ${COLORS.border}`,
                      borderRadius: 4,
                      boxSizing: 'border-box',
                    }}
                  >
                    {DISCIPLINES.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
              )}

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

// --- TEAM TAB (WITH MULTI-TEAM SWITCHING & DIRECT MESSAGING) ---
function TeamTab({ profile, activeTeamCode, coachTeams = [], onSelectTeam, onTeamAdded }) {
  const [members, setMembers] = useState([]);
  const [teamName, setTeamName] = useState('');
  const [loading, setLoading] = useState(true);
  const [newTeamCode, setNewTeamCode] = useState('');
  const [updating, setUpdating] = useState(false);

  const [selectedShooter, setSelectedShooter] = useState(null);
  const [shooterProgress, setShooterProgress] = useState([]);
  const [messageText, setMessageText] = useState('');
  const [sendingMsg, setSendingMsg] = useState(false);

  const isCoach = profile?.role === 'coach';

  useEffect(() => {
    fetchTeamData();
  }, [activeTeamCode]);

  async function fetchTeamData() {
    if (!activeTeamCode) {
      setLoading(false);
      return;
    }

    setLoading(true);

    const { data: teamData } = await supabase
      .from('teams')
      .select('name')
      .eq('code', activeTeamCode)
      .single();

    if (teamData) setTeamName(teamData.name);

    const { data: memberData, error } = await supabase
      .from('profiles')
      .select('id, display_name, email, role, category')
      .eq('team_code', activeTeamCode);

    if (!error && memberData) {
      setMembers(memberData);
    }
    setLoading(false);
  }

  async function inspectShooter(member) {
    if (!isCoach || member.role === 'coach') return;
    setSelectedShooter(member);

    const { data } = await supabase
      .from('progress_logs')
      .select('*')
      .eq('user_id', member.id)
      .order('created_at', { ascending: false });

    if (data) setShooterProgress(data);
  }

  async function sendMessageToShooter() {
    if (!messageText.trim() || !selectedShooter) return;
    setSendingMsg(true);

    const formattedNote = `💬 COACH DIRECT FEEDBACK:\n${messageText.trim()}`;

    const { error } = await supabase.from('diary_entries').insert([
      {
        user_id: selectedShooter.id,
        date: todayISO(),
        text: formattedNote,
      }
    ]);

    if (!error) {
      alert(`Message sent to ${selectedShooter.display_name || selectedShooter.email}'s diary!`);
      setMessageText('');
    } else {
      alert('Error sending message: ' + error.message);
    }
    setSendingMsg(false);
  }

  async function joinAdditionalTeam() {
    if (!newTeamCode.trim()) return alert('Please enter a team code');
    setUpdating(true);

    const cleanCode = newTeamCode.trim().toUpperCase();

    if (isCoach) {
      const { error } = await supabase.from('coach_teams').insert([
        { coach_id: profile.id, team_code: cleanCode }
      ]);

      if (!error) {
        alert(`Successfully joined team ${cleanCode}!`);
        setNewTeamCode('');
        if (onTeamAdded) onTeamAdded(cleanCode);
      } else {
        alert('Error adding team: ' + error.message);
      }
    } else {
      const { error } = await supabase
        .from('profiles')
        .update({ team_code: cleanCode })
        .eq('id', profile.id);

      if (!error) window.location.reload();
      else alert('Error joining team: ' + error.message);
    }
    setUpdating(false);
  }

  async function leaveCurrentTeam() {
    if (!confirm('Are you sure you want to remove/leave this team?')) return;
    setUpdating(true);

    if (isCoach) {
      await supabase
        .from('coach_teams')
        .delete()
        .eq('coach_id', profile.id)
        .eq('team_code', activeTeamCode);

      window.location.reload();
    } else {
      const { error } = await supabase
        .from('profiles')
        .update({ team_code: null })
        .eq('id', profile.id);

      if (!error) window.location.reload();
      else alert('Error leaving team: ' + error.message);
    }
    setUpdating(false);
  }

  if (loading) return <Card><p style={{ color: COLORS.textMuted }}>Loading team workspace...</p></Card>;

  return (
    <div>
      {/* COACH MULTI-TEAM SWITCHER HEADER */}
      {isCoach && coachTeams.length > 0 && (
        <Card>
          <label style={{ display: 'block', marginBottom: 6, color: COLORS.textMuted, fontSize: 12 }}>
            Switch Active Team Workspace:
          </label>
          <select
            value={activeTeamCode}
            onChange={(e) => onSelectTeam(e.target.value)}
            style={{
              width: '100%',
              padding: 10,
              background: COLORS.surfaceAlt,
              color: COLORS.brass,
              fontWeight: 'bold',
              border: `1px solid ${COLORS.border}`,
              borderRadius: 4,
              boxSizing: 'border-box',
            }}
          >
            {coachTeams.map((code) => (
              <option key={code} value={code}>Team Code: {code}</option>
            ))}
          </select>
        </Card>
      )}

      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 className="font-display" style={{ margin: 0 }}>
              {teamName || 'Team Workspace'}
            </h2>
            <p style={{ color: COLORS.textMuted, margin: '4px 0 0 0' }}>
              Team Code: <span style={{ color: COLORS.brass, fontWeight: 'bold' }}>{activeTeamCode || 'None'}</span>
            </p>
          </div>
          {activeTeamCode && (
            <Button variant="ghost" onClick={leaveCurrentTeam} disabled={updating}>
              Leave Team
            </Button>
          )}
        </div>
      </Card>

      {/* ADD / JOIN ANOTHER TEAM FORM */}
      <Card>
        <h4 className="font-display" style={{ marginTop: 0, marginBottom: 8 }}>
          {isCoach ? '➕ Add Another Team to Your Coach Workspace' : 'Join a Team Workspace'}
        </h4>
        <div style={{ display: 'flex', gap: 8 }}>
          <input
            type="text"
            placeholder="Enter Team Code (e.g. X7K9P)"
            value={newTeamCode}
            onChange={(e) => setNewTeamCode(e.target.value)}
            style={{
              flex: 1,
              padding: 10,
              background: COLORS.surfaceAlt,
              color: COLORS.text,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 4,
            }}
          />
          <Button onClick={joinAdditionalTeam} disabled={updating}>
            {updating ? <Loader2 size={16} /> : 'Add Team'}
          </Button>
        </div>
      </Card>

      {/* ROSTER */}
      {activeTeamCode && (
        <Card>
          <h3 className="font-display" style={{ marginTop: 0 }}>Roster ({members.length})</h3>
          {isCoach && (
            <p style={{ color: COLORS.textMuted, fontSize: 12, marginTop: -8, marginBottom: 12 }}>
              💡 Tap on any shooter's name to view their recent progress and send a personal feedback message.
            </p>
          )}

          {members.map((member, idx) => (
            <div 
              key={idx} 
              onClick={() => inspectShooter(member)}
              style={{ 
                display: 'flex', 
                justify: 'space-between', 
                padding: 12, 
                background: COLORS.surfaceAlt, 
                borderRadius: 6, 
                marginBottom: 8,
                cursor: isCoach && member.role !== 'coach' ? 'pointer' : 'default',
                border: selectedShooter?.id === member.id ? `1px solid ${COLORS.brass}` : '1px solid transparent'
              }}
            >
              <div>
                <div>
                  <strong>{member.display_name || member.email}</strong>
                  {isCoach && member.role !== 'coach' && (
                    <span style={{ fontSize: 11, color: COLORS.brass, marginLeft: 8 }}>[Tap to Inspect]</span>
                  )}
                </div>
                <div className="font-mono" style={{ color: COLORS.textMuted, fontSize: 12 }}>
                  {member.email} {member.category ? `• ${member.category}` : ''}
                </div>
              </div>
              <span style={{ color: COLORS.brass, textTransform: 'capitalize' }}>{member.role || 'Member'}</span>
            </div>
          ))}
        </Card>
      )}

      {/* INSPECT SHOOTER MODAL / CARD */}
      {selectedShooter && (
        <Card>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <h3 className="font-display" style={{ margin: 0, color: COLORS.brass }}>
              {selectedShooter.display_name || selectedShooter.email}'s Profile
            </h3>
            <Button variant="ghost" onClick={() => setSelectedShooter(null)}>Close</Button>
          </div>

          <div style={{ background: COLORS.surfaceAlt, padding: 12, borderRadius: 6, marginBottom: 16 }}>
            <label style={{ display: 'block', marginBottom: 6, color: COLORS.textMuted, fontSize: 12 }}>
              Send Personal Feedback / Message to {selectedShooter.display_name || 'Shooter'}
            </label>
            <div style={{ display: 'flex', gap: 8 }}>
              <input 
                type="text" 
                value={messageText} 
                onChange={(e) => setMessageText(e.target.value)} 
                placeholder="Write feedback note..."
                style={{
                  flex: 1,
                  padding: 10,
                  background: COLORS.bg,
                  color: COLORS.text,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 4,
                }}
              />
              <Button onClick={sendMessageToShooter} disabled={sendingMsg}>
                {sendingMsg ? <Loader2 size={16} /> : <Send size={16} />}
              </Button>
            </div>
          </div>

          <h4 className="font-display" style={{ marginTop: 0, marginBottom: 10 }}>Recent Target Scores</h4>
          {shooterProgress.length === 0 ? (
            <p style={{ color: COLORS.textMuted, fontSize: 13 }}>No target scores submitted yet.</p>
          ) : (
            shooterProgress.map((item) => (
              <div key={item.id} style={{ padding: 10, background: COLORS.bg, borderRadius: 6, marginBottom: 8, border: `1px solid ${COLORS.border}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: COLORS.textMuted, fontSize: 12 }}>{item.date} • {item.discipline}</span>
                  <strong style={{ color: COLORS.brass, fontSize: 18 }}>{item.score}</strong>
                </div>
                {item.notes && <p style={{ margin: '4px 0 0 0', fontSize: 13 }}>{item.notes}</p>}
                {item.photo_url && (
                  <img 
                    src={item.photo_url} 
                    alt="Target Sheet" 
                    style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: 4, marginTop: 8 }}
                  />
                )}
              </div>
            ))
          )}
        </Card>
      )}
    </div>
  );
}

// --- FREE GEMINI AI COACH TAB ---
function AICoachTab({ profile, user }) {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  async function askAICoach() {
    if (!query.trim()) return;
    setLoading(true);

    const { data: recentScores } = await supabase
      .from('progress_logs')
      .select('score, discipline, date, notes')
      .eq('user_id', user.id)
      .limit(5);

    const { data, error } = await supabase.functions.invoke('ai-coach', {
      body: {
        prompt: query,
        scores: recentScores || [],
        category: profile?.category || '10m Air Pistol'
      }
    });

    if (data?.reply) setResponse(data.reply);
    else if (error) setResponse('Error: Could not connect to AI Coach.');
    
    setLoading(false);
  }

  return (
    <Card>
      <h2 className="font-display" style={{ marginTop: 0 }}>🎯 AI Performance Coach</h2>
      <p style={{ color: COLORS.textMuted, fontSize: 13 }}>
        Ask for technical advice, sight adjustments, or dry-fire drills customized to your recent scores.
      </p>

      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        rows={3}
        placeholder="e.g., Analyze my recent scores and suggest a trigger control drill for low shots..."
        style={{
          width: '100%',
          padding: 10,
          background: COLORS.surfaceAlt,
          color: COLORS.text,
          border: `1px solid ${COLORS.border}`,
          borderRadius: 6,
          boxSizing: 'border-box'
        }}
      />

      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={askAICoach} disabled={loading}>
          {loading ? <Loader2 size={16} /> : 'Ask AI Coach'}
        </Button>
      </div>

      {response && (
        <div style={{ marginTop: 16, padding: 12, background: COLORS.bg, borderLeft: `3px solid ${COLORS.brass}`, borderRadius: 4 }}>
          <strong style={{ color: COLORS.brass, display: 'block', marginBottom: 6 }}>Coach Analysis:</strong>
          <p style={{ margin: 0, whiteSpace: 'pre-wrap', fontSize: 14 }}>{response}</p>
        </div>
      )}
    </Card>
  );
}

// --- DIARY TAB ---
function DiaryTab({ user }) {
  const [entries, setEntries] = useState([]);
  const [text, setText] = useState('');

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
            <strong style={{ color: entry.text.startsWith('💬 COACH') ? COLORS.olive : COLORS.brass }}>
              {entry.date} {entry.text.startsWith('💬 COACH') ? '• Coach Note' : ''}
            </strong>
            <Button variant="ghost" onClick={() => deleteEntry(entry.id)}><Trash2 size={15} /></Button>
          </div>
          <p style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{entry.text}</p>
        </Card>
      ))}
    </div>
  );
}

// --- ANNOUNCEMENT TAB ---
function AnnouncementTab({ profile, activeTeamCode, user }) {
  const [announcements, setAnnouncements] = useState([]);
  const [message, setMessage] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const isCoach = profile?.role === 'coach';

  useEffect(() => {
    fetchAnnouncements();
  }, [activeTeamCode]);

  async function fetchAnnouncements() {
    if (!activeTeamCode) return;

    const { data } = await supabase
      .from('announcements')
      .select('*')
      .eq('team_code', activeTeamCode)
      .order('created_at', { ascending: false });

    if (data) setAnnouncements(data);
  }

  async function addAnnouncement() {
    if (!message.trim() && !imageFile) return;
    setUploading(true);

    let uploadedPhotoUrl = null;

    if (imageFile) {
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `announcement_${user.id}_${Date.now()}.${fileExt}`;
      const { error: uploadErr } = await supabase.storage
        .from('targets')
        .upload(fileName, imageFile);

      if (!uploadErr) {
        const { data: publicUrlData } = supabase.storage
          .from('targets')
          .getPublicUrl(fileName);
        uploadedPhotoUrl = publicUrlData.publicUrl;
      }
    }

    const { data, error } = await supabase.from('announcements').insert([
      { 
        team_code: activeTeamCode, 
        author_email: user.email, 
        text: message.trim(), 
        photo_url: uploadedPhotoUrl,
        date: todayISO() 
      }
    ]).select();

    if (!error && data) {
      setAnnouncements([data[0], ...announcements]);
      setMessage('');
      setImageFile(null);
    }
    setUploading(false);
  }

  return (
    <div>
      {isCoach && (
        <Card>
          <h2 className="font-display" style={{ marginTop: 0 }}>Team Announcements ({activeTeamCode})</h2>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Broadcast a message or schedule to your team..."
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

          <div style={{ marginTop: 12, marginBottom: 12 }}>
            <label style={{ display: 'block', marginBottom: 6, color: COLORS.textMuted, fontSize: 12 }}>
              Attach Announcement Image (Diagram, Training Schedule, etc.)
            </label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={(e) => setImageFile(e.target.files[0])}
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

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={addAnnouncement} disabled={uploading}>
              {uploading ? <Loader2 size={16} /> : 'Send Broadcast'}
            </Button>
          </div>
        </Card>
      )}

      {announcements.map((item) => (
        <Card key={item.id}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <strong style={{ color: COLORS.brass }}>{item.date}</strong>
            <span className="font-mono" style={{ color: COLORS.textMuted, fontSize: 12 }}>{item.author_email}</span>
          </div>
          {item.text && <p style={{ margin: '0 0 10px 0', whiteSpace: 'pre-wrap' }}>{item.text}</p>}

          {item.photo_url && (
            <div style={{ marginTop: 10, borderTop: `1px solid ${COLORS.border}`, paddingTop: 10 }}>
              <img 
                src={item.photo_url} 
                alt="Announcement Attachment" 
                style={{ maxWidth: '100%', maxHeight: '400px', borderRadius: 6, border: `1px solid ${COLORS.border}` }}
              />
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}

// --- PROGRESS TAB ---
function ProgressTab({ profile, activeTeamCode, user }) {
  const [entries, setEntries] = useState([]);
  const [discipline, setDiscipline] = useState(profile?.category || DISCIPLINES[0]);
  const [score, setScore] = useState('');
  const [notes, setNotes] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const isCoach = profile?.role === 'coach';

  useEffect(() => {
    fetchSessions();
  }, [user?.id, activeTeamCode]);

  async function fetchSessions() {
    if (isCoach) {
      const { data } = await supabase
        .from('progress_logs')
        .select('*')
        .eq('team_code', activeTeamCode)
        .order('created_at', { ascending: false });

      if (data) setEntries(data);
    } else {
      const { data } = await supabase
        .from('progress_logs')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (data) setEntries(data);
    }
  }

  async function addSession() {
    const value = Number(score);
    if (Number.isNaN(value) || score === '') return;

    setUploading(true);
    let uploadedPhotoUrl = null;

    if (imageFile) {
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `${user.id}_${Date.now()}.${fileExt}`;
      const { error: uploadErr } = await supabase.storage
        .from('targets')
        .upload(fileName, imageFile);

      if (!uploadErr) {
        const { data: publicUrlData } = supabase.storage
          .from('targets')
          .getPublicUrl(fileName);
        uploadedPhotoUrl = publicUrlData.publicUrl;
      }
    }

    const { data, error } = await supabase.from('progress_logs').insert([
      {
        user_id: user.id,
        team_code: activeTeamCode,
        discipline: discipline,
        score: value,
        notes: notes.trim(),
        photo_url: uploadedPhotoUrl,
        date: todayISO(),
      }
    ]).select();

    if (!error && data) {
      setEntries([data[0], ...entries]);
      setScore('');
      setNotes('');
      setImageFile(null);
    }
    setUploading(false);
  }

  async function deleteSession(id) {
    await supabase.from('progress_logs').delete().eq('id', id);
    setEntries(entries.filter((e) => e.id !== id));
  }

  return (
    <div>
      {!isCoach && (
        <Card>
          <h2 className="font-display" style={{ marginTop: 0 }}>Target Score Entry</h2>
          
          <div style={{ marginBottom: 12 }}>
            <label style={{ display: 'block', marginBottom: 6, color: COLORS.textMuted, fontSize: 12 }}>Discipline / Event</label>
            <select
              value={discipline}
              onChange={(e) => setDiscipline(e.target.value)}
              style={{
                width: '100%',
                padding: 10,
                background: COLORS.surfaceAlt,
                color: COLORS.text,
                border: `1px solid ${COLORS.border}`,
                borderRadius: 4,
                boxSizing: 'border-box',
              }}
            >
              {DISCIPLINES.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          <Input label="Score" value={score} type="number" onChange={(e) => setScore(e.target.value)} />
          <Input label="Notes / Sight Adjustments" value={notes} onChange={(e) => setNotes(e.target.value)} />
          
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', marginBottom: 6, color: COLORS.textMuted, fontSize: 12 }}>
              Target Sheet Photo (Upload / Take Picture)
            </label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={(e) => setImageFile(e.target.files[0])}
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

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={addSession} disabled={uploading}>
              {uploading ? <Loader2 size={16} /> : 'Add Target Score'}
            </Button>
          </div>
        </Card>
      )}

      {isCoach && (
        <Card>
          <h2 className="font-display" style={{ marginTop: 0 }}>Team Feed ({activeTeamCode})</h2>
          <p style={{ color: COLORS.textMuted, margin: 0, fontSize: 13 }}>Viewing live target sheets and scores from team {activeTeamCode}.</p>
        </Card>
      )}

      {entries.map((item) => (
        <Card key={item.id}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div className="font-display" style={{ fontSize: 18, color: COLORS.brass }}>
                {item.discipline || profile?.category || 'Target Session'}
              </div>
              <div className="font-mono" style={{ color: COLORS.textMuted, fontSize: 12, marginTop: 2 }}>
                Date: {item.date}
              </div>
              {item.notes && <p style={{ margin: '8px 0 0 0', color: COLORS.text }}>{item.notes}</p>}
            </div>

            <div style={{ textAlign: 'right' }}>
              <div className="font-display" style={{ color: COLORS.brass, fontSize: 28 }}>{item.score}</div>
              {!isCoach && (
                <Button variant="ghost" onClick={() => deleteSession(item.id)}><Trash2 size={15} /></Button>
              )}
            </div>
          </div>

          {item.photo_url && (
            <div style={{ marginTop: 12, borderTop: `1px solid ${COLORS.border}`, paddingTop: 10 }}>
              <p style={{ fontSize: 12, color: COLORS.textMuted, marginBottom: 6, display: 'flex', alignItems: 'center', gap: 4 }}>
                <Camera size={14} /> Target Sheet Photo:
              </p>
              <img 
                src={item.photo_url} 
                alt="Target Sheet" 
                style={{ maxWidth: '100%', maxHeight: '350px', borderRadius: 6, border: `1px solid ${COLORS.border}` }}
              />
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}

// --- DASHBOARD ---
function Dashboard({ user, profile, onLogout }) {
  const [tab, setTab] = useState('team');
  const [coachTeams, setCoachTeams] = useState([]);
  const [activeTeamCode, setActiveTeamCode] = useState(profile?.team_code || '');

  const isCoach = profile?.role === 'coach';

  useEffect(() => {
    if (isCoach) {
      fetchCoachTeams();
    } else {
      setActiveTeamCode(profile?.team_code || '');
      if (window.OneSignalDeferred && profile?.team_code) {
        window.OneSignalDeferred.push(async function(OneSignal) {
          await OneSignal.login(user.id);
          await OneSignal.User.addTags({
            team_code: profile.team_code,
            role: 'shooter'
          });
        });
      }
    }
  }, [profile?.id, isCoach]);

  async function fetchCoachTeams() {
    const { data } = await supabase
      .from('coach_teams')
      .select('team_code')
      .eq('coach_id', profile.id);

    let teamsList = [];
    if (data && data.length > 0) {
      teamsList = data.map((t) => t.team_code);
    } else if (profile?.team_code) {
      teamsList = [profile.team_code];
    }

    setCoachTeams(teamsList);
    if (teamsList.length > 0 && !teamsList.includes(activeTeamCode)) {
      setActiveTeamCode(teamsList[0]);
    }

    // Tag all coach team codes in OneSignal
    if (window.OneSignalDeferred) {
      window.OneSignalDeferred.push(async function(OneSignal) {
        await OneSignal.login(user.id);
        const tags = { role: 'coach' };
        teamsList.forEach((code, i) => {
          tags[`team_code_${i + 1}`] = code;
        });
        await OneSignal.User.addTags(tags);
      });
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: COLORS.bg, color: COLORS.text }}>
      <style>{FONT_STYLE}</style>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 18, borderBottom: `1px solid ${COLORS.border}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Crosshair color={COLORS.red} />
          <h2 className="font-display" style={{ margin: 0 }}>DEADEYE</h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div>
            <div style={{ fontWeight: 'bold' }}>{profile?.display_name || user.email}</div>
            <div className="font-mono" style={{ fontSize: 11, color: COLORS.brass, textAlign: 'right', textTransform: 'capitalize' }}>
              {profile?.role || 'Shooter'} {profile?.category ? `• ${profile.category}` : ''}
            </div>
          </div>

          <Button variant="ghost" onClick={onLogout} ariaLabel="Logout">
            <LogOut size={16} />
          </Button>
        </div>
      </header>

      <nav style={{ display: 'flex', borderBottom: `1px solid ${COLORS.border}` }}>
        <button onClick={() => setTab('team')} style={{ flex: 1, padding: 15, cursor: 'pointer', border: 'none', background: tab === 'team' ? COLORS.surfaceAlt : 'transparent', color: tab === 'team' ? COLORS.text : COLORS.textMuted }}>
          <Users size={18} style={{ marginBottom: 4 }} />
          <div>Team</div>
        </button>

        <button onClick={() => setTab('announce')} style={{ flex: 1, padding: 15, cursor: 'pointer', border: 'none', background: tab === 'announce' ? COLORS.surfaceAlt : 'transparent', color: tab === 'announce' ? COLORS.text : COLORS.textMuted }}>
          <Edit size={18} style={{ marginBottom: 4 }} />
          <div>Announce</div>
        </button>

        {!isCoach && (
          <button onClick={() => setTab('diary')} style={{ flex: 1, padding: 15, cursor: 'pointer', border: 'none', background: tab === 'diary' ? COLORS.surfaceAlt : 'transparent', color: tab === 'diary' ? COLORS.text : COLORS.textMuted }}>
            <BookOpen size={18} style={{ marginBottom: 4 }} />
            <div>Diary</div>
          </button>
        )}

        <button onClick={() => setTab('ai')} style={{ flex: 1, padding: 15, cursor: 'pointer', border: 'none', background: tab === 'ai' ? COLORS.surfaceAlt : 'transparent', color: tab === 'ai' ? COLORS.text : COLORS.textMuted }}>
          <Bot size={18} style={{ marginBottom: 4 }} />
          <div>AI Coach</div>
        </button>

        <button onClick={() => setTab('progress')} style={{ flex: 1, padding: 15, cursor: 'pointer', border: 'none', background: tab === 'progress' ? COLORS.surfaceAlt : 'transparent', color: tab === 'progress' ? COLORS.text : COLORS.textMuted }}>
          <TrendingUp size={18} style={{ marginBottom: 4 }} />
          <div>Progress</div>
        </button>
      </nav>

      <main style={{ padding: 20, maxWidth: 900, margin: 'auto' }}>
        {tab === 'team' && (
          <TeamTab 
            profile={profile} 
            activeTeamCode={activeTeamCode} 
            coachTeams={coachTeams}
            onSelectTeam={(code) => setActiveTeamCode(code)}
            onTeamAdded={(code) => fetchCoachTeams()}
          />
        )}
        {tab === 'announce' && <AnnouncementTab profile={profile} activeTeamCode={activeTeamCode} user={user} />}
        {tab === 'diary' && !isCoach && <DiaryTab user={user} />}
        {tab === 'ai' && <AICoachTab profile={profile} user={user} />}
        {tab === 'progress' && <ProgressTab profile={profile} activeTeamCode={activeTeamCode} user={user} />}
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

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) fetchProfile(session.user.id);
      else setLoading(false);
    });

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

  return (
    <Dashboard 
      user={user} 
      profile={profile} 
      onLogout={handleLogout} 
    />
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <AppInner />
    </ErrorBoundary>
  );
}
