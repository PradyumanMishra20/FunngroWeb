export type SkillCategory = 'Frontend' | 'Backend' | 'Database' | 'Programming' | 'Tools'

export type Skill = {
  name: string
  category: SkillCategory
  /** One honest line about how this is actually used — shown on hover/focus. */
  note: string
}

export const skillCategories: SkillCategory[] = [
  'Frontend',
  'Backend',
  'Database',
  'Programming',
  'Tools',
]

export const skills: Skill[] = [
  { name: 'HTML', category: 'Frontend', note: 'Semantic structure for every project I ship.' },
  { name: 'CSS', category: 'Frontend', note: 'Layout, responsive design, transitions.' },
  { name: 'JavaScript', category: 'Frontend', note: 'The language I reach for first.' },
  { name: 'React', category: 'Frontend', note: 'Components, hooks, and client-side state.' },
  { name: 'Tailwind CSS', category: 'Frontend', note: 'Design systems without leaving the markup.' },

  { name: 'Node.js', category: 'Backend', note: 'Servers, file handling, and scripts.' },
  { name: 'Express.js', category: 'Backend', note: 'Routes, middleware and form endpoints.' },

  { name: 'MySQL', category: 'Database', note: 'Tables, relations and queries behind NoteEase.' },

  { name: 'C++', category: 'Programming', note: 'Where I learned logic and data structures.' },
  { name: 'Python', category: 'Programming', note: 'Scripting and problem solving.' },
  { name: 'JavaScript', category: 'Programming', note: 'Same language, both sides of the stack.' },

  { name: 'Git', category: 'Tools', note: 'Branches, commits, and undoing my mistakes.' },
  { name: 'GitHub', category: 'Tools', note: 'Where every project of mine lives.' },
  { name: 'VS Code', category: 'Tools', note: 'Editor, terminal, and debugger in one.' },
]
