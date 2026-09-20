import { Router, type IRouter } from "express";

const router: IRouter = Router();

const teamMembers = [
  {
    name: 'Arjun Mehta',
    role: 'Founder & CEO',
    bio: 'Former design lead at a Fortune 500 tech company, Arjun envisioned a world where professional design tools are accessible to everyone — not just trained designers.',
    initials: 'AM',
    color: '#8b5cf6',
  },
  {
    name: 'Sofia Chen',
    role: 'CTO',
    bio: 'With a PhD in computer vision and over a decade of experience in machine learning, Sofia architects the AI engine that powers every creative tool in OrdStudio.',
    initials: 'SC',
    color: '#7c3aed',
  },
  {
    name: 'Marcus Rivera',
    role: 'Head of Design',
    bio: 'An award-winning visual designer who has shaped brand identities for startups and enterprises alike. Marcus ensures every pixel in OrdStudio reflects craft and intention.',
    initials: 'MR',
    color: '#a78bfa',
  },
  {
    name: 'Lena Johansson',
    role: 'VP of Product',
    bio: "A product strategist with roots in UX research, Lena bridges the gap between user needs and engineering capability, steering OrdStudio's roadmap with empathy and data.",
    initials: 'LJ',
    color: '#c4b5fd',
  },
];

router.get("/about", (_req, res) => {
  res.json({ success: true, teamMembers });
});

export default router;
