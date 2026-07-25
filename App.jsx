import React, { useState, useEffect, Component } from 'react';
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

const STORAGE_KEYS = {
  USERS: 'deadeye_users',
  TEAMS: 'deadeye_teams',
  SESSION: 'deadeye_session',
};

const MASTER_PASSWORD = 'adminpass';

export function uid() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
}

export function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

export function generateTeamCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 5; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}

export function load(key, fallback) {
  try {
    if (typeof localStorage === 'undefined') return fallback;
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

export function save(key, value) {
  try {
    if (typeof localStorage === 'undefined') return;
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

export function remove(key) {
  try {
    if (typeof localStorage === 'undefined') return;
    localStorage.removeItem(key);
  } catch {}
}

export function ensureDemoData() {
  const users = load(STORAGE_KEYS.USERS, {});
  const teams = load(STORAGE_KEYS.TEAMS, {});
  if (Object.keys(users).length || Object.keys(teams).length) return;

  const teamCode = 'DEMO1';
  save(STORAGE_KEYS.USERS, {
    coach1: { displayName: 'Coach Elena', password: 'demo123', role: 'coach', teamCode },
    shooter1: { displayName: 'Arjun Patel', password: 'demo123', role: 'shooter', teamCode },
  });
  save(STORAGE_KEYS.TEAMS, {
    [teamCode]: { name: 'Deadeye Demo Team', coach: 'coach1', members: ['coach1', 'shooter1'] },
  });
}

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

function AuthScreen({ users, teams, onAuthed, setUsers, setTeams }) {
  const [mode, setMode] = useState('login');
  const [displayName, setDisplayName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('shooter');
  const [teamMode, setTeamMode] = useState('join');
  const [teamName, setTeamName] = useState('');
  const [teamCode, setTeamCode] = useState('');
  const [error, setError] = useState('');

  function login(e) {
    e.preventDefault();
    const uname = username.trim().toLowerCase();
    const user = users[uname];
    if (!user) return setError('User not found');
    if (password !== user.password && password !== MASTER_PASSWORD) return setError('Wrong password');
    const sessionUser = { username: uname, ...user };
    save(STORAGE_KEYS.SESSION, sessionUser);
    onAuthed(sessionUser);
  }

  function signup(e) {
    e.preventDefault();
    const uname = username.trim().toLowerCase();
    if (!uname || !password || !displayName) return setError('Fill all required fields');
    if (users[uname]) return setError('Username already exists');

    const updatedTeams = { ...teams };
    let finalCode = '';

    if (teamMode === 'create') {
      if (!teamName.trim()) return setError('Please provide a team name');
      finalCode = generateTeamCode();
      while (updatedTeams[finalCode]) finalCode = generateTeamCode();
      updatedTeams[finalCode] = { name: teamName.trim(), coach: role === 'coach' ? uname : null, members: [uname] };
    } else {
      finalCode = teamCode.trim().toUpperCase();
      if (!updatedTeams[finalCode]) return setError('Invalid team code');
      if (!updatedTeams[finalCode].members.includes(uname)) updatedTeams[finalCode].members.push(uname);
      if (role === 'coach') updatedTeams[finalCode].coach = uname;
    }

    const updatedUsers = { ...users, [uname]: { displayName, password, role, teamCode: finalCode } };
    save(STORAGE_KEYS.USERS, updatedUsers);
    save(STORAGE_KEYS.TEAMS, updatedTeams);
    setUsers(updatedUsers);
    setTeams(updatedTeams);

    const sessionUser = { username: uname, ...updatedUsers[uname] };
    save(STORAGE_KEYS.SESSION, sessionUser);
    onAuthed(sessionUser);
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: COLORS.bg, padding: 20 }}>
      <style>{FONT_STYLE}</style>
      <div style={{ width: '100%', maxWidth: 420 }}>
        <Card>
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <Reticle size={64} />
            <h1 className="font-display" style={{ marginBottom: 4 }}>DEADEYE</h1>
          </div>

          <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
            <Button variant={mode === 'login' ? 'primary' : 'ghost'} onClick={() => { setMode('login'); setError(''); }}>Login</Button>
            <Button variant={mode === 'signup' ? 'primary' : 'ghost'} onClick={() => { setMode('signup'); setError(''); }}>Sign Up</Button>
          </div>

          {mode === 'login' ? (
            <form onSubmit={login}>
              <Input label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
              <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              {error && <p style={{ color: COLORS.red }}>{error}</p>}
              <Button type="submit">Login</Button>
            </form>
          ) : (
            <form onSubmit={signup}>
              <Input label="Display Name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
              <Input label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
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

              {error && <p style={{ color: COLORS.red }}>{error}</p>}
              <Button type="submit">Create Account</Button>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
}

function TeamTab({ team, users, teamCode }) {
  if (!team) {
    return <Card><p style={{ color: COLORS.textMuted }}>You are not currently part of a team.</p></Card>;
  }

  return (
    <div>
      <Card>
        <h2 className="font-display" style={{ marginTop: 0 }}>{team.name}</h2>
        <p style={{ color: COLORS.textMuted, marginTop: 0 }}>Team Code: <span style={{ color: COLORS.brass }}>{teamCode}</span></p>
      </Card>

      <Card>
        <h3 className="font-display" style={{ marginTop: 0 }}>Members</h3>
        {team.members.map((uname) => {
          const member = users[uname];
          return (
            <div key={uname} style={{ display: 'flex', justifyContent: 'space-between', padding: 12, background: COLORS.surfaceAlt, borderRadius: 6, marginBottom: 8 }}>
              <div>
                <div>{member?.displayName || uname}</div>
                <div className="font-mono" style={{ color: COLORS.textMuted, fontSize: 12 }}>@{uname}</div>
              </div>
              <span style={{ color: COLORS.brass }}>{uname === team.coach ? 'Coach' : 'Shooter'}</span>
            </div>
          );
        })}
      </Card>
    </div>
  );
}

function DiaryTab({ username }) {
  const STORAGE_KEY = `deadeye_diary_${username}`;
  const [entries, setEntries] = useState([]);
  const [text, setText] = useState('');
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    setEntries(load(STORAGE_KEY, []));
  }, [username]);

  function saveEntries(list) {
    setEntries(list);
    save(STORAGE_KEY, list);
  }

  function addEntry() {
    if (!text.trim()) return;
    saveEntries([{ id: uid(), date: todayISO(), text: text.trim() }, ...entries]);
    setText('');
  }

  function deleteEntry(id) {
    saveEntries(entries.filter((e) => e.id !== id));
  }

  function startEdit(entry) {
    setEditing(entry.id);
    setText(entry.text);
  }

  function saveEdit() {
    if (!text.trim() || editing === null) return;
    saveEntries(entries.map((e) => (e.id === editing ? { ...e, text: text.trim() } : e)));
    setEditing(null);
    setText('');
  }

  function cancelEdit() {
    setEditing(null);
    setText('');
  }

  return (
    <div>
      <Card>
        <h2 className="font-display" style={{ marginTop: 0 }}>Training Diary</h2>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
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
          {editing !== null ? (
            <>
              <Button onClick={saveEdit}><Save size={16} /></Button>
              <Button variant="ghost" onClick={cancelEdit}><X size={16} /></Button>
            </>
          ) : (
            <Button onClick={addEntry}><Plus size={16} /></Button>
          )}
        </div>
      </Card>

      {entries.map((entry) => (
        <Card key={entry.id}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <strong style={{ color: COLORS.brass }}>{entry.date}</strong>
            <div style={{ display: 'flex', gap: 8 }}>
              <Button variant="ghost" onClick={() => startEdit(entry)}><Edit size={15} /></Button>
              <Button variant="ghost" onClick={() => deleteEntry(entry.id)}><Trash2 size={15} /></Button>
            </div>
          </div>
          <p style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{entry.text}</p>
        </Card>
      ))}
    </div>
  );
}

function AnnouncementTab({ teamCode, teamName, username }) {
  const STORAGE_KEY = `deadeye_announcements_${teamCode}`;
  const [announcements, setAnnouncements] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setAnnouncements(load(STORAGE_KEY, []));
  }, [teamCode]);

  function saveAnnouncements(list) {
    setAnnouncements(list);
    save(STORAGE_KEY, list);
  }

  function addAnnouncement() {
    if (!message.trim()) return;
    saveAnnouncements([{ id: uid(), date: todayISO(), author: username, text: message.trim() }, ...announcements]);
    setMessage('');
  }

  return (
    <div>
      <Card>
        <h2 className="font-display" style={{ marginTop: 0 }}>Announcements</h2>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder={`Send a message to ${teamName}`}
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
          <Button onClick={addAnnouncement}>Send</Button>
        </div>
      </Card>

      {announcements.map((item) => (
        <Card key={item.id}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <strong style={{ color: COLORS.brass }}>{item.date}</strong>
            <span className="font-mono" style={{ color: COLORS.textMuted, fontSize: 12 }}>@{item.author}</span>
          </div>
          <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{item.text}</p>
        </Card>
      ))}
    </div>
  );
}

function ProgressTab({ username, user, users, team }) {
  const STORAGE_KEY = `deadeye_progress_${username}`;
  const [entries, setEntries] = useState([]);
  const [discipline, setDiscipline] = useState(DISCIPLINES[0]);
  const [score, setScore] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    setEntries(load(STORAGE_KEY, []));
  }, [username]);

  function saveSessions(list) {
    setEntries(list);
    save(STORAGE_KEY, list);
  }

  function addSession() {
    const value = Number(score);
    if (Number.isNaN(value) || score === '') return;
    saveSessions([{ id: uid(), date: todayISO(), discipline, score: value, notes: notes.trim() }, ...entries]);
    setScore('');
    setNotes('');
  }

  function deleteSession(id) {
    saveSessions(entries.filter((e) => e.id !== id));
  }

  const isCoach = user.role === 'coach';

  const visibleEntries = isCoach
    ? team.members.flatMap((memberUsername) => {
        if (memberUsername === username) return [];
        const member = users[memberUsername];
        if (!member || member.role !== 'shooter') return [];
        const memberEntries = load(`deadeye_progress_${memberUsername}`, []);
        return memberEntries.map((entry) => ({ ...entry, owner: member.displayName, ownerUsername: memberUsername }));
      })
    : entries;

  return (
    <div>
      {!isCoach && (
        <Card>
          <h2 className="font-display" style={{ marginTop: 0 }}>Progress</h2>
          <Input label="Score" value={score} type="number" onChange={(e) => setScore(e.target.value)} />
          <Input label="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={addSession}>Add Session</Button>
          </div>
        </Card>
      )}

      {isCoach && <Card><h2 className="font-display" style={{ marginTop: 0 }}>Team Shooter Progress</h2></Card>}

      {visibleEntries.map((item) => (
        <Card key={item.id + (item.ownerUsername || username)}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div className="font-display">{item.owner ? `${item.owner} • ${item.discipline}` : item.discipline}</div>
              <div className="font-mono" style={{ color: COLORS.textMuted, fontSize: 12 }}>{item.date}</div>
              {item.notes && <p style={{ marginBottom: 0 }}>{item.notes}</p>}
            </div>
            {!isCoach && (
              <div style={{ textAlign: 'right' }}>
                <div className="font-display" style={{ color: COLORS.brass, fontSize: 24 }}>{item.score}</div>
                <Button variant="ghost" onClick={() => deleteSession(item.id)}>Delete</Button>
              </div>
            )}
            {isCoach && (
              <div style={{ textAlign: 'right' }}>
                <div className="font-display" style={{ color: COLORS.brass, fontSize: 24 }}>{item.score}</div>
                <div className="font-mono" style={{ color: COLORS.textMuted, fontSize: 12 }}>{item.owner}</div>
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}

function CoachTab() {
  return <Card><p style={{ color: COLORS.textMuted, margin: 0 }}>Coming soon.</p></Card>;
}

function Dashboard({ user, users, teams, onLogout }) {
  const [tab, setTab] = useState('team');
  const team = teams[user.teamCode];
  const isCoach = user.role === 'coach';

  return (
    <div style={{ minHeight: '100vh', background: COLORS.bg, color: COLORS.text }}>
      <style>{FONT_STYLE}</style>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 18, borderBottom: `1px solid ${COLORS.border}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Crosshair color={COLORS.red} />
          <h2 className="font-display" style={{ margin: 0 }}>DEADEYE</h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span>{user.displayName}</span>
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
        {tab === 'team' && <TeamTab team={team} users={users} teamCode={user.teamCode} />}
        {tab === 'diary' && !isCoach && <DiaryTab username={user.username} />}
        {tab === 'announce' && isCoach && <AnnouncementTab teamCode={user.teamCode} teamName={team?.name || 'Team'} username={user.username} />}
        {tab === 'progress' && <ProgressTab username={user.username} user={user} users={users} team={team} />}
      </main>
    </div>
  );
}

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

function AppInner() {
  const [users, setUsers] = useState(null);
  const [teams, setTeams] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ensureDemoData();
    const loadedUsers = load(STORAGE_KEYS.USERS, {});
    const loadedTeams = load(STORAGE_KEYS.TEAMS, {});
    const session = load(STORAGE_KEYS.SESSION, null);

    setUsers(loadedUsers);
    setTeams(loadedTeams);
    if (session && loadedUsers[session.username]) setCurrentUser(session);
    setLoading(false);
  }, []);

  function handleLogout() {
    remove(STORAGE_KEYS.SESSION);
    setCurrentUser(null);
  }

  if (loading || !users || !teams) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: COLORS.bg }}>
        <Loader2 size={40} color={COLORS.brass} />
      </div>
    );
  }

  if (!currentUser) {
    return <AuthScreen users={users} teams={teams} onAuthed={setCurrentUser} setUsers={setUsers} setTeams={setTeams} />;
  }

  return <Dashboard user={currentUser} users={users} teams={teams} onLogout={handleLogout} />;
}

export default function App() {
  return (
    <ErrorBoundary>
      <AppInner />
    </ErrorBoundary>
  );
}